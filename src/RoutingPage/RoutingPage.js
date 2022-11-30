import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'

const RoutingPage = () => {
    return (
        <div>RoutingPage
            <Routes>
                <Route path='/header' element={<Header />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/home' element={<Banner />} />
               

            </Routes>



        </div>
    )
}

export default RoutingPage