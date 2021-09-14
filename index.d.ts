import Auth from '@aws-amplify/auth';
import { ScalarsClient } from '@scalars/cli';
type AuthClass = typeof Auth;

declare module 'vue/types/vue' {
    interface Vue {
        $vuetify:any;
        $apiClient: ScalarsClient;
        $Amplify: AuthClass;
        $AuthEvent: Vue;
    }
}

declare const window: any;
