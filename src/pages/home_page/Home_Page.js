import React from 'react'
import { Header } from "../../components/navbar/Navbar.js"

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
                    <ButtonPrimary text="SNEAKERS" value="sneakers" />
                </div>
            </section>

            <section className='categories-section'>
                <div className='category-image' id='category-2'>
                    <ButtonPrimary text="RUNNING" value="RUNNING" />                </div>
            </section>

            <section className='categories-section'>
                <div className='category-image' id='category-3'>
                    <ButtonPrimary text="CASUAL" value="casual" />
                </div>
            </section>
            <Footer />
        </div>
    )
}
