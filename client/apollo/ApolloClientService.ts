import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { DocumentNode } from 'graphql/language/ast';
import { ApolloClientManager } from './ApolloClientManager';
import { ClientType, ClientOptions, MutationClientOptions } from './interface';

class ApolloClientService {
    protected clientManager: ApolloClientManager;

    constructor ( clientManager: ApolloClientManager ) {
        this.clientManager = clientManager;
    }

    protected getClient (
        options?: ClientOptions,
        defaultClient?: ClientType
    ): ApolloClient<NormalizedCacheObject> {
        return this.clientManager.getClient( options?.client || defaultClient );
    }

    protected async doQuery<T, U> (
        query: DocumentNode,
        variables?: U,
        clientOptions?: ClientOptions
    ): Promise<T> {
        const client: ApolloClient<NormalizedCacheObject> = this.getClient( clientOptions );
        const response = await client.query(
            {
                fetchPolicy: 'network-only',
                query,
                variables,
                ...clientOptions?.apolloOptions
            }
        );
        return ApolloClientService.getResponse<T>( response as any );
    }

    protected async doMutation<T, U> (
        mutation: DocumentNode,
        variables?: U,
        clientOptions?: MutationClientOptions
    ): Promise<T> {
        const client: ApolloClient<NormalizedCacheObject> = this.getClient( clientOptions );
        const response = await client.mutate(
            {
                mutation,
                variables,
                ...clientOptions?.apolloOptions
            }
        );
        return ApolloClientService.getResponse<T>( response as any );
    }

    private static getResponse<T> ( { data, errors }: { data: T, errors: T } ): T {
        if ( data ) {
            return data;
        }
        throw errors;
    }
}

export { ApolloClientService };
