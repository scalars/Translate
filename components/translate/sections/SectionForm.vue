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
import { Schema } from '@/client/types';
import GeneralButton from '@/components/general/GeneralButton.vue';
import SectionValuesInput from '@/components/translate/sections/SectionValuesInput.vue';

@Component( { components: { GeneralButton, SectionValuesInput } } )
export default class SectionForm extends Vue {
    @Prop( { required: true } ) section: Schema;
    @Prop( { type: Boolean, default: false } ) editSection: boolean;
    isValid: boolean = true;
    loading: boolean = false;
    sectionData: Schema = {
        id: '',
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
            let data;
            if ( this.editSection ) {
                data = {
                    sectionName: this.sectionData.sectionName,
                    description: this.sectionData.description,
                    sectionValues: this.sectionData.sectionValues
                };
            } else {
                data = {
                    subsections: {
                        create: [
                            {
                                sectionName: this.sectionData.sectionName,
                                description: this.sectionData.description,
                                sectionValues: this.sectionData.sectionValues
                            }
                        ]
                    }
                };
            }
            const { updateSchema } = await this.$apiClient.queries.updateSchema( { where: { id: this.section.id }, data } );
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
