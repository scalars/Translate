<template>
    <div v-if="application" class="language">
        <v-container fluid>
            <v-row>
                <v-col>
                    <div>
                        <v-subheader>Sections</v-subheader>
                        <SchemaDisplay
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
import SchemaDisplay from '@/components/translate/sections/Schema.vue';
import { Schema } from '@/client/types';

@Component(
    {
        layout: 'application',
        components: { SchemaDisplay }
    }
)
export default class Translate extends Vue {
    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    get rootSubsections () {
        return this.application?.root?.subsections || [];
    }
}
</script>

<style lang="scss" scoped>
</style>
