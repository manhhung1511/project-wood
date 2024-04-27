import React from "react";
import styles from "./Banner3.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const Banner3 = () => {
    return (
            <div className={cx("banner3")}>
            <div className={cx("banner3_content")}>
                <img src="./images/image 44.png" alt="" style={{"max-width": "100%"}}/>
                <div className={cx("banner3_content-item")}>
                    <h2>VỀ CHÚNG TÔI</h2>

                    <h1>CÂU CHUYỆN KHỞI NGUỒN</h1>
                    <p>HTWood ra đời từ đam mê trang trí và tình yêu với không gian sống. Chúng tôi chắp cánh cho ngôi nhà của bạn bằng những sản phẩm nội thất đẳng cấp và tinh tế.</p>
                    <button>Mua ngay</button>
                </div>
            </div>
        </div>
    );
   
}

export default Banner3;