<template>
    <div class="login-container">
        <v-card>
            <v-card-text>
                <authenticator
                    class="authenticator"
                    :amplify-config="amplifyConfig"
                    :url="url"
                    :client-id="clientId"
                >
                    <template #loader>
                        <v-progress-circular
                            :size="70"
                            :width="7"
                            color="#883ae0"
                            indeterminate
                            class="loader"
                        />
                    </template>
                </authenticator>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Authenticator from '@/components/auth/Authenticator.vue';

@Component( {
    layout: 'blank',
    components: {
        Authenticator
    }
} )
export default class Login extends Vue {
    url: string = `${process.env.SCALARS_API}`;
    clientId: string|undefined = process.env.SCALARS_CLIENT_ID;
    amplifyConfig: any = {
        region: process.env.USERPOOL_REGION,
        userPoolId: process.env.USERPOOL_ID,
        userPoolWebClientId: process.env.USERPOOL_WEB_CLIENT_ID
    };
}
</script>

<style scoped lang="scss">
    $primary: #883ae0 !important;

    .login-container {
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        @include mobile {
            .v-card {
                width: 95%;
                .authenticator::v-deep {
                    padding: 64px 8px;
                    .form {
                        width: 100%;
                    }
                }
            }
        }
    }
    .authenticator::v-deep {
        display: flex;
        align-items: center;
        padding: 50px 30px;
        .loader-container {
            background-color: rgba(255, 255, 255, 0.87);
            align-items: center;
            justify-content: center;
        }
        .input-group {
            display: flex;
            flex-flow: column;
            width: 300px;
            padding-bottom: 1rem;

            .input {
                border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                transition: all 100ms ease-in-out;
                padding-top: 0;

                &:focus {
                    outline: none;
                    border-bottom: 2px solid $primary;
                }
            }
        }

        .button {
            display: block;
            width: auto;
            margin: auto;
            color: #fff;
            text-transform: uppercase;
            background-color: $primary;
            padding: 10px 15px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 0.95em;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
</style>
