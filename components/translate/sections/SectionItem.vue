<template>
    <div class="section-item-container">
        <h2 @click="selectSection()">
            {{ section.sectionName }}
        </h2>
        <div class="section-item-actions">
            <GeneralButton
                icon-mode
                icon="mdi-book-open-page-variant"
                @click="selectSection()"
            />
            <GeneralButton
                icon-mode
                icon="mdi-pencil"
                @click="editSection()"
            />
            <GeneralButton
                icon-mode
                icon="mdi-delete"
                @click="deleteSection()"
            />
        </div>
        <Modal v-model="show">
            <SectionForm
                :section="section"
            />
        </Modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '@/client/types';
import GeneralButton from '@/components/general/GeneralButton.vue';
import SectionForm from '@/components/translate/sections/SectionForm.vue';
import Modal from '@/components/general/Modal.vue';

@Component(
    {
        layout: 'application',
        components: {
            GeneralButton,
            SectionForm,
            Modal
        }
    }
)
export default class SectionItem extends Vue {
    @Prop( { required: true } ) section: Schema;
    show:boolean = false;

    selectSection () {
        this.$emit( 'selectSection', this.section );
    }

    editSection () {
        console.log( 'editing' );
        console.log( this.section );
    }

    deleteSection () {
        console.log( 'deleting' );
        console.log( this.section );
    }
}
</script>

<style lang="scss" scoped>
.section-item-container {
    display: flex;
    justify-content: space-between;
    .section-item-actions {
        margin-left: 15px;
        display: flex;
    }
}
</style>
