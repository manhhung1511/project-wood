import React, { useState } from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";
import products from "../../data/product.json"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Search = () => {

  const [search, setSearch] = useState([]);
  const [key, setKeyword] = useState('');

    const handleSearch = (e) => {
      setKeyword(e.target.value)
      const value = products.filter(item => item.name == e.target.value);
      setSearch(value);
    }

    const addDot = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
  return (
    <div className={cx("contact")}>
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
          <span>Tìm kiếm</span>
        </div>
      </div>
        
      <div className={cx("contact_main")}>
            <div className={cx("contact_content")}>
              
                        <div className={cx("contact_content-username")} style={{"width": "100%"}} onChange={handleSearch}>
                                            <input 
                                            type="text" 
                                            placeholder="Tìm kiếm"
                                            name="username"
                                            onChange={handleSearch}
                                            />  
                            </div>
                        

                
            </div>
        </div>
        {
          (search && search != '') ? search.map((item, index) =>
            (
              <div class="container">
              <div class="row">
              <div key={index} class="col-sm-4">
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
              </div>
              </div>
            
              </div>
            )

           ) : (
<div className={cx("contact_main")}>
            <div className={cx("contact_content")}>
              
                          
                    <p style={{"margin": "20px"}}>
                    Từ khóa nổi bật ngày hôm nay
                    </p>

                    <p style={{"margin": "20px"}}>
                        <span style={{"margin-right": "20px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M18.0847 1.23987C17.1397 0.398571 15.9715 -8.0345e-05 14.7939 1.21458e-08C13.3295 1.21458e-08 11.8508 0.6165 10.7693 1.7648L10.0003 2.58139L9.23126 1.7648C8.14973 0.616339 6.67122 1.21458e-08 5.20668 1.21458e-08C4.02922 1.21458e-08 2.86055 0.398813 1.91567 1.23995C-0.511877 3.4012 -0.632697 7.25288 1.55563 9.58195L9.10056 17.606C9.34747 17.8687 9.67294 18 9.99849 18C10.324 18 10.6494 17.8687 10.8964 17.606L18.4413 9.58195C20.6333 7.25288 20.5124 3.40104 18.0847 1.23987ZM17.0935 8.24123L9.99849 15.7869L2.90391 8.24179C1.64445 6.90127 1.34606 4.29794 3.14278 2.69815C4.70153 1.31042 6.83778 1.99523 7.88446 3.10661C9.03434 4.32759 8.21696 3.4597 10.0003 5.35331C11.4753 3.78707 11.0545 4.23382 12.1161 3.10661C13.1481 2.01082 15.2904 1.30287 16.8577 2.69807C18.6376 4.28263 18.3796 6.87459 17.0935 8.24123Z" fill="#2E2E2E"/>
</svg></span>

Bộ bàn ghế Minh Quốc
                      </p>

                      <p style={{"margin": "20px"}}>
                        <span style={{"margin-right": "20px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M18.0847 1.23987C17.1397 0.398571 15.9715 -8.0345e-05 14.7939 1.21458e-08C13.3295 1.21458e-08 11.8508 0.6165 10.7693 1.7648L10.0003 2.58139L9.23126 1.7648C8.14973 0.616339 6.67122 1.21458e-08 5.20668 1.21458e-08C4.02922 1.21458e-08 2.86055 0.398813 1.91567 1.23995C-0.511877 3.4012 -0.632697 7.25288 1.55563 9.58195L9.10056 17.606C9.34747 17.8687 9.67294 18 9.99849 18C10.324 18 10.6494 17.8687 10.8964 17.606L18.4413 9.58195C20.6333 7.25288 20.5124 3.40104 18.0847 1.23987ZM17.0935 8.24123L9.99849 15.7869L2.90391 8.24179C1.64445 6.90127 1.34606 4.29794 3.14278 2.69815C4.70153 1.31042 6.83778 1.99523 7.88446 3.10661C9.03434 4.32759 8.21696 3.4597 10.0003 5.35331C11.4753 3.78707 11.0545 4.23382 12.1161 3.10661C13.1481 2.01082 15.2904 1.30287 16.8577 2.69807C18.6376 4.28263 18.3796 6.87459 17.0935 8.24123Z" fill="#2E2E2E"/>
</svg></span>

Sofa Phòng Khách Góc L Gỗ Sồi Sơn Màu Hương Vàng Đẹp Giá Rẻ                      </p>
                      <p style={{"margin": "20px"}}>
                        <span style={{"margin-right": "20px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M18.0847 1.23987C17.1397 0.398571 15.9715 -8.0345e-05 14.7939 1.21458e-08C13.3295 1.21458e-08 11.8508 0.6165 10.7693 1.7648L10.0003 2.58139L9.23126 1.7648C8.14973 0.616339 6.67122 1.21458e-08 5.20668 1.21458e-08C4.02922 1.21458e-08 2.86055 0.398813 1.91567 1.23995C-0.511877 3.4012 -0.632697 7.25288 1.55563 9.58195L9.10056 17.606C9.34747 17.8687 9.67294 18 9.99849 18C10.324 18 10.6494 17.8687 10.8964 17.606L18.4413 9.58195C20.6333 7.25288 20.5124 3.40104 18.0847 1.23987ZM17.0935 8.24123L9.99849 15.7869L2.90391 8.24179C1.64445 6.90127 1.34606 4.29794 3.14278 2.69815C4.70153 1.31042 6.83778 1.99523 7.88446 3.10661C9.03434 4.32759 8.21696 3.4597 10.0003 5.35331C11.4753 3.78707 11.0545 4.23382 12.1161 3.10661C13.1481 2.01082 15.2904 1.30287 16.8577 2.69807C18.6376 4.28263 18.3796 6.87459 17.0935 8.24123Z" fill="#2E2E2E"/>
</svg></span>

Bộ bàn ghế Minh Quốc tay 14 - 6 món
                      </p>
                {/* <div className={cx("contact_collapse")}>
                    <h3>CÂU HỎI THƯỜNG GẶP</h3>
                    
                </div> */}
            </div>
        </div>
          )
          
        }
        
        <Footer/>
    </div>
  );
};

export default Search;
