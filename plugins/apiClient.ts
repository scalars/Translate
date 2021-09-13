import Vue from 'vue';
import { ScalarsClient } from '@scalars/cli';

const ClientPlugin = {
    install ( Vue: any ) {
        Vue.prototype.$apiClient = new ScalarsClient( {
            endpoint: `${process.env.SCALARS_ENPOINT}/api/v1`,
            authorization: () => `client_id ${process.env.SCALARS_CLIENT_ID}`
        } );
    }
};

export default () => {
    Vue.use( ClientPlugin );
};
