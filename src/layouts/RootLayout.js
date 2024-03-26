import React from 'react';
import DefaultLayout from './DefaultLayout';
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default DefaultLayout(RootLayout);