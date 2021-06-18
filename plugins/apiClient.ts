import Vue from 'vue';
import { ApolloClient } from '@/client/apollo/ApolloClient';
import { ApolloClientManager } from '@/client/apollo/ApolloClientManager';
import { ClientType } from '@/client/apollo/interface';

const ClientPlugin = {
    install ( Vue: any ) {
        const manager = new ApolloClientManager(
            `${process.env.SCALARS_API}/api`,
            () => `client_id ${process.env.SCALARS_CLIENT_ID}`,
            ClientType.CODE
        );
        Vue.prototype.$apiClient = new ApolloClient( manager );
    }
};

export default () => {
    Vue.use( ClientPlugin );
};
