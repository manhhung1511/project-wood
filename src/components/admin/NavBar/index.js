import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const NavBar = () => {
    const [inputSearch, setInputSearch] = useState("")

    function handleSearch(e) {
        setInputSearch(e.target.value)
    }
    return (
        <div className={cx("navbar")}>
            <div className={cx("navbar_search")}>
                <input
                type="text"
                placeholder="Tìm kiếm"
                value={inputSearch}
                onChange={handleSearch}
            />
            </div>
            <div className={cx("navbar_infor")}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 21H15" stroke="#A0A8B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.26855 9.74994C5.26731 8.86045 5.44213 7.97951 5.78294 7.1579C6.12375 6.33628 6.62381 5.59025 7.25429 4.9628C7.88476 4.33535 8.6332 3.83889 9.45644 3.50204C10.2797 3.16519 11.1615 2.99461 12.0509 3.00013C15.7625 3.02772 18.7312 6.11275 18.7312 9.83468V10.4999C18.7312 13.8577 19.4337 15.8061 20.0524 16.871C20.1191 16.9848 20.1546 17.1142 20.1553 17.246C20.156 17.3779 20.1219 17.5076 20.0565 17.6221C19.991 17.7366 19.8966 17.8318 19.7826 17.8982C19.6686 17.9645 19.5392 17.9996 19.4073 17.9999H4.59173C4.45985 17.9996 4.33038 17.9645 4.2164 17.8981C4.10242 17.8318 4.00795 17.7366 3.94252 17.622C3.8771 17.5075 3.84303 17.3778 3.84376 17.2459C3.84449 17.114 3.87999 16.9846 3.94667 16.8709C4.56573 15.8059 5.26855 13.8575 5.26855 10.4999L5.26855 9.74994Z" stroke="#A0A8B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span>
                    <img src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/405203666_782241450376935_7230513863790184455_n.jpg?stp=cp0_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=DQEAAb4XvCcAX-rq_89&_nc_ht=scontent.fhan9-1.fna&oh=00_AfC7DblZAOP5camlMLHEjDzdaQgRc-3xxlL_C5dfHDxhLA&oe=656E9A7F" alt=""/>
                </span>
                <span>
                    <p>Manh Hung</p>
                </span>
            </div>
        </div>
    );
}

export default NavBar