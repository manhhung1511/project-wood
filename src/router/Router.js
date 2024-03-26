import React from 'react'
import { ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePages';
import Login from '../components/admin/Login';
import Register from '../components/Register';
import Infor from '../components/Infor';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import Buy from '../components/Buy';
import Test from '../components/Test';
import Like from '../components/Like';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Newss from '../components/Newss';
import Introduce from '../components/Introduce';
import Sidebar from '../components/admin/SideBar';
import AdminLayout from '../layouts/AdminLayout';
import Order from '../components/admin/Order';
import Customer from '../components/admin/Customer';
import Dashboard from '../components/admin/Dashboard';
import Product from '../components/admin/Product';
import AddProduct from '../components/admin/AddProduct';
import Employee from '../components/admin/Employee';
import Success from '../components/Buy/Success';
import Otp from '../components/otp';
import Search from '../components/Search';

function Router() {
    let routes = [
        {
           path: '/',
           element: <HomePage/>
        },
        {
            path: '/infor',
            element: <Infor/>
        },
        {
            path: '/detail/:itemId',
            element: <ProductDetail/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: 'cart/buy',
            element: <Buy/>
        },
        {
            path: '/like',
            element: <Like/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/news',
            element: <Newss/>
        },
        {
            path: '/introduce',
            element: <Introduce/>
        },
        {
            path: '/success',
            element: <Success/>
        },
        {
            path: '/test',
            element: <Test/>
        },{
            path: '/otp',
            element: <Otp/>
        },{
            path: '/search',
            element: <Search/>
        }

    ];

    let admin = [
        {
            path: '/admin/order',
            element: <Order/>
        },
        {
            path: '/admin/dashboard',
            element: <Dashboard />
        },
        {
            path: '/admin/product',
            element: <Product />
        },
        {
            path: '/admin/add-product',
            element: <AddProduct />
        },
        {
            path: '/admin/staff',
            element: <Employee />
        },
        {
            path: '/admin/customer',
            element: <Customer />
        }
    ]

    const router = createBrowserRouter([
        {
            element: (
                <>
                  <ScrollRestoration />
                  <RootLayout />
                </>
              ),
              children: routes
        },
        {
            element: <AdminLayout/>,
            children: admin
        },
        {
            path: '/admin/login',
            element: <Login/>
        },
    ])

    return { router }
}

export default Router

