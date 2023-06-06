import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { ProductsDataContext } from '../../contexts/ProductsContext';
import './singleProduct.css';
import { Header } from '../../components/navbar/Navbar';
import { WishlistContext } from '../../contexts/WishlistContext';



export const Single_Product = () => {
    // contexts
    const { data } = useContext(ProductsDataContext);
    const { wishlistDispatch, wishlistData } = useContext(WishlistContext);

    const { productId } = useParams();
    const [showItem, setShowItem] = useState([]);

    // useffects
    useEffect(() => {
        const itemFound = data.all_Data.filter((item) => item._id === productId);
        console.log("id rec", productId);
        localStorage.setItem('singleItem', JSON.stringify(itemFound));
        const storedItem = JSON.parse(localStorage.getItem('singleItem'));
        setShowItem(storedItem);
    }, [data.all_Data, productId]);

    if (showItem.length === 0) {
        return <div>Loading...</div>;
    }

    const { _id, name, brand, price, img, rating } = showItem[0];

    return (
        <div>
            <Header />
            <div className='single-item-wrapper'>

                <div className='item-image-section'>
                    <img src={img} className='item-image' />
                </div>

                <div className='item-detail-wrapper'>
                    <div className='item-detail-div'>
                        <h1>{name}</h1>
                        <h2>{brand}</h2>
                        <h2>Rs {price}</h2>
                        <h3>Rating: {rating}</h3>
                    </div>
                    <div className='operation-buttons'>
                        <button className='op-button' onClick={() => wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: showItem[0] })}>Add to Wishlist</button>
                        <button className='op-button' >Add to Cart</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
