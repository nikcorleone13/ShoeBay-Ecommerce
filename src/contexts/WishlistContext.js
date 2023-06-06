import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'
import { wishlistReducerFunction } from '../reducer/wishlistReducer';

export const WishlistContext = createContext();
const wishlistData = [];

export const WishlistProvider = ({ children }) => {
    const [state, wishlistDispatch] = useReducer(wishlistReducerFunction, wishlistData)

    // const getWishlistData = async => {
    //     try {
    //         const res = await get
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getWishlistData();
    // })

    return (
        <WishlistContext.Provider value={{ wishlistDispatch: wishlistDispatch, wishlistData: state }}>
            {children}
        </WishlistContext.Provider>
    )
}
