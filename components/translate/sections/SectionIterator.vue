<template>
    <v-progress-linear
        v-if="loading"
        :active="loading"
        indeterminate
        size="8"
    />
    <div v-else-if="section">
        <slot />
        <SectionItem
            v-show="searchState"
            :section="section"
            :is-root="isRoot"
            @selectSection="selectSection"
            @updateSection="updateSection"
            @deleteSection="deleteSection"
        >
            <GeneralButton
                v-if="!isRoot"
                icon-mode
                :icon="showSubsections ? 'mdi-menu-up' : 'mdi-menu-down'"
                :text="showSubsections ? 'Hide Subsections' : 'Show Subsections'"
                left-tooltip
                :disabled="!section.subsections || section.subsections.length === 0"
                @click="showSubsections = !showSubsections"
            />
        </SectionItem>
        <v-divider v-if="!isRoot" v-show="searchState" />
        <div v-if="showSubsections || isRoot" :class="{'section-subsections': !isRoot}">
            <SectionIterator
                v-for="subsection in section.subsections"
                :key="subsection.id"
                :section-id="subsection.id"
                :search="search"
                @selectSection="selectSection"
                @updateSection="updateSection"
                @deleteSection="deleteSection"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '@scalars/cli';
import SectionItem from '@/components/translate/sections/SectionItem.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';

@Component(
    {
        layout: 'application',
        name: 'SectionIterator',
        components: { SectionItem, GeneralButton }
    }
)
export default class SectionIterator extends Vue {
    @Prop( { required: true } ) sectionId: string;
    @Prop( { type: Boolean, default: false } ) isRoot: boolean;
    @Prop( { type: String, default: '' } ) search: string;
    section: Schema | null = null;
    loading: boolean = false;
    showSubsections: boolean = false;

    get searchState () {
        if ( this.section && this.section.sectionName && this.search ) {
            return `${this.section.sectionName}`.toLowerCase().includes( this.search.toLowerCase() );
        }
        return true;
    }

    beforeMount () {
        this.getSection();
    }

    async getSection () {
        this.section = this.$store.getters['sessionStorage/getSection']( this.sectionId );
        if ( !this.section || !this.section.sectionName ) {
            try {
                this.loading = true;
                this.section = await this.$apiClient.query.schema( { where: { id: this.sectionId } } );
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

    deleteSection ( section: Schema ) {
        if ( section.id === this.section?.id ) {
            this.section = null;
        }
        this.$emit( 'deleteSection', section );
    }
}
</script>

<style lang="scss" scoped>
.section-subsections {
    margin-left: 20px;
}
</style>
