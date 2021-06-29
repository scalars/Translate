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
                    }
                    subsections {
                        id
                    }
                }
            }
            defaultLanguage {
                id namelanguage isolanguage
            }
            languages {
                id namelanguage isolanguage
            }
        }
    }
`;

const application = gql`
    query application( $where: ApplicationWhereUniqueInput! ){
        application ( where: $where ) {
            id name
            root{ id }
            defaultLanguage {
                id namelanguage isolanguage nativename flag
            }
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
            defaultLanguage {
                id namelanguage isolanguage nativename flag
            }
            languages {
                id namelanguage isolanguage nativename flag
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

export {
    applications,
    application,
    updateApplication,
    schema,
    updateSchema,
    deleteSchema,
    languages
};
