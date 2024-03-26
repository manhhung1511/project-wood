import React, { useState } from "react";
import styles from "./Infor.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from 'react-router-dom';
import User from "../User";
import ChangePassword from "../ChangePassword";
import History from "../History";

const cx = classNames.bind(styles);

const Infor = () => {
    const infor = JSON.parse(localStorage.getItem("user")) ?? "";
    let user = "Xin chào";
    const navigate = useNavigate();
    if(infor.username) {
        user = infor ? infor.username : "";
    }
   
    const [userInfor, setUserInfor] = useState(true);
    const [password1, setPassword] = useState(false);
    const [history, setHistory] = useState(false);
    
    const handleInfor = () => {
        setPassword(false);
        setHistory(false);
        setUserInfor(true);
    }   
   
    const handlePassword = () => {
        setUserInfor(false);
        setHistory(false);
        setPassword(true);
    }   

    const handleHistory = () => {
        setUserInfor(false);
        setPassword(false);
        setHistory(true);
    }   

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("infor");
        localStorage.removeItem("addProducts");
        localStorage.removeItem("likedProducts");
        navigate("/");
        window.dispatchEvent(new Event("storage"));
    }

    return (
        <div className={cx("infor")}>
            <div className={cx("container")}>
                <div className={cx("breadcrumb")}>
                    <span>Trang chủ</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z" fill="#94A3B8"/>
                        </svg>
                    </span>
                    <span>Tài khoản</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z" fill="#94A3B8"/>
                        </svg>
                    </span>
                    <span>Thông tin cá nhân</span>
                </div>
                <div className={cx("row")}>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("infor_left")}>
                            <h3>{user}</h3>
                            <p>Chào mừng đến với tài khoản</p>
                            <div className={cx("infor_left-option")} >
                                <div className={userInfor ? "infor_hover" : ""}>
                                    <button type="button" onClick={handleInfor}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14ZM12 14C7.58172 14 4 16.6863 4 20M12 14C16.4183 14 20 16.6863 20 20" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                        <span>Thông tin cá nhân</span>
                                    </button>
                                </div>
                            </div> 
                            <div className={cx("infor_left-option")} >
                                <button type="button" onClick={handlePassword}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 9V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V9M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V12.2C19 11.0799 19 10.5198 18.782 10.092C18.5903 9.71569 18.2843 9.40973 17.908 9.21799C17.4802 9 16.9201 9 15.8 9H8.2C7.0799 9 6.51984 9 6.09202 9.21799C5.71569 9.40973 5.40973 9.71569 5.21799 10.092C5 10.5198 5 11.0799 5 12.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                    <span>Thay đổi mật khẩu</span>
                                </button>
                            </div>
                            <div className={cx("infor_left-option")} >
                                <button type="button" onClick={handleHistory}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 9V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V9M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V12.2C19 11.0799 19 10.5198 18.782 10.092C18.5903 9.71569 18.2843 9.40973 17.908 9.21799C17.4802 9 16.9201 9 15.8 9H8.2C7.0799 9 6.51984 9 6.09202 9.21799C5.71569 9.40973 5.40973 9.71569 5.21799 10.092C5 10.5198 5 11.0799 5 12.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                    <span>Lịch sử đơn hàng</span>
                                </button>
                            </div>
                            <div className={cx("infor_left-option")} >
                                <button type="button" onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Đăng xuất</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-sm-9")}>
                        {userInfor && <User/>}
                        {password1 && <ChangePassword/>}
                        {history && <History/>}
                    </div>
                </div>
           </div>

        </div>
    );
};

export default Infor