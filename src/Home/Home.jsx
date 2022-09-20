import React from 'react'
import "./Home.css"
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Intro from '../Components/Intro/Intro'
export const Home = () => {
    return (
        <section className='home'>
            <Navbar />
            <Intro />
            <Footer />
        </section>
    )
}
