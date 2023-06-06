import React from "react";
import { NavLink } from "react-router-dom";

import { FaSearch } from "react-icons/fa"

import "./navbar.css";

export const Header = () => {

    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? '#00ed64' : '',
    });

    return (
        <nav>
            <div className="logo">
                <NavLink to="/" >
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
                        <NavLink to="/products" className="navbar-link" style={getActiveStyle}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist" className="navbar-link" style={getActiveStyle}>Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="navbar-link" style={getActiveStyle}>Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="navbar-link" style={getActiveStyle}>Login</NavLink>
                    </li>
                </ul>
            </div>
            {/* <button className="menu-button"><GiHamburgerMenu /></button> */}
        </nav >
    );
};
