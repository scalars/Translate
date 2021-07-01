<template>
    <div class="section-item-container">
        <div class="section-item-title">
            <h3 v-if="!isRoot" class="item-title" @click="selectSection">
                {{ `${section.sectionName}`.toUpperCase() }}
            </h3>
            <GeneralButton
                icon-mode
                icon="mdi-plus"
                :text="isRoot ? 'Add Section' : 'Add Subsection'"
                right-tooltip
                @click="createSection"
            />
        </div>
        <div v-if="!isRoot" class="section-item-actions">
            <GeneralButton
                icon-mode
                icon="mdi-book-open-page-variant"
                text="Select Section to Translate"
                @click="selectSection"
            />
            <GeneralButton
                icon-mode
                icon="mdi-pencil"
                text="Edit Section"
                @click="editSection"
            />
            <GeneralButton
                icon-mode
                icon="mdi-delete"
                text="Delete Section"
                @click="deleteSection"
            />
        </div>
        <Modal
            :key="modalKey"
            v-model="showModal"
            :title="modalTitle"
            :color="formAction === actionType.Delete ? 'error' : ''"
        >
            <ConfirmDelete
                v-if="formAction === actionType.Delete"
                confirm-text="All subsections and translations under it will be lost. Are you sure to delete this section?"
                :item-name="section.sectionName"
                :loading="loading"
                @confirm="deleteSectionHandler"
            />
            <SectionForm
                v-else
                :section="section"
                :edit-section="formAction === actionType.Update"
                @updateSections="updateSectionsHandler"
            />
        </Modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '@/client/types';
import GeneralButton from '@/components/general/GeneralButton.vue';
import SectionForm from '@/components/translate/sections/SectionForm.vue';
import ConfirmDelete from '@/components/general/ConfirmDelete.vue';
import Modal from '@/components/general/Modal.vue';
import { uuid } from 'vue-uuid';
import { ActionType } from '@/utils/interfaces';

@Component(
    {
        layout: 'application',
        components: {
            GeneralButton,
            SectionForm,
            ConfirmDelete,
            Modal
        }
    }
)
export default class SectionItem extends Vue {
    @Prop( { required: true } ) section: Schema;
    @Prop( { type: Boolean, default: false } ) isRoot: boolean;
    showModal: boolean = false;
    modalKey: string = uuid.v1();
    actionType: unknown = ActionType;
    formAction: ActionType = ActionType.Create;
    loading: boolean = false;

    get modalTitle () {
        if ( this.formAction === ActionType.Create ) {
            return 'Create Section';
        } else if ( this.formAction === ActionType.Update ) {
            return 'Update Section';
        } else {
            return 'Delete Section';
        }
    }

    updateSectionsHandler ( section: Schema ) {
        // TODO Find a way to use the data returned in the mutation to avoid a new request for a new section when created
        if ( this.formAction === ActionType.Update ) {
            this.$store.commit( 'sessionStorage/updateSection', section );
        }
        this.$emit( 'updateSection', section );
        this.showModal = false;
    }

    async deleteSectionHandler () {
        try {
            this.loading = true;
            await this.$apiClient.queries.deleteSchema( { where: { id: this.section.id } } );
            this.$emit( 'deleteSection' );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
            this.showModal = false;
        }
    }

    selectSection () {
        this.$emit( 'selectSection', this.section );
    }

    createSection () {
        this.resetModal();
        this.formAction = ActionType.Create;
        this.showModal = true;
    }

    editSection () {
        this.resetModal();
        this.formAction = ActionType.Update;
        this.showModal = true;
    }

    deleteSection () {
        this.resetModal();
        this.formAction = ActionType.Delete;
        this.showModal = true;
    }

    resetModal () {
        this.modalKey = uuid.v1();
    }
}
</script>

<style lang="scss" scoped>
.section-item-container {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    .section-item-title {
        padding: 10px 0;
        display: flex;
        align-items: center;
        .item-title {
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .section-item-actions {
        margin-left: 15px;
        display: flex;
        gap: 5px;
        align-items: center;
    }
}
</style>
