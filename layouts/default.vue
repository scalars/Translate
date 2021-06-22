<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            :permanent="!$vuetify.breakpoint.smAndDown"
            app
        >
            <div class="logo">
                <h1>Translate</h1>
            </div>
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template #append>
                <div class="pa-2 mb-5">
                    <v-btn block :href="logoutUrl">
                        Logout
                    </v-btn>
                </div>
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
import { ClientType } from '@/client/apollo/interface';

@Component( {
    components: {}
} )
class Layout extends Vue {
    url: string = `${process.env.APPLICATION_API}/api/auth/user`;
    logoutUrl: string = '';
    drawer: boolean = false;

    items: Array<object> = [
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
            this.logoutUrl = `${process.env.SCALARS_API}/logout?redirect_uri=${window.location.href}`;
            const user = await this.getUser();
            console.log( user );
            if ( user ) {
                this.$store.commit( 'sessionStorage/user', user );
            } else {
                await this.$router.push( { name: 'login' } );
            }
        } catch ( err ) {
            await this.$router.push( { name: 'login' } );
        }
    }

    getUser () {
        const userUrl = `${process.env.SCALARS_API}/api/auth/user`;
        return fetch( userUrl, {
            credentials: 'include'
        } ).then( resp => resp.json() ).catch( ( ) => { return undefined; } );
    }
}
export default Layout;
</script>
<style lang="scss" scoped>
.logo{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 15px;
}
</style>
