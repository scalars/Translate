<template>
    <v-progress-linear
        v-if="loading"
        :active="loading"
        indeterminate
        size="8"
    />
    <div v-else-if="section">
        <SectionItem
            :section="section"
            @selectSection="selectSection"
        />
        <div class="section-subsections">
            <SectionIterator
                v-for="subsection in section.subsections"
                :key="subsection.id"
                :section-id="subsection.id"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '@/client/types';
import SectionItem from '@/components/translate/sections/SectionItem.vue';

@Component(
    {
        layout: 'application',
        name: 'SectionIterator',
        components: { SectionItem }
    }
)
export default class SectionIterator extends Vue {
    @Prop( { required: true } ) sectionId: string;
    section: Schema | null = null;
    loading: boolean = false;

    beforeMount () {
        this.getSection();
    }

    async getSection () {
        this.section = this.$store.getters['sessionStorage/getSection']( this.sectionId );
        if ( !this.section || !this.section.sectionName ) {
            try {
                this.loading = true;
                const { schema } = await this.$apiClient.queries.schema( { where: { id: this.sectionId } } );
                this.section = schema;
            } catch ( error ) {
                console.error( error );
            } finally {
                this.loading = false;
            }
        }
    }

    selectSection ( section: Schema ) {
        this.$emit( 'selectSection', section );
    }
}
</script>

<style lang="scss" scoped>
.section-subsections {
    margin-left: 15px;
}
</style>
