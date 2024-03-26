import React, { useEffect, useState } from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
const Sidebar = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    let location = useLocation();
   
    useEffect(() => {
        switch(location.pathname) {
            case '/admin/dashboard': 
                setActiveCategory(1);
                break;
            case '/admin/order': 
                setActiveCategory(2);
                break;
            case '/admin/': 
                setActiveCategory(3);
                break;
            case '/admin/staff': 
                setActiveCategory(4);
                break;
            default:
                setActiveCategory(0);
        }
    }, [location.pathname])
    const handleCategoryClick = (number) => {
        setActiveCategory(number);
    };

    return (
        <>
<div className={cx("sidebar_main")}>
    <div className={cx("sidebar")}>
    <div className={cx("sidebar-logo")}>  
                <img src="https://i.postimg.cc/d0sN4GFR/Brand.png" alt=""/>
    </div>
    <nav>
        <ul>
        <li className={cx("sidebar_item", {
              'active': 1 === activeCategory,
            })}><Link to="/admin/dashboard" onClick={() => handleCategoryClick(1)}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19ZM9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19Z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
            Tổng quan
        </Link></li>
        <li className={cx("sidebar_item",{
              'active': 2 === activeCategory,
            })}>
        <Link to="/admin/order" onClick={() => handleCategoryClick(2)}>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 9.15789L16.9242 8.13566C16.8547 7.19922 16.0455 6.47368 15.0705 6.47368H13.084M6 19H4.85853C3.78 19 2.92798 18.1189 3.00482 17.083L3.66855 8.13566C3.73801 7.19922 4.54725 6.47368 5.52226 6.47368H7.5087M7.5087 6.47368V4.68421C7.5087 3.20176 8.75678 2 10.2964 2C11.8359 2 13.084 3.20176 13.084 4.68421V6.47368M7.5087 6.47368H13.084M17 15C17 16.1046 16.1046 17 15 17C13.8954 17 13 16.1046 13 15M11 21H19C20.1046 21 21 20.1046 21 19V14C21 12.8954 20.1046 12 19 12H11C9.89543 12 9 12.8954 9 14V19C9 20.1046 9.89543 21 11 21Z" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            </span>
            Đơn hàng
        </Link></li>
        <li className={cx("sidebar_item", {
              'active': 3 === activeCategory,
            })}><Link to="/admin/product" onClick={() => handleCategoryClick(3)}>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 7V17C4 19.2091 7.58172 21 12 21C16.4183 21 20 19.2091 20 17V7M4 7C4 9.20914 7.58172 11 12 11C16.4183 11 20 9.20914 20 7M4 7C4 4.79086 7.58172 3 12 3C16.4183 3 20 4.79086 20 7M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="#475569" strokeWidth="1.5"/>
</svg>
        </span>
             Sản phẩm
        </Link>
        </li>
        <li className={cx("sidebar_item", {
              'active': 4 === activeCategory,
            })}><Link to="/admin/staff" onClick={() => handleCategoryClick(4)}>
        <span>
            <img src="https://i.postimg.cc/sDPJq1wT/g360.png" alt="" /> 
        </span>
        Nhân viên
        </Link></li>
        </ul>
    </nav>
    </div>
</div>
        </>
    );
}

export default Sidebar;