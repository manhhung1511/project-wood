import React, { useState } from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <div className={cx("contact")}>
      <div className={cx("container")}>
        <div className={cx("breadcrumb")}>
          <span>Home</span>
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
          <span>Liên hệ</span>
        </div>
      </div>
        
        <div className={cx("contact_main")}>
            <div className={cx("contact_content")}>
                <div className={cx("container")}>
                <div className={cx("contact_content-title")}>
                    <h3>LIÊN HỆ</h3>
                </div>
                <div className={cx("contact_content-desc")}>
                    <p>Đội ngũ thân thiện của chúng tôi rất mong nhận được phản hồi từ bạn!</p>
                </div>
                <form>
                        <div className={cx("contact_content-username")}>
                                            <p>Tên của bạn</p>
                                            <input 
                                            type="text" 
                                            placeholder="Nhâp tên của bạn"
                                            name="username"
                                            />  
                            </div>
                            <div className={cx("contact_content-email")}>
                                            <p>Email</p>
                                            <input 
                                            type="email" 
                                            placeholder="Nhâp email"
                                            name="email"
                                            />  
                            </div>
                            <div className={cx("contact_content-messenger")}>
                                        <p>Tin nhắn</p>
                                        <textarea rows="4" cols="50" placeholder="Tin nhắn">
                                        </textarea>      
                            </div>

                            <button className={cx("contact_content-submit")}>Gửi</button>
                </form>

                {/* <div className={cx("contact_collapse")}>
                    <h3>CÂU HỎI THƯỜNG GẶP</h3>
                    
                </div> */}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Contact;
