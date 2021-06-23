import { Application, Authuser } from '~/client/types';

declare interface LocalState {
    user?: Authuser | null
    application?: Application | null
}

export const state = () => ( {
    user: null,
    application: null
} );

export const mutations = {
    setUser ( state: LocalState, value: Authuser ) {
        state.user = value;
    },
    setApplication ( state: LocalState, value: Application ) {
        state.application = value;
    }
};

export const getters = {
    getUser ( state: LocalState ) {
        return state.user || null;
    },
    getApplication ( state: LocalState ) {
        return state.application || null;
    }
};
