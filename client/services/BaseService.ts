import { ApolloClientService } from '@/client/apollo/ApolloClientService';
import { ClientOptions, MutationClientOptions } from '@/client/apollo/interface';
import {
    applications,
    application,
    schema,
    languages
} from '@/client/queries/queries';
import {
    ApplicationsQuery,
    ApplicationQuery,
    ApplicationsQueryVariables,
    SchemaQuery,
    SchemaQueryVariables,
    LanguagesQuery,
    LanguagesQueryVariables
} from '../types';

export class BaseService extends ApolloClientService {
    applications ( variables?: ApplicationsQueryVariables, clientOptions?: ClientOptions ): Promise<ApplicationsQuery> {
        return this.doQuery<ApplicationsQuery, ApplicationsQueryVariables>( applications, variables, clientOptions );
    }

    application ( variables?: ApplicationsQueryVariables, clientOptions?: ClientOptions ): Promise<ApplicationQuery> {
        return this.doQuery<ApplicationQuery, ApplicationsQueryVariables>( application, variables, clientOptions );
    }

    schema ( variables?: SchemaQueryVariables, clientOptions?: ClientOptions ): Promise<SchemaQuery> {
        return this.doQuery<SchemaQuery, SchemaQueryVariables>( schema, variables, clientOptions );
    }

    languages ( variables?: LanguagesQueryVariables, clientOptions?: ClientOptions ): Promise<LanguagesQuery> {
        return this.doQuery<LanguagesQuery, LanguagesQueryVariables>( languages, variables, clientOptions );
    }
}
