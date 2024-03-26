import React, { useState } from "react";
import styles from "./Banner2.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Banner2 = () => {
    return (
        <div className={cx("container")}>
               <div className={cx("category_hot-title")}>
                    <p>DANH MỤC HOT TUẦN NÀY</p>
                </div>
            <div className={cx("category_hot")}>
                <div className="row">
                    <div className={cx("col-sm-3 category_hot-item1")}>
                        <div className={cx("category_hot-item1")}>
                            <img src="./images/Rectangle 55.png" alt=""/>
                            <div className={cx("banner2_item-category")}>
                            <p className={cx("banner2_item-title")}>
                            NỘI THẤT GỖ PHÒNG KHÁCH
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("category_hot-item2")}>

                         <img src="./images/Rectangle 56.png" alt=""/>
                         <div className={cx("banner2_item-category")}>
                        <p className={cx("banner2_item-title")}>
                        BÀN PHÒNG KHÁCH
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className={cx("col-sm-6")}>
                        <div className={cx("category_hot-item3")}>

                         <img src="./images/Rectangle 57.png" alt=""/>
                         <div className={cx("banner2_item-content3")}>
                        <p className={cx("banner2_item-title")}>
                        BÀN PHÒNG ĂN
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className={cx("banner2")}>
                <div className={cx("row")}>
                    <div  className={cx("col-sm-6")}>
                    <div className={cx("banner2_item1")}>
                    <img className={cx("image-width")} src="./images/Rectangle 58.png" alt=""/>
                    <div className={cx("banner2_item-content")}>
                        <p className={cx("banner2_item-title")}>
                            NỘI THẤT GỖ PHÒNG NGỦ
                        </p>
                    </div>
                </div>
                    </div>    
                    <div  className={cx("col-sm-6")}>
                    <div className={cx("banner2_item2")}>
                    <img className={cx("image-width")} src="./images/Rectangle 59.png" alt=""/>
                    <div className={cx("banner2_item-content2")}>
                        <p className={cx("banner2_item-title")}>
                            NỘI THẤT GỖ PHÒNG TẮM
                        </p>
                    </div>
                </div>
                </div>   
                </div>
                
             
            </div>
        </div>
    );
}

export default Banner2