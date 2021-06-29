<template>
    <div v-if="application">
        <v-container fluid>
            <v-row>
                <v-col>
                    <div>
                        <v-subheader>Sections</v-subheader>
                        <SchemaIterator
                            v-for="subsection in rootSubsections"
                            :key="subsection.id"
                            :schema-id="subsection.id"
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
import SchemaIterator from '@/components/translate/sections/SchemaIterator.vue';

@Component(
    {
        layout: 'application',
        components: { SchemaIterator }
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
}
</script>

<style lang="scss" scoped>
</style>
