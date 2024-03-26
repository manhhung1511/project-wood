import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import products from "../../../data/product.json";


const cx = classNames.bind(styles);

const Cart = ({onClose, itemId, number, size, color}) => {
   
    const product = products.filter((item) => item.id == itemId)

    const addDot = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };

    return (
        <div className={cx("cart")}>
            <div className={cx("cart_content")}>
                <div className={cx("cart_content-title")}>
                    <img src="./images/tick-circle.png" alt=""/>
                    <h4>Thêm vào giỏ hàng</h4>
                </div>
                <div className={cx("cart_content-bottom")}>
                    <img style={{height:"122px"}} src={product[0].img} alt=""/>
                  
               
                    <div className={cx("cart_content-right")}>
                        <h4>{product[0].name}</h4>
                         <div className={cx("cart_content-right-child")}>
                            <div className={cx("cart_content-right1")}>
                                {/* <p>Màu sắc: {color}</p> */}
                                <p>Kích cỡ: {size}</p>
                            </div>
                            <div className={cx("cart_content-right2")}>
                                <p>Số lượng: {number}</p>
                            </div>
                        </div>
                    </div>
                 </div>
              
                <div className={cx("cart_content-bill")}>
                    <div className={cx("cart_content-bill1")}>
                        <p>Tạm tính</p>
                    </div>
                    <div className={cx("cart_content-bill2")}>
                        <p>{addDot(product[0].price * number)}.000đ</p>
                    </div>
                </div>
                <p className={cx("cart_content-desc")}>Thuế và phí vận chuyển sẽ được tính khi thanh toán</p>

                <div className={cx("cart_content-button")}>
                    <Link to="/cart">
                        <button className={cx("cart_content-button1")} type="button">Xem giỏ hàng</button>
                    </Link>
                    <Link to="/cart/buy" state={{...product[0], number1: number,color: color}}>
                        <button className={cx("cart_content-button2")} type="button">Mua ngay</button>
                    </Link>
                </div>
            </div>
            <button className={cx("button_off")} onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
            </button>
        </div>              
    )
}

export default Cart;