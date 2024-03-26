import React, { useState } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx("banner")}>
            <img alt="" src="./images/Rectangle 39.png" className={cx("banner_img")}/>
            <div className={cx("banner_content")}>
                <h3 className={cx("banner_content-title")}>
                    <span>KHÁM PHÁ NHỮNG SẢN PHẨM MỚI NHẤT CỦA CHÚNG TÔI</span>
                </h3>
                <div>
                    <h2>HTWOOD - NÂNG TẦM</h2>
                    <h2>KHÔNG GIAN, TÔN VINH</h2>
                    <h2>PHONG CÁCH</h2>
                </div>
                <button className={cx("banner_content-buy")}>KHÁM PHÁ NGAY</button>
            </div>
        </div>
    )
}

export default Banner;