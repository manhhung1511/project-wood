import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import styles from "./Like.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Like = () => {

    const [likedProducts, setLikedProducts] = useState([]);

    const handleLike = (product) => {
        if (likedProducts.includes(product)) {
            const newProduct = likedProducts.filter(item => item !== product);
            setLikedProducts(newProduct);
            localStorage.setItem('likedProducts', JSON.stringify(newProduct));
        }
    }
    useEffect(() => {
        const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts'));
        setLikedProducts(storedLikedProducts);
    },[])

    const addDot = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className={cx("like")}>
        <div className={cx("container")}>
          <div className={cx("breadcrumb")}>
            <span>Trang chủ</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z"
                  fill="#94A3B8"
                />
              </svg>
            </span>
            <span>Yêu thích</span>
          </div>
        </div>
  
        <div className={cx("container")}>
            <div className={cx("like_content")}>
              <h3>YÊU THÍCH</h3>
              
              <div className={cx("row")}>
              { likedProducts && likedProducts.length > 0 ?
                (likedProducts.map((item, index) => (
                            <div className={cx("col-sm-3")}>
                                <div className={cx("product_hot-item")}>
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.img} alt=""/>
                                    <div className={cx("product_hot-item-content")}>
                                        <p className={cx("product_hot-item-content-title")}>{item.name}</p>
                                        <p className={cx("product_hot-item-content-price")}>{addDot(item.price)}đ {item.price_sales.length > 1 && (<span>{item.price_sales}</span>)}</p>
                                    </div>
                                </Link>
                                    <div className={cx("product_hot-item-like")}>
                                        <button onClick={() => handleLike(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z" fill="#FC4343" stroke="#FC4343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                        </div>
                        ))
                ) : (
                    <div className={cx("empty")}>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M41.4787 20.4602C35.2557 13.208 24.8785 11.2572 17.0815 17.898C9.28452 24.5388 8.18681 35.642 14.3098 43.4961C19.4007 50.0263 34.8074 63.7989 39.8569 68.2566C40.4218 68.7554 40.7043 69.0047 41.0338 69.1027C41.3214 69.1882 41.636 69.1882 41.9236 69.1027C42.2531 69.0047 42.5355 68.7554 43.1005 68.2566C48.15 63.7989 63.5567 50.0263 68.6475 43.4961C74.7705 35.642 73.8069 24.469 65.8759 17.898C57.9449 11.327 47.7017 13.208 41.4787 20.4602Z" stroke="#0F172A" strokeWidth="6.225" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></p>

                        <h3 className={cx("empty_title")}>Danh sách yêu thích trống</h3>
                        <p className={cx("empty_desc")}>
                        Bạn chưa có sản phẩm nào trong danh sách yêu thích. Bạn sẽ tìm thấy rất nhiều
                            các sản phẩm thú vị trên trang Cửa hàng của chúng tôi
                        </p>
                        <Link to="/products">
                            <button>
                            Tiếp tục mua sắm
                            </button>
                        </Link>
                    </div>
                )
                    }
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
}

export default Like;