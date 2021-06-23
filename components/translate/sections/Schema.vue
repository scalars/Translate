<template>
    <v-progress-linear
        v-if="loading"
        :active="loading"
        indeterminate
        size="8"
    />
    <div v-else-if="schema">
        <SchemaItem :schema="schema" />
        <div class="schema-subsections">
            <div
                v-for="subsection in schema.subsections"
                :key="subsection.id"
            >
                <SchemaItem :schema="subsection" />
                <div class="schema-subsections">
                    <SchemaDisplay
                        v-for="childSection in subsection.subsections"
                        :key="childSection.id"
                        :schema-id="childSection.id"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '~/client/types';
import SchemaItem from '~/components/translate/sections/SchemaItem.vue';

@Component(
    {
        layout: 'application',
        name: 'SchemaDisplay',
        components: { SchemaItem }
    }
)
export default class SchemaDisplay extends Vue {
    @Prop( { required: true } ) schemaId: string;
    schema: Schema | null = null;
    loading: boolean = false;

    beforeMount () {
        this.getSchema();
    }

    async getSchema () {
        try {
            this.loading = true;
            const { schema } = await this.$apiClient.queries.schema( { where: { id: this.schemaId } } );
            this.schema = schema;
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.schema-subsections {
    margin-left: 15px;
}
</style>
