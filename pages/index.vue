<template>
    <ApplicationsList
        :applications="applications"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ApplicationsList from '@/components/ApplicationsList.vue';
import { Application } from '@/client/types';

@Component( {
    components: { ApplicationsList },
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

    beforeMount () {
        this.getApplications();
    }

    async getApplications () {
        const { applications } = await this.$apiClient.queries.applications( {} );
        this.applications = applications;
    }
}
</script>
