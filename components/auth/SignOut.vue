<template>
    <div>
        <v-btn variant="outline-primary" @click="signOut">
            Sign Out
        </v-btn>
    </div>
</template>

<script>
const PATH_LOGIN = '/login';

export default {
    name: 'SignOut',
    props: ['signOutConfig'],
    data () {
        return {
            error: ''
        };
    },
    computed: {
        options () {
            const defaults = {
                msg: null
            };
            return Object.assign( defaults, this.signOutConfig || {} );
        }
    },
    methods: {
        signOut ( event ) {
            this.$Amplify.signOut()
                .then( () => {
                    this.$AuthEvent.$emit( 'authState', 'signedOut' );
                    this.$router.push( { path: PATH_LOGIN } );
                } )
                .catch( e => this.setError( e ) );
        },
        setError ( e ) {
            this.error = e.message || e;
            this.makeToast();
        },
        makeToast () {
            // this.$bvToast.toast( this.error, {
            //     title: 'Error',
            //     toaster: 'b-toaster-top-center',
            //     variant: 'danger',
            //     solid: true,
            //     appendToast: true
            // } );
        }
    }
};
</script>
