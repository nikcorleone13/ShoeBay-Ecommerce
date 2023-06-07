import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext';

import { Header } from '../../components/navbar/Navbar';
import './cart.css';

export const Cart = () => {

    const { cartDispatch, cart } = useContext(CartContext);
    console.log("wishlist page data", cart)

    useEffect(() => {
        console.log("cart updated:", cart);
    }, [cart]);

    const cartTotal = cart.reduce((sum, curr) => sum = (sum + (curr.quantity * curr.price)), 0)
    return (
        <div>
            <Header />
            {
                cart.length === 0 ? (
                    <div >
                        <h1 style={{ fontSize: '3rem', marginTop: "200px" }}>Empty Cart :( </h1>

                    </div>
                ) : (
                    <div>
                        <div className='cart-total'>
                            <h1>Cart total:{cartTotal}</h1>
                            <button>Place Order</button>
                        </div>
                        {
                            cart.map((item) => (
                                <div className='single-item-wrapper'>

                                    <div className='item-image-section'>
                                        <img src={item.img} className='item-image' />
                                    </div>

                                    <div className='item-detail-wrapper'>
                                        <div className='item-detail-div'>
                                            <h1>{item.name}</h1>
                                            <h2>{item.brand}</h2>
                                            <h2>Rs {item.price}</h2>

                                        </div>
                                        <div className='operation-buttons'>

                                            <button className='op-button' onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: item })}>Remove from Cart</button>

                                            <button className='op-button' onClick={() => cartDispatch({ type: 'INCREASE_QUANTITY_OF_PARTICULAR_ITEM', payload: item._id })}
                                            >+</button>

                                            <p style={{ fontSize: "25px" }}>Quantity: {item.quantity}</p>
                                            
                                            <button button className='op-button' onClick={() => cartDispatch({ type: 'DECREASE_QUANTITY_OF_PARTICULAR_ITEM', payload: item._id })}
                                            >-</button>

                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                )
            }


        </div >
    )
}
