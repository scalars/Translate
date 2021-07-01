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
            @updateSection="updateSection"
            @deleteSection="deleteSection"
        />
        <v-divider />
        <div class="section-subsections">
            <SectionIterator
                v-for="subsection in section.subsections"
                :key="subsection.id"
                :section-id="subsection.id"
                @selectSection="selectSection"
                @updateSection="updateSection"
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
        // TODO Find a way to reduce de amount of request that have to be done
        // this.section = this.$store.getters['sessionStorage/getSection']( this.sectionId );
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

    updateSection ( section: Schema ) {
        if ( section.id === this.section?.id ) {
            this.section = section;
        }
        this.$emit( 'updateSection', section );
    }

    deleteSection () {
        this.section = null;
    }
}
</script>

<style lang="scss" scoped>
.section-subsections {
    margin-left: 15px;
}
</style>
