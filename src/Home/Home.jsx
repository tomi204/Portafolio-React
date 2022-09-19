import React from 'react'
import "./Home.css"
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
export const Home = () => {
    return (
        <section className='home'>
            <Navbar />
            <Footer />
        </section>
    )
}
