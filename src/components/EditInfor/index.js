import React, { useEffect, useState } from "react";
import styles from "./EditInfor.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const EditInfor = ({onClose}) => {
    const [formData, setFormData] = useState({
        username: '',
        email:'',
        number: '',
        province:'',
        district:'',
        address_detail:''
      });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        const phoneNumberPattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        if (formData.username.trim() === '') {
          newErrors.username = 'Tên không được để trống';
        }
        if (formData.email.trim() === '') {
          newErrors.email = 'Email không được để trống';
        }

        if(formData.number.trim() === '') {
          newErrors.number = 'Không được để trống';
        }
        if((formData.number.trim() !== '') && (!phoneNumberPattern.test(formData.number))) {
          newErrors.number = 'Vui lòng nhập đúng số điện thoại';
        }
        if(formData.province.trim() === '') {
          newErrors.province = 'Không được để trống';
        }
        if(formData.district.trim() === '') {
          newErrors.district = 'Không được để trống';
        }
        if(formData.address_detail.trim() === '') {
          newErrors.address_detail = 'Không được để trống  trường này';
        }
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
    };
    
    useEffect(() => {
        const infor = JSON.parse(localStorage.getItem("user")) ?? "";
        setFormData(infor);
    },[])

      const handleInputChange = (e) => {
        setErrors({...errors, [e.target.name]: ""})
        setFormData(prevState =>({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem('user', JSON.stringify(formData)); 
            onClose();
    
            // window.location.reload();
        } 
    }

    return (
        <>
        <div className={cx("wrapper")}>
            <div className={cx("login")}>
                <div className={cx("login_content")}>
                    <h3>Chỉnh sửa thông tin cá nhân</h3>
                    <form onSubmit={handleSubmit}>
                    <div className={cx("login_about")}>
                    <div className={cx("login_name")}>
                            <p>Họ và tên</p>
                            <input 
                            type="text"
                            placeholder="Họ và tên" 
                            name="username"
                            onChange={handleInputChange}
                            defaultValue={formData.username}
                            />
                             {errors.username && <div className="error_input">{errors.username}</div>}
                        </div>
                        <div className={cx("login_number")}>
                            <p>Số điện thoại</p>
                            <input 
                            type="text" 
                            placeholder="Nhập số điện thoại"
                            name="number"
                            onChange={handleInputChange}
                            defaultValue={formData.number}
                             />
                              {errors.number && <div className="error_input">{errors.number}</div>}
                        </div>
                    </div>
                   
                        <div className={cx("login_email")}>
                            <p>Email</p>
                            <input 
                            type="email"
                            placeholder="Nhập email" 
                            name="email"
                            onChange={handleInputChange}
                            defaultValue={formData.email}
                            />
                             {errors.email && <div className="error_input">{errors.email}</div>}
                        </div>

                        <div className={cx("login_about")}>
                        <div className={cx("login_province")}>
                            <p>Tỉnh / TP</p>
                            <input 
                            type="text" 
                            placeholder="Tỉnh / TP"
                            name="province"
                            onChange={handleInputChange}
                            defaultValue={formData.province}
                             />
                              {errors.province && <div className="error_input">{errors.province}</div>}
                        </div>  <div className={cx("login_district")}>
                            <p>Quận/ Huyện</p>
                            <input 
                            type="text" 
                            placeholder="Quận/ Huyện"
                            name="district"
                            onChange={handleInputChange}
                            defaultValue={formData.district}
                             />
                              {errors.district && <div className="error_input">{errors.district}</div>}
                        </div>
                       </div>
                         <div className={cx("login_detail")}>
                            <p>Địa chỉ cụ thể</p>
                            <input 
                            type="text" 
                            placeholder="Địa chỉ cụ thể"
                            name="address_detail"
                            defaultValue={formData.address_detail}
                            onChange={handleInputChange}
                             />
                              {errors.address_detail && <div className="error_input">{errors.address_detail}</div>}
                        </div>
                       
                        <button className={cx("login_button")}>Cập nhật</button>
                    </form>
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

export default EditInfor