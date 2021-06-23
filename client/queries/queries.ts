import { gql } from '@apollo/client/core';

const applications = gql`
    query applications( $where: ApplicationWhereInput ) {
        applications( where: $where ) {
            id name defaultLanguage {
                id namelanguage isolanguage flag
            }
            languages {
                id namelanguage isolanguage flag
            }
        }
    }
`;

const application = gql`
    query application( $where: ApplicationWhereUniqueInput! ){
        application ( where: $where ) {
            id name root{
                id
            } defaultLanguage {
                id namelanguage isolanguage nativename flag
            }
            languages {
                id namelanguage isolanguage nativename flag
            }
        }
    }
    `;

export {
    applications,
    application
};
