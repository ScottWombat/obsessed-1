/*
import Immutable from 'immutable';

let initialState = Immutable.Map([]);

export let ui = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_LOCATION:
            state = state.set('activeLocationId', action.id);
            break;
    }

    return state;
};
*/
export const CHANGE_LANGUAGE ='CHANGE_LANGUAGE';
export const LOCAL_STORAGE_KEY='redux:language';
export const DEFAULT_LANGUAGE='it';


export function getLanguage(){
    const language = localStorage.getItem(LOCAL_STORAGE_KEY);
    return language || DEFAULT_LANGUAGE;
}

export function changeLanguage(language){
    //localStorage.setItem(LOCAL_STORAGE_KEY,language);
    return {
        type: CHANGE_LANGUAGE,
        language,
    };
}

//reducer
export function languageReducer(state=DEFAULT_LANGUAGE,action){
    return (action.type == CHANGE_LANGUAGE)? action.language : state;
}