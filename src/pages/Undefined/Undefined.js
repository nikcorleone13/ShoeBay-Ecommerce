import React from 'react'
import { NavLink } from 'react-router-dom'
import "./undefined.css"

export const Undefined = () => {
    return (
        <div className='container'>
            <div className='error-box'>
                <h1>404!!</h1>
                <h2>UH OH! You're lost.</h2>

                <p>
                    The page you are looking for does not exist. Return to home page.
                </p>
                <NavLink to="/" className='button-nav'>
                    <button>Go to home</button>
                </NavLink>
            </div>

        </div>
    )
}
