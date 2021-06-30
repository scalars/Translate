<template>
    <div v-if="application">
        <v-container fluid>
            <v-row>
                <v-col>
                    <div>
                        <v-subheader>Sections</v-subheader>
                        <SectionIterator
                            v-for="subsection in rootSubsections"
                            :key="subsection.id"
                            :section-id="subsection.id"
                            @selectSection="setSectionToTranslate"
                            @updateSection="updateSection"
                        />
                    </div>
                </v-col>
                <v-divider vertical />
                <v-col>
                    <div>
                        <v-subheader>Translations</v-subheader>
                        <Translator
                            :section="currentSection"
                            :languages="application.languages"
                            @updateSection="updateSection"
                        />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Language, Schema } from '@/client/types';
import SectionIterator from '@/components/translate/sections/SectionIterator.vue';
import Translator from '@/components/translate/translations/Translator.vue';

@Component(
    {
        layout: 'application',
        components: { SectionIterator, Translator }
    }
)
export default class Translate extends Vue {
    currentSection: Schema | null = null;
    languages: Language[] = [];

    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    get rootSubsections (): Schema[] {
        return this.application?.root?.subsections || [];
    }

    beforeMount () {
        this.$store.commit( 'sessionStorage/setSections', this.rootSubsections );
    }

    setSectionToTranslate ( section: Schema ) {
        this.currentSection = section;
    }

    updateSection ( section: Schema ) {
        if ( section.id === this.currentSection?.id ) {
            this.currentSection = section;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
