<template lang="html">
    <div class="d-md-flex justify-content-center">
        <v-card title="Confirmar registro">
            <v-form>
                <div label="Usuario *">
                    <v-text-field v-model="options.username" required name="username" placeholder="Digite usuario" />
                </div>
                <div label="Confirmar Codigo *">
                    <v-text-field v-model="code" required name="code" placeholder="Digite codigo" />
                    <h6>
                        ¿Perdio su codigo? <a @click="resend">
                            Reenviar codigo
                        </a>
                    </h6>
                </div>

                <v-btn variant="primary" @click="confirm">
                    Confirmar
                </v-btn>
                <h6>
                    ¿tiene una cuenta? <a @click="signIn">
                        Ir a inicio
                    </a>
                </h6>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ConfirmSignUp',
    props: ['confirmSignUpConfig'],
    data () {
        return {
            code: '',
            error: ''
        };
    },
    computed: {
        options () {
            const defaults = {
                username: ''
            };
            return Object.assign( defaults, this.confirmSignUpConfig || {} );
        }
    },
    mounted () {
        if ( !this.options.username ) {
            return this.setError( 'Valid username not received.' );
        }
    },
    methods: {
        confirm () {
            this.$Amplify.confirmSignUp( this.options.username, this.code )
                .then( () => {
                    this.$AuthEvent.$emit( 'authState', 'signIn' );
                } )
                .catch( e => this.setError( e ) );
        },
        resend () {
            this.$Amplify.resendSignUp( this.options.username )
                .then( () => {
                    // resendSignUp success
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
