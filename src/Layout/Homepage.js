import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header.js/Header';

const Homepage = () => {
    return (
        <div >
            <Header></Header>
            <Outlet className='mx-10' ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;