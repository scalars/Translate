import { ApolloClient, NormalizedCacheObject, FetchPolicy } from "@apollo/client";

enum ClientType {
    IMPLICIT = 'implicit',
    CODE = 'code'
}

type FetchFunction = ( uri: string, options: any ) => Promise<any>;
type TokenFunction = () => string;

type ApolloClients = {
    [key in ClientType]: {
        client: ApolloClient<NormalizedCacheObject>|null;
        fetch?: FetchFunction;
        credentials?: string;
        getToken?: TokenFunction;
    }
}

interface ApolloOptions {
    fetchPolicy?: FetchPolicy;
}

interface MutationApolloOptions {
    fetchPolicy?: Extract<FetchPolicy, 'no-cache'>;
}

interface ClientOptions {
    client?: ClientType;
    apolloOptions?: ApolloOptions;
}

interface MutationClientOptions {
    client?: ClientType;
    apolloOptions?: MutationApolloOptions;
}

export {
    ApolloClients,
    ApolloOptions,
    FetchFunction,
    TokenFunction,
    ClientOptions,
    MutationClientOptions,
    ClientType
};
