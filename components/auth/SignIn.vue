<template>
    <form class="form" @submit.prevent="signIn">
        <div class="providers">
            <button
                v-if="providers.includes('Facebook')"
                class="facebook"
                type="button"
                @click="$Amplify.federatedSignIn({ provider: 'Facebook' })"
            >
                <i class="fab fa-facebook-f" /> Iniciar con Facebook
            </button>
            <button
                v-if="providers.includes('Google')"
                class="google"
                type="button"
                @click="$Amplify.federatedSignIn({ provider: 'Google'})"
            >
                <i class="fab fa-google" /> Iniciar con Google
            </button>
        </div>
        <div class="input-group">
            <label class="label">Usuario o correo electrónico</label>
            <input v-model="options.username" type="text" class="input">
        </div>
        <div class="input-group">
            <label class="label">Contraseña</label>
            <input v-model="options.password" type="password" class="input">
        </div>
        <div v-if="error" class="error text">
            {{ error }}
        </div>
        <!--div class="text recovery" @click="forgotPassword">Recuperar contraseña</div-->
        <button type="submit" class="button">
            Iniciar Sesión
        </button>
    </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

interface SignInConfig {
    username:string;
    password:string;
    isSignUpDisplayed:boolean;
}

@Component( { } )
export default class SignIn extends Vue {
    @Prop() signInConfig:SignInConfig;
    @Prop() url:string;
    @Prop() clientId:string;
    @Prop() providers: String[];

    error:string = '';

    get options ():SignInConfig {
        const defaults:SignInConfig = {
            username: '',
            password: '',
            isSignUpDisplayed: true
        };
        return Object.assign( defaults, this.signInConfig || {} );
    }

    async signIn () {
        this.$AuthEvent.$emit( 'loading' );
        try {
            if ( !this.options.username || !this.options.password ) {
                this.setError( 'Username and password are required' );
                return this.$AuthEvent.$emit( 'loaded' );
            }
            const data = await this.$Amplify
                .signIn( this.options.username, this.options.password );
            if ( data.challengeName === 'SMS_MFA' || data.challengeName === 'SOFTWARE_TOKEN_MFA' ) {
                this.$AuthEvent.$emit( 'authState', 'confirmSignIn' );
            } else if ( data.challengeName === 'NEW_PASSWORD_REQUIRED' ) {
                this.$AuthEvent.$emit( 'localUser', data );
                this.$AuthEvent.$emit( 'loaded' );
                return this.$AuthEvent.$emit( 'authState', 'requireNewPassword' );
            }
            this.$AuthEvent.$emit( 'loaded' );
            this.$emit( 'signedIn', data );
        } catch ( err: any ) {
            if ( err.code && err.code === 'UserNotConfirmedException' ) {
                this.$AuthEvent.$emit( 'localUser', {
                    username: this.options.username
                } );
                this.$AuthEvent.$emit( 'authState', 'confirmSignUp' );
            } else {
                this.setError( err );
            }
            this.$AuthEvent.$emit( 'loaded' );
        }
    }

    forgotPassword () {
        this.$AuthEvent.$emit( 'authState', 'forgotPassword' );
    }

    setError ( err:any ) {
        if ( err.message ) {
            this.error = err.message;
        } else {
            this.error = err;
        }
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

.fab {
    font-size: 1.2em;
    margin-right: 10px;
}
</style>
