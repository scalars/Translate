<template lang="html">
    <div class="d-flex justify-content-center">
        <v-card title="Restaurar Contraseña">
            <v-form>
                <div label="Contraseña *">
                    <v-text-field
                        v-model="password"
                        type="password"
                        required
                        aria-describedby="password-help-block"
                        placeholder="Nueva contraseña"
                        @keyup.enter="signIn"
                    />
                </div>

                <div
                    v-for="attribute in options.user.challengeParam.requiredAttributes"
                    :key="attribute"
                    :attribute="attribute"
                >
                    <div>{{ attribute.charAt(0).toUpperCase() + attribute.slice(1) }}</div>
                    <v-text-field
                        v-model="requiredAttributes[attribute]"
                        :placeholder="attribute.charAt(0).toUpperCase() + attribute.slice(1)"
                    />
                </div>

                <div>
                    <v-btn v-if="!sent" :disabled="!password" variant="primary" @click="change">
                        Confirmar
                    </v-btn>
                    <a v-if="!sent" @click="signIn">
                        Ir al inicio de sesion
                    </a>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'RequireNewPassword',
    props: ['requireNewPasswordConfig'],
    data () {
        return {
            user: '',
            password: '',
            error: '',
            requiredAttributes: {}
        };
    },
    computed: {
        options () {
            const defaults = {
                user: {
                    challengeParam: {
                        requiredAttributes: []
                    }
                }
            };
            return Object.assign( defaults, this.requireNewPasswordConfig || {} );
        }
    },
    methods: {
        checkContact ( user ) {
            this.$Amplify.verifiedContact( user )
                .then( ( data ) => {
                    this.$AuthEvent.$emit( 'localUser', this.user );
                    this.$AuthEvent.$emit( 'authState', 'signedIn' );
                } )
                .catch( e => this.setError( e ) );
        },
        change () {
            this.$Amplify.completeNewPassword( this.options.user, this.password, this.requiredAttributes )
                .then( ( user ) => {
                    if ( this.options.user.challengeName === 'SMS_MFA' ) {
                        this.$AuthEvent.$emit( 'localUser', this.options.user );
                        this.$AuthEvent.$emit( 'authState', 'confirmSignIn' );
                    } else {
                        this.checkContact( this.options.user );
                    }
                } )
                .catch( err => this.setError( err ) );
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
