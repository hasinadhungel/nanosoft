import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../pages/Home'

const RoutingPage = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/header' element={<Header />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/home' element={<Home />} />
               

            </Routes>

        <div>
        <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default RoutingPage