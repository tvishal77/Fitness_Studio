import React from 'react'
import Header from "../Header/Header";
import Hero from './Hero';
import Exercises from './Exercises';
import Start from './Start'
import Pricing from './Pricing'
import Footer from './Footer';
import Testimonials from './Testimonials'
function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Exercises />
            <Start />
            <Pricing />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
