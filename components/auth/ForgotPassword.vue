<template lang="html">
    <div class="d-flex justify-content-center">
        <v-card title="Restablecer Contraseña">
            <v-form>
                <div>
                    <div label="Usuario">
                        <v-text-field
                            v-model="username"
                            placeholder="Digite usuario"
                        />
                    </div>
                </div>
                <div>
                    <div v-if="sent" label="Codigo *">
                        <v-text-field
                            v-model="code"
                            required
                            placeholder="Digite codigo"
                        />
                    </div>

                    <div v-if="sent" label="Contraseña *">
                        <v-text-field
                            v-model="password"
                            type="password"
                            required
                            aria-describedby="password-help-block"
                            placeholder="Nueva contraseña"
                            @keyup.enter="signIn"
                        />
                    </div>
                </div>

                <div>
                    <v-btn v-if="!sent" variant="primary" :disabled="!username" @click="submit">
                        Enviar codigo
                    </v-btn>
                    <v-btn v-if="sent" variant="primary" :disabled="!username" @click="verify">
                        Submit
                    </v-btn>

                    <a v-if="!sent" @click="signIn">
                        Ir al inicio de sesion
                    </a>
                    <a v-if="sent" @click="submit">
                        Renviar codigo
                    </a>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ForgorPassword',
    props: ['forgotPasswordConfig'],
    data () {
        return {
            username: '',
            code: '',
            password: '',
            error: '',
            sent: false
        };
    },
    computed: {
        options () {
            const defaults = {
                header: 'Reset your password'
            };
            return Object.assign( defaults, this.forgotPasswordConfig || {} );
        }
    },
    methods: {
        submit () {
            this.$Amplify.forgotPassword( this.username )
                .then( () => {
                    this.sent = true;
                } )
                .catch( e => this.setError( e ) );
        },
        verify () {
            this.$Amplify.forgotPasswordSubmit( this.username, this.code, this.password )
                .then( () => {
                    this.$AuthEvent.$emit( 'authState', 'signIn' );
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
