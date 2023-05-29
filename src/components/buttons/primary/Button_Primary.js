import React from 'react'

import "./button-primary.css"

export const ButtonPrimary = ({ text, value }) => {
    return (
        <button className='btn-primary' onClick={() => console.log(value)}>
            {text}
        </button>
    );
}
