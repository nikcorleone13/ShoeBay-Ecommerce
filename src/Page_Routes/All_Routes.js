import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home_page/Home_Page"
import { Products } from '../pages/products_page/Products_Page';
import { Login } from '../pages/Login_page/Login';
import { Signup } from '../pages/Signup_Page/Signup';
import { Single_Product } from '../pages/Single_Product/Single_Product';
import { Cart } from '../pages/Cart/Cart';
import { Wishlist } from '../pages/Wishlist/Wishlist';
import Mockman from "mockman-js";

export const All_Routes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/singleproduct/:productId" element={<Single_Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/mockman' element={<Mockman />} />
            </Routes>
        </div>
    )
}
