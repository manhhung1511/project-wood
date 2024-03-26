import React from "react";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Category = () => {
    return (

    <div className={cx("category")}>
        <div className={cx("container")}>
             <h3 className={cx("category_title")}>
                BỘ SƯU TẬP
            </h3>
            <div className={cx("row")}>
                <div className={cx("col-sm-3")}>
                    <div className={cx("category_item")}>
                        <img src="./images/category1png.png" alt=""/>
                        <div className={cx("category_item-title")}>
                            Áo Polo
                        </div>
                        <Link to={"/"} className={cx("category_item-desc")}>
                            Khám phá ngay! 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className={cx("col-sm-3")}>
                    <div className={cx("category_item")}>
                        <img src="https://i.postimg.cc/Prb0g5bQ/igw.png" alt=""/>
                        <div className={cx("category_item-title")}>
                            Áo Khoác Gió
                        </div>
                        <Link to={"/"} className={cx("category_item-desc")}>
                            Khám phá ngay! 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div> <div className={cx("col-sm-3")}>
                    <div className={cx("category_item")}>
                        <img src="https://i.postimg.cc/BQ3VBGWL/image223.png" alt=""/>
                        <div className={cx("category_item-title")}>
                            Áo In
                        </div>
                        <Link to={"/"} className={cx("category_item-desc")}>
                            Khám phá ngay! 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div> <div className={cx("col-sm-3")}>
                    <div className={cx("category_item")}>
                        <img src="https://i.postimg.cc/VLzKbBMX/image3.png" alt=""/>
                        <div className={cx("category_item-title")}>
                            Quần Tây
                        </div>
                        <Link to={"/"} className={cx("category_item-desc")}>
                            Khám phá ngay! 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    );
}

export default Category;