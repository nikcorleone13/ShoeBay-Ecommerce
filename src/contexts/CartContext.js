import { createContext, useReducer } from "react";

import { cartReducerFunction } from "../reducer/cartReducer";

export const CartContext = createContext();
const cartData = []

export const CartProvider = ({ children }) => {

    const [state, cartDispatch] = useReducer(cartReducerFunction, cartData)
    return (
        <CartContext.Provider value={{ cartDispatch: cartDispatch, cart: state }}>
            {children}
        </CartContext.Provider>
    )
}