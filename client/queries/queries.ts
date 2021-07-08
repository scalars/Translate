import { gql } from '@apollo/client/core';

const applications = gql`
    query applications( $where: ApplicationWhereInput ) {
        applications( where: $where ) {
            id name
            root{
                id
                subsections {
                    id sectionName
                    description
                    sectionValues
                    translations {
                        id
                        istranslated
                        language {
                            isolanguage
                        }
                        translationValues
                    }
                    subsections {
                        id
                    }
                }
            }
#            defaultLanguage
            languages {
                id
                namelanguage
                isolanguage
                nativename
                flag
            }
        }
    }
`;

const application = gql`
    query application( $where: ApplicationWhereUniqueInput! ){
        application ( where: $where ) {
            id name
            root{ id }
#            defaultLanguage
            languages {
                id namelanguage isolanguage nativename flag
            }
        }
    }
`;

const createApplication = gql`
    mutation createApplication( $data: ApplicationCreateInput! ){
        createApplication ( data: $data ) {
            id name
            root{ id }
#            defaultLanguage
            languages {
                id namelanguage isolanguage nativename flag
            }
        }
    }
`;

const updateApplication = gql`
    mutation updateApplication( $where: ApplicationWhereUniqueInput! $data: ApplicationUpdateInput! ){
        updateApplication ( where: $where data: $data ) {
            id name
            root{ id }
#            defaultLanguage
            languages {
                id namelanguage isolanguage nativename flag
            }
        }
    }
`;

const deleteApplication = gql`
    mutation deleteApplication( $where: ApplicationWhereUniqueInput! ) {
        deleteApplication ( where: $where ) {
            id
        }
    }
`;

const schemata = gql`
    query schemata($id: ID!) {
        schemata (where: {application:{id:$id}}){
            id
            sectionName
            sectionValues
            translations {
                id
                translationValues
                language {
                    isolanguage
                }
                istranslated
            }
            subsections {
                id
                sectionName
            }
        }
    }
`;

const schema = gql`
    query schema( $where: SchemaWhereUniqueInput! ) {
        schema ( where: $where ) {
            id
            sectionName
            description
            sectionValues
            translations {
                id
                istranslated
                language {
                    isolanguage
                }
                translationValues
            }
            subsections {
                id
            }
        }
    }
`;

const updateSchema = gql`
    mutation updateSchema( $where: SchemaWhereUniqueInput! $data: SchemaUpdateInput! ) {
        updateSchema ( where: $where data: $data ) {
            id
            sectionName
            description
            sectionValues
            translations {
                id
                istranslated
                language {
                    isolanguage
                }
                translationValues
            }
            subsections {
                id
            }
        }
    }
`;

const deleteSchema = gql`
    mutation deleteSchema( $where: SchemaWhereUniqueInput! ) {
        deleteSchema ( where: $where ) {
            id
        }
    }
`;

const languages = gql`
    query languages( $where: LanguageWhereInput ) {
        languages( where: $where ){
            id
            namelanguage
            isolanguage
            nativename
            flag
        }
    }
`;

const updateTranslation = gql`
    mutation updateTranslation( $where: TranslationWhereUniqueInput! $data: TranslationUpdateInput! ) {
        updateTranslation( where: $where data: $data ){
            id
            istranslated
            language {
                isolanguage
            }
            translationValues
        }
    }
`;

const profiles = gql`
    query profiles( $where: ProfileWhereInput ) {
        profiles( where: $where ){
            id
            user {
                id
                username
                name
            }
            darkTheme
        }
    }
`;

export {
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
};
