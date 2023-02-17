import Product from "src/app/models/product.model";
import { createReducer, on } from '@ngrx/store';
import { getProducts, setProducts, updateProduct } from "./products.actions";

export const initialState : Array<Product> = [];

export const productsReducer = createReducer(
    initialState,
    on(getProducts,(state)=>{
        return state;
    }),
    on(setProducts,(state,{products})=>{
        return products;
    }),
    on(updateProduct,(state,{product})=>{
        return state.map(p=>p.id==product.id?product:p);
    })
)

