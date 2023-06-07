import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';
import { getSingleProduct } from '../../apiHelpers/apiHelpers';

export const ProductCard = ({ item }) => {
    const handleIndividualItem = async (itemId) => {
        console.log("ID", itemId);
        try {
            const res = await getSingleProduct(itemId);
            const result = res?.data;
            console.log("item found", result);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <Link to={`/products/${item._id}`} className='prod-link'>
            <div className='card-wrapper' onClick={() => handleIndividualItem(item._id)} key={item._id}>
                <div className='card-image'>
                    <img src={item.img} alt={item.name} className='card-image' />
                </div>
                <div className='card-details'>
                    <h1>{item.brand}</h1>
                    <h2>{item.name}</h2>
                    <h2>Rs {item.price}</h2>
                    <p style={{ fontSize: "15px" }}>Rating: {item.rating}</p>
                </div>
            </div>
        </Link>
    );
};
