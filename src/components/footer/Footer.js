import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import "./footer.css"
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='terms'>
                <div className="logo">
                    <NavLink to="/">
                        SHOE<span style={{ color: "#00ed64", fontWeight: "bolder" }}>Stopper</span>
                        {/* <img src="../../public/images/logo/shoesbay-logo.png" /> */}
                    </NavLink>
                </div>
                <p className='para-1'>
                    Discover the Perfect Pair to Elevate Your Style
                </p>
                <p className='para-2'>Privacy PolicyTerms of Use © 2022 ShoeStopper</p>
            </div>
            <div className='socials'>
                <div className=' icon-1'>
                    <Link to="https://www.linkedin.com/in/nikhil-kumar-4b484b198/" target='blank'>
                        <FaLinkedin className='icons' />
                    </Link>
                </div>
                <div className='icons icon-2'>
                    <Link to="https://github.com/nikcorleone13" target='blank'>
                        <FaGithub className='icons' />
                    </Link>
                </div>
                <div className='icons icon-3'>
                    <Link to="https://twitter.com/kinik_js" target='blank'>
                        <FaTwitterSquare className='icons' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
