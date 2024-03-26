import React, { useState } from "react";
import styles from "./Size.module.scss";
import classNames from "classnames/bind";
import products from "../../../data/product.json"


const cx = classNames.bind(styles);

const Size = ({onClose, id}) => {
    const product = products.filter((item) => item.id === id);

    return (
        <>
        <div className={cx("wrapper")}>
            <div className={cx("login")}>
                <div className={cx("login_content")}>
                   
                    <h3>Chọn size</h3>

                        <img src={product[0].size} alt=""/>
                        <button className={cx("button_off")} onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                </div>    
             </div>
        </div>
        </>

    )
}

export default Size