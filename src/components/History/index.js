import React, { useState } from "react";
import styles from "./History.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import products from "../../data/product.json";

const cx = classNames.bind(styles);


const History = () => {
    return (
        <div className={cx("password")}>
            <div className={cx("container")}>
                  <h3>Lịch sử mua hàng</h3>
               {
                  products.map((item) => (
                        <div className={cx("summary_item")}>
                          <div className={cx("summary_item-product")}>
                              <img style={{width: "80px"}} src={item.img} alt=""/>
                              <div className={cx("summary_item-infor")}>
                                  <p>{item.name}</p>
                                  <p>Số lượng: {item.number1}</p>
                                  <p>Màu sắc : {item.colors}</p>
                              </div>  
                          </div>
                          <div className={cx("summary_item-price")}>
                              <Link to={`/detail/${item.id}`}>
                                    <button style={{"width": "100%"}} className={cx("button-full")}>Mua lại</button>
                              
                              </Link>
                              
                          </div>
                        </div>
                      ))
               }
            </div>
        </div>
    );
}

export default History;
