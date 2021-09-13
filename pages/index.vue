<template>
    <div class="applications-page-container">
        <div class="applications-page-header">
            <GeneralButton
                text="Create Application"
                icon="mdi-plus"
                desktop-width="220px"
                responsive
                @click="showCreateModal"
            />
        </div>
        <ApplicationsList
            class="applications-page-list"
            :applications="applications"
            :loading="loading"
            @selectApplication="goToApplication"
            @editApplication="showEditModal"
            @deleteApplication="showDeleteModal"
        />
        <Modal
            :key="modalKey"
            v-model="showModal"
            :title="modalTitle"
            :color="formAction === actionType.Delete ? 'error' : ''"
        >
            <ConfirmDelete
                v-if="formAction === actionType.Delete"
                confirm-text="All translations will be lost. Are you sure to delete this Application?"
                :item-name="selectedApplication.name"
                :loading="deletingApp"
                @confirm="deleteApplicationHandler"
            />
            <ApplicationForm
                v-else
                :application="selectedApplication"
                :languages="languages"
                :edit-application="formAction === actionType.Update"
                @updateApplication="updateApplication"
                @addApplication="addApplication"
            />
        </Modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ApplicationsList from '@/components/ApplicationsList.vue';
import ApplicationForm from '@/components/ApplicationForm.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
import Modal from '@/components/general/Modal.vue';
import ConfirmDelete from '@/components/general/ConfirmDelete.vue';
import { Application, Language } from '@/client/types';
import { uuid } from 'vue-uuid';
import { ActionType } from '@/utils/interfaces';

@Component( {
    components: { ApplicationsList, ApplicationForm, GeneralButton, Modal, ConfirmDelete },
    head: {
        title: 'Translate',
        meta: [
            { hid: 'description', name: 'description', content: 'Translate by Madrov' },
            { hid: 'og:title', property: 'og:title', content: 'Translate by Madrov' },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Made by Madrov S.A.S to translate serverless ApplicationsList.vue'
            },
            { hid: 'og:url', property: 'og:url', content: 'https://madrov.com' },
            { hid: 'og:image', property: 'og:image', content: require( '@/assets/img/meta.jpg' ) },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:title', name: 'twitter:title', content: ' Translate by Madrov' },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Made by Madrov S.A.S to translate serverless ApplicationsList.vue'
            },
            { hid: 'twitter:image', name: 'twitter:image', content: require( '@/assets/img/meta.jpg' ) }
        ]
    }
} )
export default class Index extends Vue {
    applications: Application[] = [];
    languages: Language[] = [];
    loading: boolean = false;
    deletingApp: boolean = false;
    selectedApplication: Application | null = null;
    showModal: boolean = false;
    modalKey: string = uuid.v1();
    actionType: unknown = ActionType;
    formAction: ActionType = ActionType.Create;

    get user () {
        return this.$store.getters['sessionStorage/getUser'];
    }

    get modalTitle () {
        if ( this.formAction === ActionType.Create ) {
            return 'Create Application';
        } else if ( this.formAction === ActionType.Update ) {
            return 'Update Application';
        } else {
            return 'Delete Application';
        }
    }

    beforeMount () {
        this.getApplications();
    }

    async getApplications () {
        try {
            this.loading = true;
            const { applications } = await this.$apiClient.queries.applications( { where: { owner: { id: this.user?.id } } } );
            const { languages } = await this.$apiClient.queries.languages( {} );
            this.applications = [...applications as Application[]];
            this.languages = [...languages as Language[]];
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }

    async deleteApplicationHandler () {
        try {
            this.deletingApp = true;
            await this.$apiClient.queries.deleteApplication( { where: { id: this.selectedApplication?.id } } );
            this.applications = this.applications.filter( ( application: Application ) =>
                application.id !== this.selectedApplication?.id );
        } catch ( error ) {
            console.error( error );
        } finally {
            this.deletingApp = false;
            this.showModal = false;
        }
    }

    addApplication ( application: Application ) {
        this.applications = [...this.applications, application];
        this.showModal = false;
    }

    updateApplication ( application: Application ) {
        const applicationIndex = this.applications.findIndex( ( app: Application ) => app.id === application.id );
        this.applications[applicationIndex] = application;
        this.applications = [...this.applications];
        this.showModal = false;
    }

    showCreateModal () {
        this.formAction = ActionType.Create;
        this.modalKey = uuid.v1();
        this.showModal = true;
    }

    showEditModal ( application: Application ) {
        this.formAction = ActionType.Update;
        this.selectedApplication = application;
        this.modalKey = uuid.v1();
        this.showModal = true;
    }

    showDeleteModal ( application: Application ) {
        this.formAction = ActionType.Delete;
        this.selectedApplication = application;
        this.modalKey = uuid.v1();
        this.showModal = true;
    }

    goToApplication ( application: Application ) {
        this.$store.commit( 'sessionStorage/setApplication', application );
        this.$router.push( { name: 'translate' } );
    }
}
</script>
<style lang="scss" scoped>
.applications-page-container {
    padding: 15px;
    display: flex;
    flex-flow: column;

    .applications-page-header {
        position: fixed;
        right: 30px;
        z-index: 1;
    }
     .applications-page-list {
         margin-top: 30px;
         @include mobile {
            margin-top: 45px;
         }
     }
}
</style>
