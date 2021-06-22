<template lang="html">
    <form @submit.prevent>
        <div class="input-group">
            <label class="label">Usuario o correo electrónico</label>
            <input v-model="username" type="text" class="input">
        </div>
        <div>
            <div v-if="sent" class="input-group">
                <label class="label">Usuario o correo electrónico</label>
                <input v-model="username" type="text" class="input">
            </div>
            <div v-if="sent" class="input-group">
                <label class="label">Código</label>
                <input v-model="code" type="text" class="input" required>
            </div>
            <div v-if="sent" class="input-group">
                <label class="label">Contraseña</label>
                <input v-model="password" type="password" class="input" required @keyup.enter="signIn">
            </div>
        </div>
        <div>
            <div class="error text">
                {{ error }}
            </div>
            <div v-if="!sent" class="text recovery" @click="signIn">
                Ir al inicio de sesion
            </div>
            <div v-if="sent" class="text recovery" @click="submit">
                Renviar codigo
            </div>
            <button v-if="!sent" class="button" :disabled="!username" @click="submit">
                Enviar codigo
            </button>
            <button v-if="sent" class="button" :disabled="!username" @click="verify">
                Submit
            </button>
        </div>
    </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component( { } )
export default class ForgotPassword extends Vue {
    @Prop() forgotPasswordConfig:any;

    username:string = '';
    code:string = '';
    password:string = '';
    error:string = '';
    sent:boolean = false;

    get options () {
        const defaults = {
            header: 'Reset your password'
        };
        return Object.assign( defaults, this.forgotPasswordConfig || {} );
    }

    submit () {
        this.$Amplify.forgotPassword( this.username )
            .then( () => {
                this.sent = true;
            } )
            .catch( ( e:any ) => {
                // TODO change code
                if ( e.code === 'InvalidParameterException' ) {
                    this.$Amplify.verifyCurrentUserAttribute( 'email' )
                        .then( ( data:any ) => {
                            // TODO implement verification
                            return null;
                        } )
                        .catch( ( err:any ) => {
                            console.error( err );
                        } );
                    this.$AuthEvent.$emit( 'localUser', { username: this.username } );
                    this.$AuthEvent.$emit( 'authState', 'confirmSignUp' );
                }
                this.setError( e );
            } );
    }

    verify () {
        this.$Amplify.forgotPasswordSubmit( this.username, this.code, this.password )
            .then( () => {
                this.$AuthEvent.$emit( 'authState', 'signIn' );
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

<style lang="scss" scoped>
.error {
    color: #f00;
    text-align: right;
}
.text {
    font-size: 0.8em;
    text-align: right;
    margin-bottom: 10px;
}
.recovery:hover {
    text-decoration: underline;
    cursor: pointer;
}
.input-group {
    display: flex;
    flex-flow: column;
    margin-bottom: 15px;

    .label, .input  {
        display: block;
        margin: 0;
        font-size: 0.9rem;
    }

    .input {
        border: none;
        padding: 5px 10px;
    }

    .button {
        display: block;
        width: 100%;
        margin: auto;
        color: #fff;
        background-color: $primary;
    }
}
</style>
