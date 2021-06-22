<template>
    <div class="authenticator">
        <div v-if="showLoader" class="loader-container">
            <slot name="loader" />
        </div>
        <sign-in
            v-if="displayMap.showSignIn"
            :sign-in-config="options.signInConfig"
            :url="url"
            :client-id="clientId"
            :providers="providers"
            @signedIn="signIn"
        />
        <RequireNewPassword
            v-if="displayMap.requireNewPassword"
            :require-new-password-config="options.requireNewPasswordConfig"
        />
        <ForgotPassword v-if="displayMap.showForgotPassword" />
        <ConfirmSignUp v-if="displayMap.showConfirmSignUp" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Hub } from '@aws-amplify/core';
import GetUser from './getUser';
import SignIn from './SignIn.vue';
import RequireNewPassword from './RequireNewPassword.vue';
import ForgotPassword from './ForgotPassword.vue';
import ConfirmSignUp from './ConfirmSignUp.vue';

interface DisplayMap {
    showSignIn?:boolean;
    showConfirmSignUp?:boolean;
    showConfirmSignIn?:boolean;
    showForgotPassword?:boolean;
    showSignOut?:boolean;
    requireNewPassword?:boolean;
}

@Component( {
    components: {
        SignIn,
        RequireNewPassword,
        ForgotPassword,
        ConfirmSignUp
    }
} )
export default class Authenticator extends Vue {
    @Prop( { required: true } ) amplifyConfig:any;
    @Prop() authConfig:any;
    @Prop( { required: true } ) url:string;
    @Prop( { required: true } ) clientId:string;
    @Prop( { required: false } ) redirect: string;
    @Prop( { default: () => [] } ) providers: String[];
    @Prop() providersConfig: any;

    displayMap:DisplayMap = {};
    user:any = {
        username: null
    };

    showLoader:boolean = false;

    get options () {
        const defaults = {
            signInConfig: {},
            signUpConfig: {},
            confirmSignUpConfig: {},
            confirmSignInConfig: {},
            forgotPasswordConfig: {},
            requireNewPasswordConfig: {}
        };
        return Object.assign( defaults, this.authConfig || {} );
    }

    async mounted () {
        Hub.listen( 'auth', async ( data: any ) => {
            try {
                if ( data.payload.event === 'parsingCallbackUrl' || data.payload.event === 'cognitoHostedUI' ) {
                    this.showLoader = true;
                } else if ( data.payload.event === 'signIn' ) {
                    this.showLoader = true;
                    const user = await this.$Amplify.currentAuthenticatedUser();
                    await this.signIn( user );
                } else {
                    this.showLoader = false;
                }
            } catch ( err ) {
                console.error( err );
            }
        } );
        if ( this.providersConfig ) {
            this.amplifyConfig.oauth = this.providersConfig;
        }
        this.$Amplify.configure( this.amplifyConfig );
        this.$AuthEvent.$on( 'localUser', ( user:any ) => {
            this.user = user;
            this.options.signInConfig.username = this.user.username;
            this.options.confirmSignInConfig.user = this.user;
            this.options.confirmSignUpConfig.username = this.user.username;
            this.options.requireNewPasswordConfig.user = this.user;
        } );
        this.$AuthEvent.$on( 'authState', ( data:string ) => {
            this.displayMap = this.updateDisplayMap( data );
            if ( data === 'signedIn' ) {
                this.$emit( 'signedIn' );
            }
        } );
        this.$AuthEvent.$on( 'loading', () => { this.showLoader = true; } );
        this.$AuthEvent.$on( 'loaded', () => { this.showLoader = false; } );
        try {
            await GetUser( this.$Amplify );
            this.displayMap = this.updateDisplayMap( 'signIn' );
        } catch ( err ) {
            this.displayMap = this.updateDisplayMap( 'signedOut' );
        }
    }

    updateDisplayMap ( state:string ):DisplayMap {
        return {
            showSignIn: state === 'signedOut' || state === 'signIn',
            showConfirmSignUp: state === 'confirmSignUp',
            showConfirmSignIn: state === 'confirmSignIn',
            showForgotPassword: state === 'forgotPassword',
            showSignOut: state === 'signedIn',
            requireNewPassword: state === 'requireNewPassword'
        };
    }

    async signIn ( user: any ) {
        if ( user ) {
            try {
                const headers = new Headers();
                headers.append( 'Authorization', `client_id ${this.clientId}` );
                headers.append( 'Content-Type', 'application/json' );
                const response = await fetch( this.url + '/login', {
                    method: 'POST',
                    headers,
                    body: JSON.stringify( {
                        id_token: user.signInUserSession.idToken.jwtToken,
                        response_type: 'code',
                        redirect_uri: window.location.href
                    } )
                } ).then( resp => resp.json() );
                if ( response.code === 200 ) {
                    this.$AuthEvent.$emit( 'authState', 'signedIn' );
                    window.location.href = `${this.url}/token?code_grant=${response.code_grant}`;
                }
            } catch ( err ) {
                console.error( err );
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.authenticator {
    position: relative;
    min-height: 200px;

    .loader-container {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
    }
}
</style>
