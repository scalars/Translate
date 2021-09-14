<template>
    <div class="languages-page-container">
        <Modal
            :key="modalKey"
            v-model="showAddLanguage"
            :title="'Updating Languages'"
        >
            <LanguagesForm
                :languages="allLanguages"
                :added-languages="addedLanguages"
                :loading="loading"
                @saveLanguages="updateLanguages"
            />
        </Modal>
        <LanguagesTable
            :languages="addedLanguages"
            :loading="loading"
            :base-json-url="baseJsonUrl"
        >
            <template #general-options>
                <GeneralButton
                    responsive
                    icon="mdi-plus"
                    text="Add Language"
                    @click="addLanguage"
                />
            </template>
            <template #item-options="{ item }">
                <GeneralButton
                    icon-mode
                    icon="mdi-delete"
                    text="Delete Language"
                    @click="deleteLanguage(item)"
                />
            </template>
        </LanguagesTable>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Language } from '@scalars/cli';
import { uuid } from 'vue-uuid';
import LanguagesTable from '@/components/languages/LanguagesTable.vue';
import LanguagesForm from '@/components/languages/LanguagesForm.vue';
import Modal from '@/components/general/Modal.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
import { languageSelect } from '~/utils/scalarsSelect';

@Component( {
    components: { LanguagesTable, LanguagesForm, GeneralButton, Modal },
    layout: 'application'
} )
export default class LanguagesPage extends Vue {
    allLanguages: Language[] = [];
    addedLanguages: Language[] = [];
    loading: boolean = false;
    showAddLanguage: boolean = false;
    modalKey: string = uuid.v1();
    baseJsonUrl: string = ''

    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    beforeMount () {
        this.getLanguages();
        this.baseJsonUrl = `https://s3.amazonaws.com/${process.env.TRANSLATIONS_BUCKET_URL}/uploads/${this.application.name}`;
    }

    async getLanguages () {
        try {
            this.loading = true;
            this.allLanguages = await this.$apiClient.query.languages( {
                select: languageSelect
            } );
            this.addedLanguages = this.allLanguages.filter( ( language: Language ) =>
                this.application.languages.some( ( lang: Language ) =>
                    lang.id === language.id ) );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }

    async updateLanguages ( languages: Language[] ) {
        const hasChanged = this.validateIfLanguagesChanged( languages );
        if ( hasChanged ) {
            try {
                const oldLanguagesArray: Language[] = this.addedLanguages;
                const newLanguagesArray: Language[] = languages;

                const languagesToAdd: Language[] = newLanguagesArray.filter( ( language: Language ) =>
                    !oldLanguagesArray.some( ( lang: Language ) => lang.id === language.id ) );
                const languagesToRemove: Language[] = oldLanguagesArray.filter( ( language: Language ) =>
                    !newLanguagesArray.some( ( lang: Language ) => lang.id === language.id ) );

                this.loading = true;
                // TODO Uncomment code when the mutation returns the data correctly
                // const { updateApplication } =
                await this.$apiClient.mutation.updateApplication( {
                    where: { id: this.application.id },
                    data: {
                        languages: {
                            connect: languagesToAdd.map( ( language: Language ) => { return { id: language.id }; } ),
                            disconnect: languagesToRemove.map( ( language: Language ) => { return { id: language.id }; } )
                        }
                    }
                } );
                const updateApplication = { ...this.application, languages: [...languages] };
                this.addedLanguages = [...updateApplication.languages];
                this.$store.commit( 'sessionStorage/setApplication', updateApplication );
                this.showAddLanguage = false;
            } catch ( error ) {
                console.error( error );
            } finally {
                this.loading = false;
            }
        }
    }

    addLanguage () {
        this.showAddLanguage = true;
        this.modalKey = uuid.v1();
    }

    async deleteLanguage ( language: Language ) {
        try {
            this.loading = true;
            // TODO Uncomment code when the mutation returns the data correctly
            // const { updateApplication } =
            await this.$apiClient.mutation.updateApplication( {
                where: { id: this.application.id },
                data: {
                    languages: {
                        disconnect: [{ id: language.id }]
                    }
                }
            } );
            const indexToRemove = this.addedLanguages.findIndex( ( lang: Language ) => language.id === lang.id );
            this.addedLanguages.splice( indexToRemove, 1 );
            const updateApplication = { ...this.application, languages: [...this.addedLanguages] };
            this.addedLanguages = [...updateApplication.languages];
            this.$store.commit( 'sessionStorage/setApplication', updateApplication );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }

    validateIfLanguagesChanged ( languages: Language[] ) {
        if ( !languages ) {
            return true;
        } else if ( this.addedLanguages.length !== languages.length ) {
            return true;
        } else {
            return !( this.addedLanguages.every( ( language: Language ) =>
                languages.some( ( lang: Language ) => lang.id === language.id ) ) &&
                languages.every( ( language: Language ) =>
                    this.addedLanguages.some( ( lang: Language ) => lang.id === language.id ) ) );
        }
    }
}
</script>

<style lang="scss" scoped>
.languages-page-container {
    padding: 30px;
    @include mobile {
        padding: 15px;
    }
}
</style>
