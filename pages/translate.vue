<template>
    <Loading v-if="loading" />
    <div v-else-if="application" class="translate-page-container">
        <div class="translate-page-column">
            <v-subheader>Sections</v-subheader>
            <SectionIterator
                :section-id="application.root.id"
                is-root
                @selectSection="setSectionToTranslate"
                @updateSection="updateSection"
            />
        </div>
        <div class="translate-page-column">
            <v-subheader>Translations</v-subheader>
            <Translator
                :section="currentSection"
                :languages="application.languages"
                @updateSection="updateSection"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Language, Schema } from '@/client/types';
import SectionIterator from '@/components/translate/sections/SectionIterator.vue';
import Translator from '@/components/translate/translations/Translator.vue';
import Loading from '@/components/general/Loader.vue';

@Component(
    {
        layout: 'application',
        components: { SectionIterator, Translator, Loading }
    }
)
export default class Translate extends Vue {
    currentSection: Schema | null = null;
    languages: Language[] = [];
    loading: boolean = false;

    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    beforeMount () {
        this.getSections();
    }

    async getSections () {
        try {
            this.loading = true;
            const { schemata } = await this.$apiClient.queries.schemata( { id: this.application.id } );
            this.$store.commit( 'sessionStorage/setSections', schemata );
            console.log( this.$store.state.sessionStorage.sections );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
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
    display: grid;
    width: 100%;
    grid-template-columns: 70% 30%;
    @include mobile {
        grid-template-columns: 100%;
    }
    .translate-page-column {
        height: calc(100vh - 150px);
        overflow: auto;
        padding: 15px;
        display: flex;
        flex-flow: column;
        width: 100%;
        @include mobile {
            height: 40vh;
        }
    }
}

</style>
