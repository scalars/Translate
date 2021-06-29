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
                        />
                    </div>
                </v-col>
                <v-divider vertical />
                <v-col>
                    <v-subheader>Translations</v-subheader>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Schema } from '@/client/types';
import SectionIterator from '@/components/translate/sections/SectionIterator.vue';

@Component(
    {
        layout: 'application',
        components: { SectionIterator }
    }
)
export default class Translate extends Vue {
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
        console.log( 'selecting outside' );
        console.log( section );
    }
}
</script>

<style lang="scss" scoped>
</style>
