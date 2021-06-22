<template lang="html">
    <form class="form" @submit.prevent>
        <div class="input-group">
            <label class="label">Nueva contraseña</label>
            <input v-model="password" type="password" class="input" required>
        </div>
        <div
            v-for="attribute in options.user.challengeParam.requiredAttributes"
            :key="attribute"
            class="input-group"
            :attribute="attribute"
        >
            <div>
                {{ attribute.charAt(0).toUpperCase() + attribute.slice(1) }}
            </div>
            <input
                v-model="requiredAttributes[attribute]"
                :placeholder="attribute.charAt(0).toUpperCase() + attribute.slice(1)"
            >
        </div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <button class="button" :disabled="!password" variant="primary" @click="change">
            Confirmar
        </button>
        <a class="back" @click="signIn">
            Ir al inicio de sesion
        </a>
    </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component( { } )
export default class RequireNewPassword extends Vue {
    @Prop() requireNewPasswordConfig:any;

    user:string = '';
    passwordRegexp:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    password:string = '';
    error:string = '';
    requiredAttributes:any = {};

    get options () {
        const defaults = {
            user: {
                challengeParam: {
                    requiredAttributes: []
                }
            }
        };
        return Object.assign( defaults, this.requireNewPasswordConfig || {} );
    }

    checkContact ( user:any ) {
        this.$Amplify.verifiedContact( user )
            .then( () => {
                this.$AuthEvent.$emit( 'localUser', this.user );
                this.$AuthEvent.$emit( 'authState', 'signIn' );
                this.$AuthEvent.$emit( 'loaded' );
            } )
            .catch( ( e:any ) => {
                this.setError( e );
                this.$AuthEvent.$emit( 'loaded' );
            } );
    }

    change () {
        this.error = '';
        if ( !this.password.match( this.passwordRegexp ) ) {
            this.error = 'La contraseña debe tener una mayúscula, una minúscula, un número y al menos ocho caracteres de longitud';
            return;
        }
        this.$AuthEvent.$emit( 'loading' );
        this.$Amplify.completeNewPassword( this.options.user, this.password, this.requiredAttributes )
            .then( () => {
                if ( this.options.user.challengeName === 'SMS_MFA' ) {
                    this.$AuthEvent.$emit( 'localUser', this.options.user );
                    this.$AuthEvent.$emit( 'authState', 'signIn' );
                    this.$AuthEvent.$emit( 'loaded' );
                } else {
                    this.checkContact( this.options.user );
                }
            } )
            .catch( ( err:any ) => {
                this.setError( err );
                this.$AuthEvent.$emit( 'loaded' );
            } );
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
    font-size: 0.8em;
    text-align: right;
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
