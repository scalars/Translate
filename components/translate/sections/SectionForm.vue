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
            <div>
                <div class="ml-3 align-content-center">
                    Labels:
                </div>
                <v-row
                    v-for="(item) of sectionData.sectionValues"
                    :key="item.id"
                >
                    <v-col class="key-input pb-0 pt-2">
                        <v-text-field
                            v-model="item.key"
                            dense
                            clearable
                            counter="20"
                            label="Label name"
                            :rules="[rules.required, rules.maxsize, rules.validSectionName]"
                            required
                        />
                    </v-col>
                    <v-col class="pb-0 pt-2">
                        <v-text-field
                            v-model="item.suggestion"
                            dense
                            clearable
                            label="suggestion"
                        />
                    </v-col>
                    <v-col class="pb-0 pt-2">
                        <v-btn
                            dark
                            small
                        >
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-form>
        <v-divider />
        <GeneralButton
            class="mt-5"
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

@Component( { components: { GeneralButton } } )
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

    saveSection () {
        try {
            this.loading = true;
            if ( this.editSection ) {
                console.log( 'editing section' );
                console.log( this.section );
            } else {
                console.log( 'creating section' );
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
