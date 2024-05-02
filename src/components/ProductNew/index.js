import React, { useEffect, useState } from "react";
import styles from "./ProductNew.module.scss";
import classNames from "classnames/bind";
import Product1 from "../../assets/images/product1.png";
import products from "../../data/product.json";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

const Product = ({title}) => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts'));
        if (storedLikedProducts) {
            setLikedProducts(storedLikedProducts);
        }
    },[])

    const addDot = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };

   
      const handleLike = (product) => {
        if(likedProducts) {
          const check = likedProducts.some(obj => obj.id == product.id);

          if (!check) {
          const updatedLikedProducts = [...likedProducts, product];
          setLikedProducts(updatedLikedProducts);
           // Update the localStorage with the new liked products
          localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
          } else {
            const newProduct = likedProducts.filter(item => item.id !== product.id);
            setLikedProducts(newProduct);
            localStorage.setItem('likedProducts', JSON.stringify(newProduct));
          }
        }
          else {
            setLikedProducts([product]);
            localStorage.setItem('likedProducts', JSON.stringify(product));
        }
    }
    return (
        <div class={cx("container")}>
            <div className={cx("product_hot")}>
                <div className={cx("product_hot-title")}>
                    <p>{title}</p>
                </div>
                <div className={cx("product_hot-content")}>
                    <div className="row">
                    {
                        products.map((item, index) => (
                            <div className={cx("col-sm-3")}>
                                <div className={cx("product_hot-item")}>
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.img} alt=""/>
                                    <div className={cx("product_hot-item-content")}>
                                        <p className={cx("product_hot-item-content-title")}>{item.name}</p>
                                        <p className={cx("product_hot-item-content-price")}>{addDot(item.price)}đ {item.price_sales.length > 1 && (
                                            <span>{addDot(item.price_sales)}đ</span>
                                        )}</p>
                                    </div>
                                </Link>
                                    <div className={cx("product_hot-item-like")}>
                                        <button onClick={() => handleLike(item)}>
                                        {
                                            likedProducts.some(obj => obj.id == item.id) ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z" fill="#FC4343" stroke="#FC4343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )
                                        }
                                        </button>
                                    </div>
                                </div>
                        </div>
                        ))
                    }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product