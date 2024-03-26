import React from "react";
import styles from "./Newss.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Newss = () => {
    return (
        <div class={cx("newss")}>
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
          <span>Tin tức</span>
        </div>
      </div>
       
        <div class={cx("container")}>
            <div className={cx("news")}>
        
                <div className={cx("news-content")}>
                    <div className="row">
                    <div className={cx("col-sm-6")}>
                            <h4 className={cx("news-content-top")}>
                            ĐỒ NỘI THẤT THEO XU HƯỚNG: KHÁM PHÁ NHỮNG TRÀO LƯU NỔI BẬT CHO NGÔI NHÀ HIỆN ĐẠI
                            </h4>
                        </div>
                        <div className={cx("col-sm-6")}>
                            <div className={cx("news-item")}>
                                <img src="https://i.postimg.cc/FsG596tK/unsplash-l-LDh9-Jpp-H2c.png" alt=""/>
                            </div>
                        </div>  
                       
                    </div>
                </div>

                <div className={cx("news-content")}>
                    <div className={cx("news-content-titlee")}>
                    TIN TỨC MỚI NHẤT
                    </div>
                    <div className="row">
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div> 
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div> 
                        </div> 
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div> 
                        </div> 
                     
                    </div>
                </div>

                <div className={cx("news-content")}>
                    <div className={cx("news-content-titlee")} style={{"marginTop": "20px"}}>
                        BÀI VIẾT
                    </div>
                    <div className="row">
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <img style={{"max-width": "100%", "borderRadius": "10px"}} src="https://i.postimg.cc/50xdFs7P/e1984450dcb0fb2a9b336fbb995689ae.jpg" alt="image"/>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div> 
                        
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <img style={{"max-width": "100%", "borderRadius": "10px"}} src="https://i.postimg.cc/50xdFs7P/e1984450dcb0fb2a9b336fbb995689ae.jpg" alt="image"/>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div> <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <img style={{"max-width": "100%", "borderRadius": "10px"}} src="https://i.postimg.cc/50xdFs7P/e1984450dcb0fb2a9b336fbb995689ae.jpg" alt="image"/>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div> <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <img style={{"max-width": "100%", "borderRadius": "10px"}} src="https://i.postimg.cc/50xdFs7P/e1984450dcb0fb2a9b336fbb995689ae.jpg" alt="image"/>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div> <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <img style={{"max-width": "100%", "borderRadius": "10px"}} src="https://i.postimg.cc/50xdFs7P/e1984450dcb0fb2a9b336fbb995689ae.jpg" alt="image"/>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div> <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <img style={{"max-width": "100%", "borderRadius": "10px"}} src="https://i.postimg.cc/50xdFs7P/e1984450dcb0fb2a9b336fbb995689ae.jpg" alt="image"/>
                            <p>20.04.2021 | 14:45</p>
                            <Link to="/">
                                <h3>Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập Nhật Tổng Quan!</h3>
                            </Link>
                        </div>  
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Newss