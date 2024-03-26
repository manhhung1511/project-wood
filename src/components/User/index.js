import React, { useEffect, useState } from "react";
import styles from "./User.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import EditInfor from "../EditInfor";
import Overlay from "../Overlay";


const cx = classNames.bind(styles);

const User = () => {
    const infor = JSON.parse(localStorage.getItem("user")) ?? "";
    const user = infor ? infor.username : "";
    const email = infor ? infor.email : "";
    const password = infor ? infor.password : "";
    const [updateInfor, setUpdateInfor] = useState(false);

    const handleUpdate = () => {
        setUpdateInfor(true);
    }

    const handleClose = () => {
        setUpdateInfor(false);
      };


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
    
            // window.location.reload();
        } 
    }

    return (
        <div className={cx("user")}>
            <div className={cx("container")}>
                  <h3>Thông tin cá nhân</h3>
                  <p>Chi tiết liên hệ</p>
                  <form onSubmit={handleSubmit}>
                    <div className={cx("login_about")}>
                        <div style={{"display": "flex"}}>
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

                        <div style={{"display": "flex"}}>
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
                       
                        <button style={{"margin-top": "20px"}} className={cx("button-full")}>Cập nhật</button>
                    </form>
            </div>

            {
                updateInfor && (
                    <Overlay>
                        <EditInfor onClose={handleClose}/>
                    </Overlay>
                )
            }

        </div>
    );
}


export default User