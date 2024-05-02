import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import products from "../../data/product.json";

const cx = classNames.bind(styles);

const Product = () => {

    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts'));
        if (storedLikedProducts) {
            setLikedProducts(storedLikedProducts);
        }
    },[])

    const handleLike = (product) => {
        if(Array.isArray(likedProducts) && likedProducts.length) {
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
            localStorage.setItem('likedProducts', JSON.stringify([product]));
        }
      }
  

    const addDot = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };


      const [isCart, setCart] = useState(false);
      const [cart, setToCart] = useState([]);
      const [color, setColor] = useState('black');
      const [size, setSize] = useState('S');
      const [number, setNumber] = useState(1);
      const [isSize, setIsSize] = useState(false);

      const [label, setLabel ] = useState('');
      const handleCart = () => {
          setCart(true);
      }
      const handleCloseCart = () => {
          setCart(false);
      }


      useEffect(() => {
          const storedLikedProducts = JSON.parse(localStorage.getItem('addProducts'));
          setToCart(storedLikedProducts);
      },[])

      const handleAddToCart = (product, color, size, number) => {
          if(cart && cart.length > 0) {
              const check = cart.some(obj => obj.id == product.id);
              if (!check) {
                  const updatedProducts = [...cart, {...product, "color": color, "size": size, "number1": number}];
                  setToCart(updatedProducts);
                  localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
                  window.dispatchEvent(new Event("storage"));
              } else {
                  const checkColor = cart.some(obj => obj.color == color && obj.id == product.id);
                  const checkSize = cart.some(obj => obj.size == size && obj.id == product.id);
                  if(!checkColor || !checkSize) {
                      const updatedProducts = [...cart, {...product, "color": color, "size": size, "number1": number}];
                      setToCart(updatedProducts);
                      localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
                      window.dispatchEvent(new Event("storage"));
                  }
              }
          } else {
              const updatedProducts = [{...product, "color": color, "size": size, "number1": number}];
              setToCart(updatedProducts)
               // Update the localStorage with the new liked products
              localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
              window.dispatchEvent(new Event("storage"));
          }
          
      }

      const handleCartAndAddToCart = (item, color, size, number) => {
          handleAddToCart(item, color, size, number);
          handleCart();
      }

    return (
        <div className={cx("container")}>
            <div className={cx("product_hot")}>
                <div className={cx("product_hot-title")}>
                    <p>SẢN PHẨM CỦA CHÚNG TÔI</p>
                </div>
                {/* <div className={cx("product_hot-desc")}>
                    <span>
                        Tất cả
                    </span>
                    <span>
                        Khuyến mãi
                    </span>
                    <span>
                        Áo
                    </span>
                    <span>
                        Quần
                    </span>
                </div> */}
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
                                    </div>
                                </Link>
                                <div style={{"display": "flex",
    "justify-content": "space-between", "margin-top": "15px"}}>
                                        <p className={cx("product_hot-item-content-price")}>{addDot(item.price)}đ {item.price_sales.length > 1 && (<span>{addDot(item.price_sales)}đ</span>) }</p>
                                        <button onClick={() => handleCartAndAddToCart(item, color, size,number)} style={{backgroundColor: "#FFF", border: "none"}}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.11112 17.625C7.19063 17.625 6.44445 18.3805 6.44445 19.3125C6.44445 20.2445 7.19063 21 8.11112 21C9.03161 21 9.77779 20.2445 9.77779 19.3125C9.77779 18.3805 9.03161 17.625 8.11112 17.625ZM18.1111 17.625C17.1907 17.625 16.4445 18.3805 16.4445 19.3125C16.4445 20.2445 17.1907 21 18.1111 21C19.0316 21 19.7778 20.2445 19.7778 19.3125C19.7778 18.3805 19.0316 17.625 18.1111 17.625ZM21.7753 4.57268C21.5632 4.28816 21.2399 4.125 20.8878 4.125H6.23463L6.15202 3.6859C6.07716 3.28789 5.73344 3 5.33334 3H2.83333C2.37313 3 2 3.37772 2 3.84375C2 4.30971 2.37313 4.6875 2.83333 4.6875H4.64379L6.73695 15.814C6.81181 16.212 7.15553 16.5 7.55564 16.5H18.9445C19.4047 16.5 19.7778 16.1222 19.7778 15.6562C19.7778 15.1902 19.4047 14.8125 18.9445 14.8125H8.24512L7.92768 13.125H18.9835C19.4794 13.125 19.9153 12.7921 20.0516 12.3093L21.9566 5.55927C22.0531 5.2165 21.9869 4.85723 21.7753 4.57268ZM18.5642 11.4375H7.61022L6.55209 5.8125H20.1518L18.5642 11.4375Z" fill="#2E2E2E"/>
</svg>

                                        </button>
                                        </div>
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