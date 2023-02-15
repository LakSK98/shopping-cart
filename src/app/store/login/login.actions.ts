import { createAction, props } from "@ngrx/store";

export const setIsLogged = createAction('[Login] SetIsLogged',props<{isLogged:boolean}>());