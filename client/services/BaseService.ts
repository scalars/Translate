import { ApolloClientService } from '@/client/apollo/ApolloClientService';
import { ClientOptions, MutationClientOptions } from '@/client/apollo/interface';
import {
    applications,
    application,
    createApplication,
    updateApplication,
    deleteApplication,
    schemata,
    schema,
    updateSchema,
    deleteSchema,
    languages,
    updateTranslation,
    profiles
} from '@/client/queries/queries';
import {
    ApplicationsQuery,
    ApplicationQuery,
    ApplicationsQueryVariables,
    CreateApplicationMutation,
    CreateApplicationMutationVariables,
    UpdateApplicationMutation,
    UpdateApplicationMutationVariables,
    DeleteApplicationMutation,
    DeleteApplicationMutationVariables,
    SchemataQuery,
    SchemataQueryVariables,
    SchemaQuery,
    SchemaQueryVariables,
    UpdateSchemaMutation,
    UpdateSchemaMutationVariables,
    DeleteSchemaMutation,
    DeleteSchemaMutationVariables,
    LanguagesQuery,
    LanguagesQueryVariables,
    UpdateTranslationMutation,
    UpdateTranslationMutationVariables,
    ProfilesQuery,
    ProfilesQueryVariables
} from '../types';

export class BaseService extends ApolloClientService {
    applications ( variables?: ApplicationsQueryVariables, clientOptions?: ClientOptions ): Promise<ApplicationsQuery> {
        return this.doQuery<ApplicationsQuery, ApplicationsQueryVariables>( applications, variables, clientOptions );
    }

    application ( variables?: ApplicationsQueryVariables, clientOptions?: ClientOptions ): Promise<ApplicationQuery> {
        return this.doQuery<ApplicationQuery, ApplicationsQueryVariables>( application, variables, clientOptions );
    }

    createApplication ( variables?: CreateApplicationMutationVariables, clientOptions?: MutationClientOptions ): Promise<CreateApplicationMutation> {
        return this.doMutation<CreateApplicationMutation, CreateApplicationMutationVariables>( createApplication, variables, clientOptions );
    }

    updateApplication ( variables?: UpdateApplicationMutationVariables, clientOptions?: MutationClientOptions ): Promise<UpdateApplicationMutation> {
        return this.doMutation<UpdateApplicationMutation, UpdateApplicationMutationVariables>( updateApplication, variables, clientOptions );
    }

    deleteApplication ( variables?: DeleteApplicationMutationVariables, clientOptions?: MutationClientOptions ): Promise<DeleteApplicationMutation> {
        return this.doMutation<DeleteApplicationMutation, DeleteApplicationMutationVariables>( deleteApplication, variables, clientOptions );
    }

    schemata ( variables?: SchemataQueryVariables, clientOptions?: ClientOptions ): Promise<SchemataQuery> {
        return this.doQuery<SchemataQuery, SchemataQueryVariables>( schemata, variables, clientOptions );
    }

    schema ( variables?: SchemaQueryVariables, clientOptions?: ClientOptions ): Promise<SchemaQuery> {
        return this.doQuery<SchemaQuery, SchemaQueryVariables>( schema, variables, clientOptions );
    }

    updateSchema ( variables?: UpdateSchemaMutationVariables, clientOptions?: MutationClientOptions ): Promise<UpdateSchemaMutation> {
        return this.doMutation<UpdateSchemaMutation, UpdateSchemaMutationVariables>( updateSchema, variables, clientOptions );
    }

    deleteSchema ( variables?: DeleteSchemaMutationVariables, clientOptions?: MutationClientOptions ): Promise<DeleteSchemaMutation> {
        return this.doMutation<DeleteSchemaMutation, DeleteSchemaMutationVariables>( deleteSchema, variables, clientOptions );
    }

    languages ( variables?: LanguagesQueryVariables, clientOptions?: ClientOptions ): Promise<LanguagesQuery> {
        return this.doQuery<LanguagesQuery, LanguagesQueryVariables>( languages, variables, clientOptions );
    }

    updateTranslation ( variables?: UpdateTranslationMutationVariables, clientOptions?: MutationClientOptions ): Promise<UpdateTranslationMutation> {
        return this.doMutation<UpdateTranslationMutation, UpdateTranslationMutationVariables>( updateTranslation, variables, clientOptions );
    }

    profiles ( variables?: ProfilesQueryVariables, clientOptions?: ClientOptions ): Promise<ProfilesQuery> {
        return this.doQuery<ProfilesQuery, ProfilesQueryVariables>( profiles, variables, clientOptions );
    }
}
