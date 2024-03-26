import React, { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import Overlay from "../Overlay";
import Otp from "../otp";
const cx = classNames.bind(styles);

const Register = ({onClose, onLogin, onOtp, data}) => {

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password: '',
        passwordVerify: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = { };
        if (formData.username.trim() === '') {
            newErrors.username = 'Họ và tên không được để trống';
          }
        if (formData.email.trim() === '') {
          newErrors.email = 'Số điện thoại không được để trống';
        }
        if (formData.password.trim() === '') {
          newErrors.password = 'Mật khẩu không được để trống';
        }
        if (formData.passwordVerify.trim() === '') {
            newErrors.passwordVerify = 'Mật khẩu xác nhận không được để trống';
          }
        if (formData.passwordVerify !== formData.password) {
            newErrors.passwordVerify = 'Mật khẩu không khớp';
        }
        
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setErrors({...errors, [e.target.name]: ""})
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // localStorage.setItem('user', JSON.stringify(formData)); 
            onOtp()
            data(formData)
        } 
    }

    return (
        <>
        <div className={cx("wrapper")}>
            <div className={cx("register")}>
                <div className={cx("register_content")}>
                    <h3>Đăng ký</h3>
        
                    <form onSubmit={handleSubmit}>
                        <div className={cx("register_fullname")}>
                            <p>Họ và tên</p>
                            <input 
                            type="text" 
                            placeholder="Họ và tên"
                            name="username"
                            onChange={handleInputChange}
                            />
                             {errors.username && <div className="error_input">{errors.username}</div>}
                        </div>

                        <div className={cx("register_email")}>
                            <p>Số điện thoại</p> 
                            <input 
                            type="text" 
                            placeholder="Nhập số điện thoại"
                            name="email"
                            onChange={handleInputChange}
                            />
                             {errors.email && <div className="error_input">{errors.email}</div>}
                        </div>

                        <div className={cx("register_password")}>
                            <p>Mật khẩu</p>
                            <input 
                            type="password" 
                            placeholder="Nhập mật khẩu"
                            name="password"
                            onChange={handleInputChange}
                            />
                             {errors.password && <div className="error_input">{errors.password}</div>}
                        </div>

                        <div className={cx("register_password-verify")}>
                            <p>Nhập lại mật khẩu</p>
                            <input 
                            type="password" 
                            placeholder="Nhập lại mật khẩu"
                            name="passwordVerify"
                            onChange={handleInputChange}
                            />
                             {errors.passwordVerify && <div className="error_input">{errors.passwordVerify}</div>}
                        </div>
                        <button className={cx("register_button")}>Đăng ký</button>
                    </form>

                    <p className={cx("hoac")}>Hoặc</p>

                       
                        <p className={cx("not_account")}>
                            Bạn đã có tài khoản? <button className={cx("login")} onClick={onLogin}>Đăng nhập ngay</button>
                        </p>
                        <button className={cx("button_off")} onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                </div>    
             </div>
        </div>
        </>

    )
}

export default Register