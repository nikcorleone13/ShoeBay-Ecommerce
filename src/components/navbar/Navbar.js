import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FaSearch } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";

export const Header = () => {

    // const [showLinks, setShowLinks] = useState(true);

    return (
        <nav>
            <div className="logo">
                <NavLink to="/">
                    SHOE<span style={{ color: "#00ed64", fontWeight: "bolder" }}>Stopper</span>
                    {/* <img src="../../public/images/logo/shoesbay-logo.png" /> */}
                </NavLink>
            </div>

            <div className="search-bar" >
                <input type="text" placeholder="Search Products" />
                <button><FaSearch /></button>
            </div>

            <div className="navlinks" >
                <ul>
                    <li>
                        <NavLink to="/products" className="navbar-link">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist" className="navbar-link">Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="navbar-link">Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="navbar-link">Login</NavLink>
                    </li>
                </ul>
            </div>
            {/* <button className="menu-button"><GiHamburgerMenu /></button> */}
        </nav >
    );
};
