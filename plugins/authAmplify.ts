import Auth from '@aws-amplify/auth';
import Vue from 'vue';
// @ts-ignore
import AmplifyAuthEvent from './authEvent';

const AmplifyPlugin = {
    install ( Vue: { prototype: { $Amplify: any; }; }, Auth: any ) {
        Vue.prototype.$Amplify = Auth;
    }
};

export default () => {
    Auth.configure( {
        region: process.env.USERPOOL_REGION,
        userPoolId: process.env.USERPOOL_ID,
        userPoolWebClientId: process.env.USERPOOL_WEB_CLIENT_ID
    } );
    Vue.use( AmplifyPlugin, Auth );
    Vue.use( AmplifyAuthEvent );
};
