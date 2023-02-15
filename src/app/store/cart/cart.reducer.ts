import { createReducer, on } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart-item.model';
import { addToCart, decrementItem, incrementItem, removeFromCart } from './cart.actions';

export interface CartState {
    items: Array<CartItem>,
    count: number
}

const getInitialState = (): CartState => {
    const cartState = localStorage.getItem('cartState');
    if (cartState && !cartState.match("undefined")) {
        return JSON.parse(cartState);
    }
    return { items: [], count: 0 }
}

console.log(getInitialState());

export const initialState: CartState = getInitialState();

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, { item }: any) => {
        const existingItem = state.items.find(cartItem => cartItem.id == item.id);
        if (existingItem) {
            const updatedItem = { ...existingItem, qty: existingItem.qty + 1 };
            return { items: [...state.items.filter(i => i.id != item.id), updatedItem], count: state.count + 1 };
        } else {
            return { items: [...state.items, { ...item, qty: 1 }], count: state.count + 1 };
        }
    }),
    on(removeFromCart, (state, { id }) => {
        return { items: [...state.items.filter(item => item.id != id)], count: state.count - 1 };
    }),
    on(incrementItem, (state, { id }) => {
        const existingItem = state.items.find(cartItem => cartItem.id == id);
        if (existingItem) {
            const updatedItem = { ...existingItem, qty: existingItem.qty + 1 };
            return { items: state.items.map(item => item.id == id ? updatedItem : item), count: state.count + 1 }
        }
        return state;
    }),
    on(decrementItem, (state, { id }) => {
        const existingItem = state.items.find(cartItem => cartItem.id == id);
        if (existingItem) {
            const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
            if (updatedItem.qty == 0) {
                return { items: state.items.filter(item => item.id != id), count: state.count - 1 };
            }
            return { items: state.items.map(item => item.id == id ? updatedItem : item), count: state.count - 1 };
        }
        return state;
    })
);