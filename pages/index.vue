<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <div class="text-center">
                <logo />
                <vuetify-logo />
            </div>
            <v-card>
                <v-card-title class="headline">
                    Welcome to the Vuetify + Nuxt.js template
                </v-card-title>
                <v-card-text>
                    <p>
                        Vuetify is a progressive Material Design component framework for
                        Vue.js. It was designed to empower developers to create amazing
                        applications.
                    </p>
                    <p>
                        For more information on Vuetify, check out the
                        <a
                            href="https://vuetifyjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            documentation </a>.
                    </p>
                    <p>
                        If you have questions, please join the official
                        <a
                            href="https://chat.vuetifyjs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="chat"
                        >
                            discord </a>.
                    </p>
                    <p>
                        Find a bug? Report it on the github
                        <a
                            href="https://github.com/vuetifyjs/vuetify/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="contribute"
                        >
                            issue board </a>.
                    </p>
                    <p>
                        Thank you for developing with Vuetify and I look forward to bringing
                        more exciting features in the future.
                    </p>
                    <div class="text-xs-right">
                        <em><small>&mdash; John Leider</small></em>
                    </div>
                    <hr class="my-3">
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nuxt Documentation
                    </a>
                    <br>
                    <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nuxt GitHub
                    </a>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" nuxt to="/inspire">
                        Continue
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ClientType } from '../client/apollo/interface';
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

@Component( {
    components: {
        Logo,
        VuetifyLogo
    },
    head: {
        title: 'Translate',
        meta: [
            { hid: 'description', name: 'description', content: 'Translate by Madrov' },
            { hid: 'og:title', property: 'og:title', content: 'Translate by Madrov' },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Made by Madrov S.A.S to translate serverless applications'
            },
            { hid: 'og:url', property: 'og:url', content: 'https://madrov.com' },
            { hid: 'og:image', property: 'og:image', content: require( '@/assets/img/meta.jpg' ) },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:title', name: 'twitter:title', content: ' Translate by Madrov' },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Made by Madrov S.A.S to translate serverless applications'
            },
            { hid: 'twitter:image', name: 'twitter:image', content: require( '@/assets/img/meta.jpg' ) }
        ]
    }
} )
export default class Index extends Vue {
    beforeMount () {
        this.getUser();
    }

    async getUser () {
        const { authuser } = await this.$apiClient.base.authuser( { where: { username: 'carlos' } }, { client: ClientType.IMPLICIT } );
        this.$store.commit( 'sessionStorage/user', authuser );
    }
};
</script>
