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
        >
            <template #general-options>
                <GeneralButton
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
import LanguagesTable from '@/components/languages/LanguagesTable.vue';
import LanguagesForm from '@/components/languages/LanguagesForm.vue';
import Modal from '@/components/general/Modal.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
import { Language } from '@/client/types';
import { uuid } from 'vue-uuid';

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

    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    beforeMount () {
        this.getLanguages();
    }

    async getLanguages () {
        try {
            this.loading = true;
            const { languages } = await this.$apiClient.queries.languages( {} );
            this.allLanguages = languages;
            this.addedLanguages = languages.filter( ( language: Language ) =>
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
                const languagesToAdd: Language[] = languages.filter( ( language: Language ) =>
                    !this.addedLanguages.some( ( lang: Language ) => lang.id === language.id ) );
                const languagesToRemove: Language[] = this.addedLanguages.filter( ( language: Language ) =>
                    !languages.some( ( lang: Language ) => lang.id === language.id ) );
                this.loading = true;
                // TODO Uncomment code when the mutation returns the data correctly
                // const { updateApplication } =
                await this.$apiClient.queries.updateApplication( {
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
            await this.$apiClient.queries.updateApplication( {
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
}
</style>
