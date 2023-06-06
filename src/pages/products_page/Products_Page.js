import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from '../../components/navbar/Navbar';
import { FilterBar } from '../../components/filterbar/FilterBar';
import "./productsPage.css";
import { Footer } from '../../components/footer/Footer';
import { getProductsAPI } from '../../apiHelpers/apiHelpers';
import { ProductsDataContext } from '../../contexts/ProductsContext';
import reducerFunction from '../../reducer/filterReducer';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Loader } from '../../components/loadingScreen/Loader';

export const Products = () => {
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    const [show, setShow] = useState([]);
    const { data, dispatch } = useContext(ProductsDataContext);

    useEffect(() => {
        console.log('DATA', data);
        if (data && data.filter_Data) {
            setAllData(data);
            setShow(data.filter_Data);
        }
        setLoading(false);
    }, [data]);

    return (
        <div>
            {
                loading ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <div>
                        <Header />
                        <div className='main-div'>

                            <div className={`filter-div ${show.length > 0 ? 'sticky' : ''}`}>
                                <FilterBar />
                            </div>

                            <div className='products-div'>
                                {
                                    Object.values(show.map((item) => {
                                        return (
                                            <ProductCard item={item} key={item._id} />
                                        )
                                    }))
                                }
                            </div>
                        </div>
                        <Footer />
                    </div>
                )
            }

        </div>
    )
}
