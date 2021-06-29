<template>
    <div class="section-item-container">
        <h2 @click="selectSection">
            {{ section.sectionName }}
        </h2>
        <div class="section-item-actions">
            <GeneralButton
                icon-mode
                icon="mdi-book-open-page-variant"
                @click="createSection"
            />
            <GeneralButton
                icon-mode
                icon="mdi-pencil"
                @click="editSection"
            />
            <GeneralButton
                icon-mode
                icon="mdi-delete"
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
                confirm-text="Are you sure to delete this section?"
                :item-name="section.sectionName"
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

enum ActionType {
    Create = 'CREATE',
    Update = 'UPDATE',
    Delete = 'DELETE'
}

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

    updateSectionsHandler () {
        console.log( 'handle sections update' );
    }

    async deleteSectionHandler () {
        try {
            this.loading = true;
            await console.log( 'handle sections delete' );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
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
    display: flex;
    justify-content: space-between;
    .section-item-actions {
        margin-left: 15px;
        display: flex;
    }
}
</style>
