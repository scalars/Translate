import { ApolloClientService } from '@/client/apollo/ApolloClientService';
import { ClientOptions, MutationClientOptions } from '@/client/apollo/interface';
import {
    authUser, createAuthuser
} from '@/client/queries/base';
import {
    AuthuserQuery,
    AuthuserQueryVariables,
    CreateAuthuserMutation,
    CreateAuthuserMutationVariables
} from '../types';

export class BaseService extends ApolloClientService {

    authuser ( variables?: AuthuserQueryVariables, clientOptions?: ClientOptions ): Promise<AuthuserQuery> {
        return this.doQuery<AuthuserQuery, AuthuserQueryVariables>( authUser, variables, clientOptions );
    }

    createAuthuser ( variables?: CreateAuthuserMutationVariables, clientOptions?: MutationClientOptions ): Promise<CreateAuthuserMutation> {
        return this.doMutation<CreateAuthuserMutation, CreateAuthuserMutationVariables>( createAuthuser, variables, clientOptions );
    }

}
