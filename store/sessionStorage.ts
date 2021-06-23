export const state = () => ( {
    user: null,
    application: null
} );

export const mutations = {
    user ( state: any, value: any ) {
        state.user = value;
    },
    application ( state: any, value: any ) {
        state.application = value;
    }
};
