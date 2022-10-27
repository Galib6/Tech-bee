import React, { useState } from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header.js/Header';

const Homepage = () => {

    const { isDarkMode } = useContext(AuthContext)

    return (
        <div data-theme={isDarkMode} >
            <Header></Header>
            <Outlet className='mx-10' ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;