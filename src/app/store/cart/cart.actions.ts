import { createAction, props } from "@ngrx/store";
import Product from "src/app/models/product.model";

export const addToCart = createAction('[Cart] AddToCart',props<{item:Product}>());
export const removeFromCart = createAction('[Cart] RemoveFromCart', props<{id:number}>()); 
export const incrementItem = createAction('[Cart] Increment',props<{id:number}>());
export const decrementItem = createAction('[Cart] Decrement',props<{id:number}>());
export const clearCart = createAction('[Cart] ClearCart');