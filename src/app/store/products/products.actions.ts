import { createAction, props } from '@ngrx/store';
import Product from 'src/app/models/product.model';

export const getProducts = createAction('[Products] GetProducts');
export const setProducts = createAction('[Products] SetProducts', props<{products:Array<Product>}>());
export const updateProduct = createAction('[Products] UpdateProduct', props<{product:Product}>());