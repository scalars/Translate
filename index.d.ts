import { ApolloClient } from './client/apollo/ApolloClient';

declare module 'vue/types/vue' {
    interface Vue {
        $vuetify:any;
        $apiClient: ApolloClient;
    }
}

declare const window: any;
