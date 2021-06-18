import { gql } from '@apollo/client/core';

const authUser = gql`
    query authuser( $where: AuthuserWhereUniqueInput! ){
        authuser(where: $where){
        id
      }
    }
`;

const createAuthuser = gql`
    mutation createAuthuser( $data: AuthuserCreateInput! ){
        createAuthuser(data: $data){
            id
        }
    }
`;

export {
    authUser, createAuthuser
};
