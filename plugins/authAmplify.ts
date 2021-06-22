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
    Vue.use( AmplifyPlugin, Auth );
    Vue.use( AmplifyAuthEvent );
};
