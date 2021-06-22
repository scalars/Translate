<template lang="html">
    <div class="d-md-flex justify-content-center">
        <b-card title="Confirmar registro">
            <b-form>
                <b-form-group label="Usuario *">
                    <b-form-input v-model="options.username" required name="username" placeholder="Digite usuario" />
                </b-form-group>
                <b-form-group label="Confirmar Codigo *">
                    <b-form-input v-model="code" required name="code" placeholder="Digite codigo" />
                    <h6>
                        ¿Perdio su codigo?
                        <b-link @click="resend">
                            Reenviar codigo
                        </b-link>
                    </h6>
                </b-form-group>

                <b-button variant="primary" @click="confirm">
                    Confirmar
                </b-button>
                <h6>
                    ¿Tiene una cuenta?
                    <b-link @click="signIn">
                        Ir a inicio
                    </b-link>
                </h6>
            </b-form>
        </b-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component( { } )
export default class ConfirmSignUp extends Vue {
    @Prop() confirmSignUpConfig:any;

    code:string = '';
    error:string = '';

    get options () {
        const defaults = {
            username: ''
        };
        return Object.assign( defaults, this.confirmSignUpConfig || {} );
    }

    mounted () {
        if ( !this.options.username ) {
            return this.setError( 'Valid username not received.' );
        }
    }

    confirm () {
        this.$Amplify.confirmSignUp( this.options.username, this.code )
            .then( () => {
                this.$AuthEvent.$emit( 'authState', 'signIn' );
            } )
            .catch( ( e:any ) => this.setError( e ) );
    }

    resend () {
        this.$Amplify.resendSignUp( this.options.username )
            .then( () => {
                // resendSignUp success
            } )
            .catch( ( e:any ) => this.setError( e ) );
    }

    signIn () {
        this.$AuthEvent.$emit( 'authState', 'signIn' );
    }

    setError ( e:any ) {
        this.error = e.message || e;
    }
}
</script>
