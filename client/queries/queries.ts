import { gql } from '@apollo/client/core';

const applications = gql`
    query applications( $where: ApplicationWhereInput ) {
        applications( where: $where ) {
            id name
            root{
                id
                subsections { id }
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
            }
        }
    }
`;

export {
    applications,
    application,
    schema
};
