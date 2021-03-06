<template>
    <div class="section-form-container">
        <v-form v-model="isValid" class="section-form">
            <v-text-field
                v-model="sectionData.sectionName"
                dense
                filled
                label="Name"
                :rules="[rules.required, rules.validSectionName]"
            />
            <v-textarea
                v-model="sectionData.description"
                dense
                filled
                rows="2"
                row-height="15"
                no-resize
                label="Description"
            />
            <v-divider />
            <SectionValuesInput
                v-model="sectionData.sectionValues"
                :rules="rules"
            />
        </v-form>
        <GeneralButton
            :loading="loading"
            :disabled="!isValid"
            text="Save"
            @click="saveSection"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema, SchemaUpdateInput } from '@scalars/cli';
import GeneralButton from '@/components/general/GeneralButton.vue';
import SectionValuesInput from '@/components/translate/sections/SectionValuesInput.vue';
import { schemaSelect } from '~/utils/scalarsSelect';

interface SchemaData {
    sectionName: string,
    description: string,
    sectionValues: any[]
}

@Component( { components: { GeneralButton, SectionValuesInput } } )
export default class SectionForm extends Vue {
    @Prop( { required: true } ) section: Schema;
    @Prop( { type: Boolean, default: false } ) editSection: boolean;
    isValid: boolean = true;
    loading: boolean = false;
    sectionData: SchemaData = {
        sectionName: '',
        description: '',
        sectionValues: []
    }

    rules: any = {
        required: ( value: any ) => {
            if ( !value ) {
                return 'Required';
            } else {
                return true;
            }
        },
        validSectionName: ( value: any ) => {
            if ( value ) {
                if ( !value.match( /^[a-zA-Z0-9_]+$/gm ) ) {
                    return 'invalid name';
                }
            }
            return true;
        },
        maxsize: ( value: any ) => {
            if ( value ) {
                if ( value.length > 20 ) {
                    return 'Max 20 characters';
                }
            }
            return true;
        }
    }

    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    beforeMount () {
        this.setDefaultValues();
    }

    setDefaultValues () {
        if ( this.editSection ) {
            const sectionKeys = Object.keys( this.sectionData );
            sectionKeys.forEach( ( key: string ) => {
                // @ts-ignore
                if ( this.section[key] ) { this.sectionData[key] = JSON.parse( JSON.stringify( this.section[key] ) ); }
            } );
        }
    }

    async saveSection () {
        try {
            this.loading = true;
            let data: SchemaUpdateInput;
            if ( this.editSection ) {
                data = {
                    sectionName: this.sectionData.sectionName,
                    description: this.sectionData.description,
                    sectionValues: this.sectionData.sectionValues,
                    // TODO Remove when all applications schemas have been updated
                    application: { connect: { id: this.application.id } }
                };
            } else {
                data = {
                    subsections: {
                        create: [
                            {
                                sectionName: this.sectionData.sectionName,
                                description: this.sectionData.description,
                                sectionValues: this.sectionData.sectionValues,
                                application: { connect: { id: this.application.id } }
                            }
                        ]
                    }
                };
            }
            const updateSchema = await this.$apiClient.mutation.updateSchema( {
                select: schemaSelect,
                where: { id: this.section.id },
                data
            } );
            this.$emit( 'updateSections', updateSchema );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.section-form-container {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    padding: 15px;
    .section-form {
        width: 100%;
        margin-bottom: 15px;
    }
    @include mobile {
        padding: 5px 0;
    }
}
</style>
