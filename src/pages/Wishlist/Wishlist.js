import React, { useContext, useEffect } from 'react'
import { WishlistContext } from '../../contexts/WishlistContext'
import { Header } from '../../components/navbar/Navbar';



export const Wishlist = () => {

    const { wishlistDispatch, wishlistData } = useContext(WishlistContext);
    console.log("wishlist page data", wishlistData)

    useEffect(() => {
        console.log("Wishlist updated:", wishlistData);
    }, [wishlistData]);
    return (
        <div>
            <Header />
            {
                wishlistData.length === 0 ? (
                    <div>
                        <h1 style={{ fontSize: '3rem', marginTop: "200px" }}>Empty wishlist :( </h1>
                    </div>
                ) : (
                    <div>
                        {
                            wishlistData.map((item) => (
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
                                            <button className='op-button' onClick={() => wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item._id })}>Remove from Wishlist</button>
                                            <button className='op-button' >Add to Cart</button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                )
            }


        </div>
    )
}
