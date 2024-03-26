import React from 'react';
import DefaultLayout from './DefaultLayout';
import { Outlet } from 'react-router-dom';
import Header from '../components/admin/Header';
import NavBar from '../components/admin/NavBar';


const AdminLayout = () => {
    return (
        <>  
            <div class="admin-layout">
                <div class="sidebar">
                    <Header/>
                </div>
                <div class="layout_content" style={{"margin-top": "40px"}}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout;