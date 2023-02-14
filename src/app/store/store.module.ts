import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';

export function localStorageSyncReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return function (state, action) {
        const nextState = reducer(state, action);
        localStorage.setItem('cartState', JSON.stringify(nextState.cart));
        return nextState;
    };
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    imports: [
        StoreModule.forRoot({ cart: cartReducer }, { metaReducers })
    ]
})
export class CartStoreModule { }
