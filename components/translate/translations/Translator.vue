<template>
    <div class="translator-container">
        <v-select
            v-model="selectedLanguage"
            class="translator-language-select"
            :items="languages"
            return-object
            :readonly="loading"
            :item-text="getLanguageLabel"
            filled
            label="Select Language"
        >
            <!--                TODO Evaluate if this alternative looks better -->
            <!--                <template #item="{item}">-->
            <!--                    <v-avatar size="22" class="mx-1">-->
            <!--                        <v-img-->
            <!--                            :src="item.flag"-->
            <!--                        />-->
            <!--                    </v-avatar>-->
            <!--                    <div class="ml-2 mr-2">-->
            <!--                        {{ getLanguageLabel( item ) }}-->
            <!--                    </div>-->
            <!--                </template>-->
        </v-select>
        <div class="translation-labels-container">
            <div v-if="!section">
                {{ 'Select a Section to Translate' }}
            </div>
            <div v-else-if="!selectedLanguage">
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
            <v-divider />
        </div>
        <GeneralButton
            text="Save"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
import { Language, Schema, Translation } from '@/client/types';
import GeneralButton from '@/components/general/GeneralButton.vue';

@Component(
    {
        layout: 'application',
        components: { GeneralButton }
    }
)
export default class Translator extends Vue {
    @Prop( { required: true } ) section: Schema;
    @Prop( { required: true } ) languages: Language[];
    loading: boolean = false;
    selectedLanguage: Language | null = null;
    translationData: any = {};

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

    getLanguageLabel ( language: Language ) {
        return `${language.isolanguage} | ${language.namelanguage} | ${language.nativename}`;
    }

    setTranslationData () {
        if ( this.section && this.selectedLanguage ) {
            const selectedTranslation = this.section.translations?.find( ( translation: Translation ) =>
                translation.language.isolanguage === this.selectedLanguage.isolanguage );
            if ( selectedTranslation?.translationValues ) {
                this.section.sectionValues.forEach( ( sectionValue:any ) => {
                    this.translationData[sectionValue.key] = selectedTranslation.translationValues[sectionValue.key];
                } );
                this.translationData.id = selectedTranslation.id;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.translator-container {
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
