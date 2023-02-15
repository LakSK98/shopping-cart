import { createReducer, on } from "@ngrx/store";
import { setIsLogged } from "./login.actions";

export const initialState: boolean = false;

export const loginReducer = createReducer(
    initialState,
    on(setIsLogged, (state, { isLogged } ) => {
        state = isLogged;
        return state;
    })
);