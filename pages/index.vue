<template>
    <div class="applications-page-container">
        <GeneralButton
            text="Create Application"
            icon="mdi-plus"
            desktop-width="220px"
            @click="createApplication"
        />
        <ApplicationsList
            :applications="applications"
            :loading="loading"
            @selectApplication="goToApplication"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ApplicationsList from '@/components/ApplicationsList.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
import { Application } from '@/client/types';

@Component( {
    components: { ApplicationsList, GeneralButton },
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
    loading: boolean = false;

    beforeMount () {
        this.getApplications();
    }

    async getApplications () {
        try {
            this.loading = true;
            const { applications } = await this.$apiClient.queries.applications( {} );
            this.applications = applications;
        } catch ( error ) {
            console.error( error );
        } finally {
            this.loading = false;
        }
    }

    createApplication () {
        console.log( 'creating app' );
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
    align-items: flex-end;
}
</style>
