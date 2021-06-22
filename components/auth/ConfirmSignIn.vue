<template lang="html">
    <div class="d-flex justify-content-center">
        <v-card title="Confirmar inicio">
            <v-form>
                <div label="Codigo de confirmación">
                    <v-text-field v-model="code" required placeholder="Digite codigo" />
                </div>
                <a @click="signIn">
                    Ir al inicio de sesion
                </a>
                <v-btn :disabled="!code" variant="primary" @click="submit">
                    Confirmar
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ConfirmSignIn',
    props: ['confirmSignInConfig'],
    data () {
        return {
            code: '',
            error: ''
        };
    },
    computed: {
        options () {
            const defaults = {
                user: {}
            };
            return Object.assign( defaults, this.confirmSignInConfig || {} );
        }
    },
    mounted () {
        if ( Object.keys( this.options.user ).length === 0 ) {
            this.setError( 'Valid user not received.' );
        }
    },
    methods: {
        submit () {
            this.$Amplify.confirmSignIn( this.options.user, this.code, this.options.user.challengeName )
                .then( () => {
                    this.$AuthEvent.$emit( 'authState', 'signedIn' );
                } )
                .catch( e => this.setError( e ) );
        },
        signIn () {
            this.$AuthEvent.$emit( 'authState', 'signIn' );
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
