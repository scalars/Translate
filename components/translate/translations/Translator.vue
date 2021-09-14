<template>
    <div class="translator-container">
        <LanguagesSelect
            v-model="selectedLanguage"
            class="translator-language-select"
            :languages="languages"
            :disabled="loading"
            label="Select Language"
        />
        <div class="translation-labels-container">
            <div v-if="!section">
                {{ 'Select a Section to Translate' }}
            </div>
            <template v-else>
                <span>
                    <strong>
                        {{ `${section.sectionName}`.toUpperCase() }}
                    </strong>
                </span>
                <div v-if="!selectedLanguage">
                    {{ 'Select a Language to Translate' }}
                </div>
                <div v-else-if="!section.sectionValues || section.sectionValues.length === 0">
                    {{ 'This section doesnt have labels to translate' }}
                </div>
                <div v-else>
                    <div v-for="sectionValue in section.sectionValues" :key="sectionValue.id">
                        <span>
                            {{ sectionValue.key }}:
                        </span>
                        <v-text-field
                            v-model="translationData[sectionValue.key]"
                            filled
                            :hint="sectionValue.suggestion"
                        />
                    </div>
                </div>
            </template>
            <v-divider />
        </div>
        <GeneralButton
            text="Save"
            :loading="loading"
            :disabled="!valuesHaveChanged"
            @click="saveTranslations"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
import { Language, Schema, Translation } from '@scalars/cli';
import GeneralButton from '@/components/general/GeneralButton.vue';
import LanguagesSelect from '@/components/languages/LanguagesSelect.vue';

@Component(
    {
        layout: 'application',
        components: { GeneralButton, LanguagesSelect }
    }
)
export default class Translator extends Vue {
    @Prop( { required: true } ) section: Schema;
    @Prop( { required: true } ) languages: Language[];
    loading: boolean = false;
    selectedLanguage: Language | null = null;
    translationData: any = {};

    get translationDefaultValues () {
        if ( this.section && this.selectedLanguage ) {
            return this.section.translations?.find( ( translation: Translation ) =>
                translation?.language?.isolanguage === this.selectedLanguage?.isolanguage );
        }
        return null;
    }

    get valuesHaveChanged () {
        // TODO Fix Validation flow
        return true;
        // if ( !this.section || !this.selectedLanguage ) {
        //     return false;
        // } else if ( this.translationDefaultValues?.translationValues ) {
        //     return this.section.sectionValues.some( ( sectionValue: any ) =>
        //         !( this.translationData[sectionValue.key] === this.translationDefaultValues?.translationValues[sectionValue.key] )
        //     );
        // } else {
        //     return this.section.sectionValues.some( ( sectionValue: any ) =>
        //         !!this.translationData[sectionValue.key]
        //     );
        // }
    }

    @Watch( 'selectedLanguage' )
    onLanguageChanged () {
        this.setTranslationData();
    }

    @Watch( 'section' )
    onSectionChanged () {
        this.setTranslationData();
    }

    mounted () {
        if ( this.languages ) {
            this.selectedLanguage = this.languages[0];
        }
    }

    async saveTranslations () {
        if ( this.valuesHaveChanged ) {
            try {
                this.loading = true;
                let updatedSection;
                if ( this.translationDefaultValues ) {
                    // TODO Evaluate if is possible to do this inside a UpdateSchema mutation
                    const updateTranslation = await this.$apiClient.mutation.updateTranslation( {
                        where: { id: this.translationDefaultValues.id },
                        data: { translationValues: this.translationData }
                    } );
                    const translations = this.section.translations?.filter( ( translation: Translation ) => translation.id !== updateTranslation.id ) || [];
                    translations.push( updateTranslation as Translation );
                    updatedSection = { ...this.section, translations };
                    // TODO When updating and changing to other item and then returning, the data gets reversed only in front. Refreshing page solves it
                } else {
                    // TODO Validate if updating a translate api the language gets connected
                    const updateSchema = await this.$apiClient.mutation.updateSchema( {
                        where: { id: this.section.id },
                        data: {
                            translations: {
                                create: [
                                    {
                                        language: { connect: { id: this.selectedLanguage?.id } },
                                        istranslated: false,
                                        translationValues: this.translationData
                                    }
                                ]
                            }
                        }
                    } );
                    updatedSection = updateSchema;
                }
                this.$emit( 'updateSection', updatedSection );
            } catch ( error ) {
                console.error( error );
            } finally {
                this.loading = false;
            }
        }
    }

    setTranslationData () {
        this.section?.sectionValues.forEach( ( sectionValue:any ) => {
            this.translationData[sectionValue.key] = this.translationDefaultValues?.translationValues?.[sectionValue.key];
        } );
    }
}
</script>

<style lang="scss" scoped>
.translator-container {
    padding: 0 10px;
    display: flex;
    width: 100%;
    flex-flow: column;
    align-items: flex-end;
    .translator-language-select {
        width: 100%;
    }
    .translation-labels-container {
        width: 100%;
        margin-bottom: 30px;
    }
}

</style>
