<template lang="html">
    <div class="d-md-flex justify-content-center">
        <v-card title="Inicio de Sesion">
            <v-form>
                <div label="Usuario *">
                    <v-text-field
                        v-model="options.username"
                        required
                        placeholder="Digite usuario"
                        @keyup.enter="signIn"
                    />
                </div>
                <div label="Contraseña *">
                    <v-text-field
                        v-model="password"
                        type="password"
                        required
                        aria-describedby="password-help-block"
                        placeholder="Digite contraseña"
                        @keyup.enter="signIn"
                    />
                    <a @click="forgot">
                        ¿Olvido su contraseña?
                    </a>
                </div>
                <v-btn variant="primary" @click="signIn">
                    Confirmar
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    props: ['signInConfig'],
    data () {
        return {
            password: '',
            error: ''
        };
    },
    computed: {
        options () {
            const defaults = {
                username: '',
                isSignUpDisplayed: true
            };
            return Object.assign( defaults, this.signInConfig || {} );
        }
    },
    methods: {
        signIn ( event ) {
            this.$Amplify
                .signIn( this.options.username, this.password )
                .then( ( data ) => {
                    console.log( data );
                    // sign in success'
                    if (
                        data.challengeName === 'SMS_MFA' ||
            data.challengeName === 'SOFTWARE_TOKEN_MFA'
                    ) {
                        this.$AuthEvent.$emit( 'localUser', data );
                        return this.$AuthEvent.$emit( 'authState', 'confirmSignIn' );
                    } else if ( data.challengeName === 'NEW_PASSWORD_REQUIRED' ) {
                        this.$AuthEvent.$emit( 'localUser', data );
                        return this.$AuthEvent.$emit( 'authState', 'requireNewPassword' );
                    } else {
                        return this.$AuthEvent.$emit( 'authState', 'signedIn' );
                    }
                } )
                .catch( ( e ) => {
                    if ( e.code && e.code === 'UserNotConfirmedException' ) {
                        this.$AuthEvent.$emit( 'localUser', {
                            username: this.options.username
                        } );
                        this.$AuthEvent.$emit( 'authState', 'confirmSignUp' );
                    } else {
                        this.setError( e );
                    }
                } );
        },
        forgot () {
            this.$AuthEvent.$emit( 'authState', 'forgotPassword' );
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
