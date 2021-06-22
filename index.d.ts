import Auth from '@aws-amplify/auth';
import { ApolloClient } from './client/apollo/ApolloClient';
type AuthClass = typeof Auth;

declare module 'vue/types/vue' {
    interface Vue {
        $vuetify:any;
        $apiClient: ApolloClient;
        $Amplify: AuthClass;
        $authEvent: Vue;
    }
}

declare const window: any;
