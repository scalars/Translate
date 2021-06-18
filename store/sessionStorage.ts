export const state = () => ( {
    user: null
} );

export const mutations = {
    user ( state: any, value: any ) {
        state.user = value;
    }
};
