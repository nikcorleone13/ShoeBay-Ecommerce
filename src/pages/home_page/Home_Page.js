import React, { useEffect, useState } from 'react'
import { Header } from "../../components/navbar/Navbar.js"
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import "./Home_Page.css"
import { ButtonPrimary } from '../../components/buttons/primary/Button_Primary.js'
import { Footer } from '../../components/footer/Footer.js'
import { Loader } from '../../components/loadingScreen/Loader.js'
import { ProductsDataContext } from '../../contexts/ProductsContext.js'
import { ProdCategory } from '../prod_category/ProdCategory.js'



export const Home = () => {
    const [loading, setLoading] = useState(false);
    const { data, dispatch } = useContext(ProductsDataContext);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const handleCategory = (value) => {
        console.log('category', value)
        dispatch({ type: 'FILTER_CATEGORY', payload: value })
    }
    return (
        <div>
            <Header />

            {
                loading ? (
                    <div>
                        <Loader />
                    </div>) : (
                    <div>
                        <section className='hero-section'>
                            <div className='hero-div'>
                                <p>Unlock the Gateway to Endless Style Possibilities with our Vast Selection</p>
                            </div>
                        </section>

                        {/* categories-section */}

                        <section>
                            <div className='categories-head'>
                                <p id='category-para'>Check out categories and pick from the collection</p>
                            </div>
                        </section>
                        <section className='categories-section'>
                            <div className='category-image' id='category-1'>
                                <Link className='link-button' to='/products' onClick={() => handleCategory('sneaker')}>
                                    <ButtonPrimary text="SNEAKERS" value="sneakers" />
                                </Link>
                            </div>
                        </section>

                        <section className='categories-section'>
                            <div className='category-image' id='category-2'>
                                <Link className='link-button' to='/products' onClick={() => handleCategory('running')}>
                                    <ButtonPrimary text="RUNNING" value="RUNNING" />
                                </Link>
                            </div>
                        </section>

                        <section className='categories-section'>
                            <div className='category-image' id='category-3'>
                                <Link className='link-button' to='/products' onClick={() => handleCategory('casual')}>
                                    <ButtonPrimary text="CASUAL" value="casual" />
                                </Link>

                            </div>
                        </section>
                        <Footer />
                    </div >

                )
            }

        </div >
    )
}
