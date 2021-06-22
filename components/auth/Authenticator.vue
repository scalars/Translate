<template>
    <div>
        <ConfirmSignIn v-if="displayMap.showConfirmSignIn" :confirm-sign-in-config="options.confirmSignInConfig" />
        <ConfirmSignUp v-if="displayMap.showConfirmSignUp" :confirm-sign-up-config="options.confirmSignUpConfig" />
        <ForgotPassword v-if="displayMap.showForgotPassword" :forgot-password-config="options.forgotPasswordConfig" />
        <RequireNewPassword
            v-if="displayMap.requireNewPassword"
            :require-new-password-config="options.requireNewPasswordConfig"
        />
        <SignIn v-if="displayMap.showSignIn" :sign-in-config="options.signInConfig" />
        <SignOut v-if="displayMap.showSignOut || true" />
    </div>
</template>

<script>
// Auth components
import GetUser from './getUser';
import ConfirmSignIn from './ConfirmSignIn.vue';
import ConfirmSignUp from './ConfirmSignUp.vue';
import ForgotPassword from './ForgotPassword.vue';
import RequireNewPassword from './RequireNewPassword.vue';
import SignIn from './SignIn.vue';
import SignOut from './SignOut.vue';
// Auth amplify
export default {
    name: 'Authenticator',
    components: {
        ConfirmSignIn,
        ConfirmSignUp,
        ForgotPassword,
        RequireNewPassword,
        SignIn,
        SignOut
    },
    props: ['authConfig', 'url', 'clientId'],
    data () {
        return {
            user: {
                username: null
            },
            displayMap: {},
            error: ''
        };
    },
    computed: {
        options () {
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
    },
    async mounted () {
        this.$AuthEvent.$on( 'localUser', ( user ) => {
            this.user = user;
            this.options.signInConfig.username = this.user.username;
            this.options.confirmSignInConfig.user = this.user;
            this.options.confirmSignUpConfig.username = this.user.username;
            this.options.requireNewPasswordConfig.user = this.user;
        } );
        this.$AuthEvent.$on( 'authState', ( data ) => {
            this.displayMap = this.updateDisplayMap( data );
            if ( data === 'signedIn' ) {
                this.$router.push( { path: '/' } );
            }
        } );
        await GetUser( this.$Amplify ).then( ( val ) => {
            if ( val instanceof Error ) {
                this.displayMap = this.updateDisplayMap( 'signedOut' );
                return this.displayMap;
            }
            this.user = val;
            this.displayMap = this.updateDisplayMap( 'signedIn' );
            return this.displayMap;
        } ).catch( e => this.setError( e ) );
    },
    methods: {
        updateDisplayMap: ( state ) => {
            return {
                showSignIn: state === 'signedOut' || state === 'signIn',
                showConfirmSignUp: state === 'confirmSignUp',
                showConfirmSignIn: state === 'confirmSignIn',
                showForgotPassword: state === 'forgotPassword',
                showSignOut: state === 'signedIn',
                showAdmin: state === 'signedIn',
                requireNewPassword: state === 'requireNewPassword'
            };
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
