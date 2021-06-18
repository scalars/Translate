import { HttpLink, InMemoryCache, NormalizedCacheObject, ApolloClient, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClients, ClientType, TokenFunction } from './interface';

class ApolloClientManager {
    apolloClients: ApolloClients = {
        [ClientType.IMPLICIT]: {
            client: null
        },
        [ClientType.CODE]: {
            client: null,
            credentials: 'include'
        }
    };

    defaultClientType: ClientType;

    cache: InMemoryCache;
    uri: string;

    // TODO: Make getToken a string not a function?
    constructor ( uri: string, getToken: TokenFunction, defaultClientType: ClientType = ClientType.IMPLICIT ) {
        if ( !uri ) {
            throw new Error( 'URI is empty' );
        }
        this.defaultClientType = defaultClientType;
        this.uri = uri;
        this.cache = new InMemoryCache( { addTypename: false } );
        this.apolloClients[ClientType.IMPLICIT].getToken = getToken;
    }

    getClient ( name: ClientType = this.defaultClientType, ssrMode: boolean = false ): ApolloClient<NormalizedCacheObject> {
        const apolloClient = this.apolloClients[name];
        if ( apolloClient && !apolloClient.client ) {
            const { credentials, getToken } = apolloClient;
            let authLink: ApolloLink | undefined;
            if ( getToken ) {
                authLink = setContext( async ( _, { headers } ) => {
                    return {
                        headers: {
                            ...headers,
                            Authorization: await getToken()
                        }
                    };
                } );
            }
            const httpLink = new HttpLink( {
                uri: this.uri,
                credentials: credentials || 'omit',
                fetchOptions: {
                    credentials: credentials || 'omit'
                }
            } );
            apolloClient.client = new ApolloClient( {
                link: authLink ? authLink.concat( httpLink ) : httpLink,
                cache: this.cache,
                ssrMode
            } );
        }
        return apolloClient.client as ApolloClient<NormalizedCacheObject>;
    }
}

export { ApolloClientManager };
