import React from 'react'
import { Header } from "../../components/navbar/Navbar.js"
import { Link } from 'react-router-dom'

import "./Home_Page.css"
import { ButtonPrimary } from '../../components/buttons/primary/Button_Primary.js'
import { Footer } from '../../components/footer/Footer.js'

export const Home = () => {
    return (
        <div>
            <Header />
            {/* <Footer /> */}
            {/* section Hero */}
            <section className='hero-section'>
                <div className='hero-div'>
                    <p>Unlock the Gateway to Endless Style Possibilities with our Vast Selection</p>
                </div>
            </section>

            {/* categories-section */}

            <section>
                <div className='categories-head'>
                    <p>Check out categories and pick from the collection</p>
                </div>
            </section>
            <section className='categories-section'>
                <div className='category-image' id='category-1'>
                    <Link className='link-button'>
                        <ButtonPrimary text="SNEAKERS" value="sneakers" />
                    </Link>
                </div>
            </section>

            <section className='categories-section'>
                <div className='category-image' id='category-2'>
                    <Link className='link-button'>
                        <ButtonPrimary text="RUNNING" value="RUNNING" />
                    </Link>
                </div>
            </section>

            <section className='categories-section'>
                <div className='category-image' id='category-3'>
                    <Link className='link-button'>
                        <ButtonPrimary text="CASUAL" value="casual" />
                    </Link>

                </div>
            </section>
            <Footer />
        </div>
    )
}
