<template>
    <div class="application-form-container">
        <v-form v-model="isValid" class="application-form">
            <v-text-field
                v-model="applicationData.name"
                dense
                filled
                label="Name"
                :rules="[rules.required]"
            />
            <LanguagesSelect
                v-model="applicationData.languages"
                :languages="languages"
                :disabled="loading"
                multiple
                label="Select Language"
            />
        </v-form>
        <GeneralButton
            :loading="loading"
            :disabled="!isValid"
            text="Save"
            @click="saveApplication"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Application, Language } from '@/client/types';
import GeneralButton from '@/components/general/GeneralButton.vue';
import LanguagesSelect from '@/components/languages/LanguagesSelect.vue';

@Component( { components: { GeneralButton, LanguagesSelect } } )
export default class ApplicationForm extends Vue {
    @Prop( { required: true } ) application: Application;
    @Prop( { required: true } ) languages: Language[];
    @Prop( { type: Boolean, default: false } ) editApplication: boolean;
    isValid: boolean = true;
    loading: boolean = false;
    applicationData: Application = {
        id: '',
        name: '',
        root: null,
        languages: []
    }

    rules: any = {
        required: ( value: any ) => {
            if ( !value ) {
                return 'Required';
            } else {
                return true;
            }
        }
    }

    get user () {
        return this.$store.getters['sessionStorage/getUser'];
    }

    beforeMount () {
        this.setDefaultValues();
    }

    setDefaultValues () {
        if ( this.editApplication ) {
            ['name', 'languages'].forEach( ( key: string ) => {
                // @ts-ignore
                if ( this.application[key] ) { this.applicationData[key] = JSON.parse( JSON.stringify( this.application[key] ) ); }
            } );
        }
    }

    async saveApplication () {
        try {
            this.loading = true;
            if ( this.editApplication ) {
                const oldLanguagesArray: Language[] = this.application.languages;
                const newLanguagesArray: Language[] = this.applicationData.languages;

                const languagesToAdd: Language[] = newLanguagesArray.filter( ( language: Language ) =>
                    !oldLanguagesArray.some( ( lang: Language ) => lang.id === language.id ) );
                const languagesToRemove: Language[] = oldLanguagesArray.filter( ( language: Language ) =>
                    !newLanguagesArray.some( ( lang: Language ) => lang.id === language.id ) );

                const { updateApplication } = await this.$apiClient.queries.updateApplication( {
                    where: { id: this.application.id },
                    data: {
                        name: this.applicationData.name,
                        languages: {
                            connect: languagesToAdd.map( ( language: Language ) => { return { id: language.id }; } ),
                            disconnect: languagesToRemove.map( ( language: Language ) => { return { id: language.id }; } )
                        }
                    }
                } );
                this.$emit( 'updateApplication', updateApplication );
            } else {
                const { createApplication } = await this.$apiClient.queries.createApplication( {
                    data: {
                        name: this.applicationData.name,
                        root: { create: { sectionName: 'default' } },
                        owner: { connect: { id: this.user?.id } },
                        languages: {
                            connect: this.applicationData.languages.map( ( language: Language ) => { return { id: language.id }; } )
                        }
                    }
                } );
                this.$emit( 'addApplication', createApplication );
            }
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.application-form-container {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    padding: 15px;
    .application-form {
        width: 100%;
        margin-bottom: 15px;
    }
    @include mobile {
        padding: 5px 0;
    }
}
</style>
