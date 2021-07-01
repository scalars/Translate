<template>
    <div v-if="application">
        <v-container fluid>
            <v-row>
                <v-col>
                    <div class="translate-page-container">
                        <v-subheader>Sections</v-subheader>
                        <SectionIterator
                            :section-id="application.root.id"
                            is-root
                            @selectSection="setSectionToTranslate"
                            @updateSection="updateSection"
                        />
                    </div>
                </v-col>
                <v-divider vertical />
                <v-col>
                    <div class="translate-page-container">
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
.translate-page-container {
    height: calc(100vh - 150px);
    overflow: auto;
    padding-bottom: 15px;
    @include mobile {
        height: 40vh;
    }
}
</style>
