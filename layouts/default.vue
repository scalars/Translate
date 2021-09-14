<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            :permanent="!$vuetify.breakpoint.smAndDown"
            app
        >
            <div class="logo">
                <v-icon x-large class="mr-5">
                    mdi-code-braces-box
                </v-icon>
                <h1>Translate</h1>
            </div>
            <v-list>
                <v-list-item
                    v-for="page in pages"
                    :key="page.title"
                    :to="page.to"
                    link
                    router
                    exact
                >
                    <v-list-item-icon>
                        <v-icon>{{ page.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="page.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template #append>
                <div class="logout-button">
                    <GeneralButton :text="'Logout'" width="100%" @click="logout" />
                </div>
                <!--    TODO Evaluate if this alternative looks better            -->
                <!--                <v-list-item-->
                <!--                    :to="logoutUrl"-->
                <!--                    router-->
                <!--                    exact-->
                <!--                >-->
                <!--                    <v-list-item-action>-->
                <!--                        <v-icon>{{ 'mdi-logout' }}</v-icon>-->
                <!--                    </v-list-item-action>-->
                <!--                    <v-list-item-content>-->
                <!--                        <v-list-item-title v-text="'LogOut'" />-->
                <!--                    </v-list-item-content>-->
                <!--                </v-list-item>-->
            </template>
        </v-navigation-drawer>
        <v-app-bar v-if="$vuetify.breakpoint.smAndDown" fixed app>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer" />
        </v-app-bar>
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import GeneralButton from '@/components/general/GeneralButton.vue';

@Component( {
    components: { GeneralButton }
} )
export default class Layout extends Vue {
    url: string = `${process.env.APPLICATION_API}/api/auth/user`;
    logoutUrl: string = '';
    drawer: boolean = false;

    pages: Array<object> = [
        {
            icon: 'mdi-apps',
            title: 'Projects',
            to: '/'
        },
        {
            icon: 'mdi-chart-bubble',
            title: 'Preferences',
            to: '/preferences'
        }
    ];

    async beforeMount () {
        try {
            this.logoutUrl = `${process.env.SCALARS_ENPOINT}/logout?redirect_uri=${window.location.href}`;
            const user = await this.getUser();
            if ( user ) {
                const userProfile = await this.getUserProfile( user.id );
                this.$store.commit( 'sessionStorage/setUser', userProfile );
            } else {
                await this.$router.push( { name: 'login' } );
            }
        } catch ( err ) {
            await this.$router.push( { name: 'login' } );
        }
    }

    getUser () {
        const userUrl = `${process.env.SCALARS_ENPOINT}/api/auth/user`;
        return fetch( userUrl, {
            credentials: 'include'
        } ).then( resp => resp.json() ).catch( ( ) => { return undefined; } );
    }

    async getUserProfile ( userId: string ) {
        const profiles = await this.$apiClient.query.profiles( { where: { user: { id: userId } } } );
        return profiles?.[0];
    }

    logout () {
        window.location.href = this.logoutUrl;
    }
}
</script>
<style lang="scss" scoped>
.logo{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
}
.logout-button {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    padding: 0 15px;
}
.logout-button {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    padding: 0 15px;
}
</style>
