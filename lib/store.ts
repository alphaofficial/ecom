import { createStore, action } from "easy-peasy";
import { IProduct } from "../types";

export const store = createStore({
  cartItems: [],
  isCartOpen: false,
  addToCart: action((state: any, payload: IProduct) => {
    state.cartItems.push(payload);
  }),
  removeFromCart: action((state: any, payload: IProduct) => {
    state.cartItems = state.cartItems.filter(
      (item: any) => item._id !== payload._id
    );
  }),
  openCart: action((state: any, payload?: boolean) => {
    state.isCartOpen = true;
  }),
  hideCart: action((state: any, payload?: boolean) => {
    state.isCartOpen = false;
  }),
  clearCart: action((state: any, payload?: any) => {
    state.cartItems = [];
    state.isCartOpen = false;
  }),
});
