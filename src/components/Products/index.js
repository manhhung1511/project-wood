import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import classNames from "classnames/bind";
import products from "../../data/product.json";
import { Link } from "react-router-dom";
import Product from "../ProductNew";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const Products = () => {
  const [category, setCategory] = useState(0);
  const [isCategory, setIsCategory] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);

  const handleCategory = (item) => {
    setCategory(item);
    setIsCategory(true);
  };

  const handleFull = (item) => {
    setIsCategory(false);
    setCategory(item);
  };

  const addDot = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const categoryProducts = products.filter(
    (product) => product.category == category
  );

  useEffect(() => {
    const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts'));
    setLikedProducts(storedLikedProducts);
  },[])
  

   const handleLike = (product) => {
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

  return (
    <div className={cx("products")}>
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
          <span>Sản phẩm</span>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("products_many")}>
          <div className={cx("row")}>
            <div className={cx("products_title")}>
                <p>Sản phẩm</p>
              </div>
              <div className={cx("products_filter")}>
                <div className={cx("col-sm-9")}>
                    <div className={cx("row")}>
                    <div className={cx("col-sm-2")}>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Hàng mới</label>
                </div>
                </div>
             
                <div className={cx("col-sm-2")}>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Xem nhiều</label>
                </div>
                </div>
                <div className={cx("col-sm-2")}>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Giảm giá</label>
                </div>
                </div>
                <div className={cx("col-sm-3")}>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Giá từ thấp đến cao</label>
                </div>
                </div>
                <div className={cx("col-sm-3")}>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Giá từ cao đến thấp</label>
                </div>
                </div>
                    </div>
                </div>
              

                {/* <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Xem nhiều</label>
                </div>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Giảm giá</label>
                </div>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Giá từ thấp đến cao</label>
                </div>
                <div className={cx("filter")}>
                    <input
                      type="radio"
                      id="payment"
                      name="fav_language"
                      value="filter"
                      // onClick={() => handleCategory(6)}
                    />
  <label for="filter">Giá từ cao đến thấp</label>
                </div> */}
              </div>
            </div>
          <div className={cx("row")}>
          
            <div className={cx("col-sm-3")}>
             
              <div className={cx("filter_product")}>
                <p className={cx("filter_product-desc")}>DANH MỤC</p>
                <div className={cx("buy_content-pay")}>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="cod"
                      name="fav_language"
                      value="0"
                      onClick={() => handleFull(0)}
                    />
                    <label for="cod">Tất cả</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="cod"
                      name="fav_language"
                      value={category}
                      onClick={() => handleCategory(1)}
                    />
                    <label for="cod">Phòng khách</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value={category}
                      onClick={() => handleCategory(2)}
                    />
                    <label for="payment">Phòng bếp</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value={category}
                      onClick={() => handleCategory(3)}
                    />
                    <label for="payment">Phòng ngủ</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value={category}
                      onClick={() => handleCategory(4)}
                    />
                    <label for="payment">Phòng thờ</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value={category}
                      onClick={() => handleCategory(5)}
                    />
                    <label for="payment">Phòng làm việc</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value={category}
                      onClick={() => handleCategory(6)}
                    />
                    <label for="payment">Đồ trang trí</label>
                  </div>
                </div>

                <p className={cx("filter_product-desc")} style={{"margin-top": "30px"}}>MÀU SẮC</p>
                <div className={cx("buy_content-pay")}>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="cod"
                      name="fav_language"
                      value="cod"
                      onClick={() => handleFull(0)}
                    />
                    <label for="cod">Tất cả</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="cod"
                      name="fav_language"
                      value="cod"
                      onClick={() => handleCategory(1)}
                    />
                    <label for="cod">Màu nguyên bản</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value="payment"
                      onClick={() => handleCategory(2)}
                    />
                    <label for="payment">Màu trắng</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value="payment"
                      onClick={() => handleCategory(3)}
                    />
                    <label for="payment">Màu nâu đậm</label>
                  </div>
                  <div className={cx("buy_content-pay-item")}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="fav_language"
                      value="payment"
                      onClick={() => handleCategory(4)}
                    />
                    <label for="payment">Màu nâu nhẹ</label>
                  </div>
                </div>
              </div>
             
            </div>
            <div className={cx("col-sm-9")}>
              <div className="row">
                {isCategory
                  ? categoryProducts.map((item, index) => {
                      return (
                        <>
                          <div className={cx("col-sm-4")} key={index}>
                            <div className={cx("product_hot-item")}>
                              <Link to={`/detail/${item.id}`}>
                                <img src={item.img} alt="" />
                                <div className={cx("product_hot-item-content")}>
                                  <p
                                    className={cx(
                                      "product_hot-item-content-title"
                                    )}
                                  >
                                    {item.name}
                                  </p>
                                  <p
                                    className={cx(
                                      "product_hot-item-content-price"
                                    )}
                                  >
                                    {addDot(item.price)}đ
                                    <span>{addDot(item.price_sales)}đ</span>
                                  </p>
                                </div>
                              </Link>
                              <div className={cx("product_hot-item-like")}>
                                <button onClick={() => handleLike(item)}>
                                  {(likedProducts && likedProducts.some(obj => obj.id == item.id)) ? (
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
                                        d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z"
                                        fill="#FC4343"
                                        stroke="#FC4343"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  ) : (
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
                                        d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z"
                                        stroke="#3C4242"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  : products.map((item, index) => {
                      return (
                        <>
                          <div className={cx("col-sm-4")} key={index}>
                            <div className={cx("product_hot-item")}>
                              <Link to={`/detail/${item.id}`}>
                                <img src={item.img} alt="" />
                                <div className={cx("product_hot-item-content")}>
                                  <p
                                    className={cx(
                                      "product_hot-item-content-title"
                                    )}
                                  >
                                    {item.name}
                                  </p>
                                  <p
                                    className={cx(
                                      "product_hot-item-content-price"
                                    )}
                                  >
                                    {addDot(item.price)}đ
                                    {
                                      item.price_sales.length > 1 && (
<span>{addDot(item.price_sales)}đ</span>
                                      )
                                    }
                                    
                                  </p>
                                </div>
                              </Link>
                              <div className={cx("product_hot-item-like")}>
                                <button onClick={() => handleLike(item)}>
                                  {(likedProducts && likedProducts.some(obj => obj.id == item.id)) ? (
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
                                        d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z"
                                        fill="#FC4343"
                                        stroke="#FC4343"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  ) : (
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
                                        d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z"
                                        stroke="#3C4242"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
        {/* <Product title="SẢN PHẨM ĐÃ XEM GẦN ĐÂY" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
