<template>
    <v-app>
        <!--        TODO Evaluate why this needs a client only tag to be displayed properly-->
        <client-only>
            <v-navigation-drawer
                v-model="drawer"
                :permanent="!$vuetify.breakpoint.smAndDown"
                app
                clipped
            >
                <v-list>
                    <v-list-item
                        v-for="page in pages"
                        :key="page.title"
                        link
                        router
                        exact
                        :to="page.to"
                    >
                        <v-list-item-icon>
                            <v-icon>
                                {{ page.icon }}
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ page.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar
                v-if="application"
                app
                clipped-left
            >
                <v-app-bar-nav-icon
                    v-if="$vuetify.breakpoint.smAndDown"
                    :disabled="!application.name"
                    @click.stop="drawer = !drawer"
                />
                <v-btn icon to="/">
                    <v-icon>
                        mdi-home
                    </v-icon>
                </v-btn>
                <v-toolbar-title>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                <div v-if="application.name">
                                    {{ `${application.name}`.toUpperCase() }}
                                </div>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-toolbar-title>
            </v-app-bar>
            <v-main>
                <v-container>
                    <nuxt />
                </v-container>
            </v-main>
        </client-only>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component( {} )

export default class ApplicationLayout extends Vue {
    drawer: boolean = false;
    pages: Array<object> =[
        {
            icon: 'mdi-translate',
            title: 'Translations',
            to: 'translate'
        },
        {
            icon: 'mdi-book-open-page-variant',
            title: 'Available Languages',
            to: 'languages'
        }
    ]

    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }

    beforeMount ( ) {
        if ( !this.application ) {
            this.$router.push( '/' );
        }
    }
}
</script>

<style scoped>

</style>
