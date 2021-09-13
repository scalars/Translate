import { Application, Authuser, Schema } from '@scalars/cli';

declare interface LocalState {
    user?: Authuser | null
    application?: Application | null
    sections?: Schema[]
}

export const state = () => ( {
    user: null,
    application: null,
    sections: []
} );

export const mutations = {
    setUser ( state: LocalState, value: Authuser ) {
        state.user = value;
    },
    setApplication ( state: LocalState, value: Application ) {
        state.application = value;
    },
    setSections ( state: LocalState, value: Schema[] ) {
        state.sections = [...value];
    },
    addSections ( state: LocalState, value: Schema[] ) {
        state.sections?.push( ...value );
    },
    updateSection ( state: LocalState, value: Schema ) {
        const sectionIndex = state.sections?.findIndex( ( section: Schema ) => section.id === value.id );
        if ( sectionIndex !== undefined && state.sections ) {
            state.sections[sectionIndex] = value;
        }
    }
};

export const getters = {
    getUser ( state: LocalState ) {
        return state.user || null;
    },
    getApplication ( state: LocalState ) {
        return state.application || null;
    },
    getSection ( state: LocalState ) {
        return ( sectionId: string ) => state.sections?.find( ( section: Schema ) => section.id === sectionId ) || null;
    }
};
