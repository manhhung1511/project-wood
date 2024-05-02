import React, { useEffect, useState } from "react";
import styles from "./Buy.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";
import Qrcode from "./Qrcode";
import Overlay from "../Overlay";
import { useLocation, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Buy = () => {

  const location = useLocation()
  const buyNow = location.state;

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    number: '',
    province:'',
    district:'',
    address_detail:''
  });

  const [errors, setErrors] = useState({});
  const [cart, setToCart] = useState([]);
  const [infor, setInfor] = useState({
    name: '',
    number: ''
  });

  const navigate = useNavigate();

  const [showQR, setShowQR] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setErrors({...errors, ["selectedValue"]: ""})
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('addProducts'));
    setToCart(storedProducts);

    const inforUser = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem("address",JSON.stringify(inforUser))
    setInfor(inforUser);
  },[])

  const addDot = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  let sum = 0;
  
  if(cart && cart.length > 0) {
    cart.forEach((item) => {
      const number = parseInt(item.price*item.number1, 10);
      sum += number;
    });
  }


  const validateForm = () => {
    let newErrors = {};
    const phoneNumberPattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!(infor && infor.username) && formData.username.trim() === '') {
      newErrors.username = 'Tên không được để trống';
    }
    if (!(infor && infor.email) && formData.email.trim() === '') {
      newErrors.email = 'Email không được để trống';
    }
    if(selectedValue.trim() === '') {
      newErrors.selectedValue = 'Vui lòng chọn hình thức thanh toán';
    }
    if(!(infor && infor.username) && formData.number.trim() === '') {
      newErrors.number = 'Số điện thoại không được để trống';
    }
    if(!(infor && infor.name) &&(formData.number.trim() !== '') && (!phoneNumberPattern.test(formData.number))) {
      newErrors.number = 'Vui lòng nhập đúng số điện thoại';
    }
    if(!(infor && infor.province) && formData.province.trim() === '') {
      newErrors.province = 'Không được để trống trường này';
    }
    if(!(infor && infor.district) && formData.district.trim() === '') {
      newErrors.district = 'Không được để trống trường này';
    }
    if(!(infor && infor.address_detail) && formData.address_detail.trim() === '') {
      newErrors.address_detail = 'Không được để trống  trường này';
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
    localStorage.setItem("address",JSON.stringify(formData))
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) {
      if(selectedValue == 'payment') {
          setShowQR(true);
      } else {
        navigate('/success',{
          state: buyNow
        })
      }
    }
  }

  const handleClose = () => {
    setShowQR(false);
  }

  return (
    <div className={cx("buy")}>
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
          <span>Mua hàng</span>
        </div>
      </div>

      <div className={cx("container")}>
          <div className={cx("buy_content")}>
            <h3>MUA HÀNG</h3>
            
            <div className={cx("row")}>
              <div className={cx("col-sm-8")}>
                    <div className={cx("buy_content-detail")}>
                        <h4 className={cx("buy_content-title")}>
                            Thông tin vận chuyển
                        </h4>
                        <form onSubmit={handleSubmit}>
                            <div className={cx("buy_content-username")}>
                                        <p>Họ và tên</p>
                                        <input 
                                        type="text" 
                                        placeholder="Họ và tên"
                                        name="username"
                                        defaultValue={infor && infor.username}
                                        onChange={handleInputChange}
                                        />  
                             {errors.username && <div className="error_input">{errors.username}</div>}

                            </div>
                            <div className={cx("row")}>
                                 <div className={cx("col-sm-6")}>
                                    <div className={cx("buy_content-email")}>
                                        <p>Email</p>
                                        <input 
                                            type="email" 
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleInputChange}
                                            defaultValue={infor&&infor.email}
                                        />  
                             {errors.email && <div className="error_input">{errors.email}</div>}

                                        </div>
                                      
                                 </div>
                                 <div className={cx("col-sm-6")}>
                                    <div className={cx("buy_content-number")}>
                                        <p>Số điện thoại</p>
                                        <input 
                                            type="tel" 
                                            placeholder="Số điện thoại"
                                            name="number"
                                            value={ infor && infor.number}
                                            onChange={handleInputChange}
                                          defaultValue={infor && infor.number}
                                        />  
                             {errors.number && <div className="error_input">{errors.number}</div>}

                                    </div>
                                 </div>
                            </div>

                            <div className={cx("row")}>
                                 <div className={cx("col-sm-6")}>
                                 <div className={cx("buy_content-province")}>
                                    <p>Tỉnh/TP</p>
                                    <input 
                                        type="text" 
                                        placeholder="Tỉnh/TP"
                                        name="province"
                                        onChange={handleInputChange}
                                        defaultValue={infor&& infor.province}
                                    />  
                             {errors.province && <div className="error_input">{errors.province}</div>}

                                    </div> 
                                 </div>
                                 <div className={cx("col-sm-6")}>
                                    <div className={cx("buy_content-district")}>
                                        <p>Quận/Huyện</p>
                                        <input 
                                            type="text" 
                                            placeholder="Quận/Huyện"
                                            name="district"
                                            onChange={handleInputChange}
                                            defaultValue={infor && infor.district}
                                        />  
                             {errors.district && <div className="error_input">{errors.district}</div>}

                                    </div>
                                 </div>
                            </div>
                            <div className={cx("buy_content-detail")}>
                                        <p>Địa chỉ cụ thể</p>
                                        <input 
                                        type="text" 
                                        placeholder="Địa chỉ cụ thể"
                                        name="address_detail"
                                        onChange={handleInputChange}
                                        defaultValue={infor && infor.address_detail}
                                        />  
                             {errors.address_detail && <div className="error_input">{errors.address_detail}</div>}

                            </div>
                            <h4 className={cx("buy_content-pay-title")}>
                                Hình thức thanh toán
                            </h4>
                            <div className={cx("buy_content-pay")}>
                                <div className={cx("buy_content-pay-item")}>
                                    <input type="radio" id="cod" name="fav_language" value="cod" onChange={handleRadioChange}/>
                                    <label for="cod">COD - Thanh toán khi nhận hàng</label> 
                                </div>
                                <div className={cx("buy_content-pay-item")}>
                                    <input type="radio" id="payment" name="fav_language" value="payment" onChange={handleRadioChange}/>
                                    <label for="payment">Chuyển khoản liên ngân hàng bằng QR Code</label> 
                                </div>
                              {errors.selectedValue && <div className="error_input">{errors.selectedValue}</div>}
                            </div>
                            <button className={cx("button-border")} style={{"margin-right": "10px"}}>Quay lại trang trước</button>

                            <button className={cx("button-full")}>Xác nhận thanh toán</button>
                        </form>
                    </div>
              </div>
              <div className={cx("col-sm-4")}>
                  <div className={cx("summary")}>
                     <div className={cx("summary_title")}>
                        <h4>
                        Tóm tắt đơn hàng
                        </h4>
                    </div>
                    {
                      (cart && cart.length > 0 && buyNow == null) ? (
                        cart.map((item) => (
                          <div className={cx("summary_item")}>
                            <div className={cx("summary_item-product")}>
                                <img style={{width: "80px"}} src={item.img} alt=""/>
                                <div className={cx("summary_item-infor")}>
                                    <p>{item.name}</p>
                                    <p>Số lượng: {item.number1}</p>
                                    <p>Màu sắc : {item.colors}</p>
                                </div>  
                            </div>
                            <div className={cx("summary_item-price")}>
                                {addDot(item.price * item.number1)}đ
                            </div>
                          </div>
                        ))
                    
                      ) : (
                        (buyNow !== null) && (
                            <div className={cx("summary_item")}>
                            <div className={cx("summary_item-product")}>
                                <img style={{width: "60px"}} src={buyNow.img} alt=""/>
                                <div className={cx("summary_item-infor")}>
                                    <p>{buyNow.name}  x {buyNow.number1}  </p>
                                    <p>Màu sắc : {buyNow.colors}</p>
                                </div>
                            </div>
                            <div className={cx("summary_item-price")}>
                                {addDot(buyNow.price * buyNow.number1)}đ
                            </div>
                          </div>
                          )
                      )
                    }
                   
                    <div className={cx("summary_price")}>
                          <p>Tổng hàng </p>
                          {
                            (sum > 0 && buyNow == null) && (
                              <p>{addDot(sum)}đ</p>
                            ) 
                          }
                          {
                            buyNow && (
                              <p>{addDot(buyNow.price * buyNow.number1)}đ</p> 
                            )
                          }

                    </div>
                    <div className={cx("summary_price")}>
                          <p>Vận chuyển</p>
                          <p>0.000đ</p>
                    </div>
                    <div className={cx("summary_price-bold")}>
                          <p>Tổng tiền</p>
                          {/* {
                            sum > 0 ? (
                              <p>{addDot(sum - 50 + 20)}.000đ</p>
                            ) : (
                              <p>{addDot(buyNow.price * buyNow.number1 - 50 + 20)}.000đ</p>
                            )
                          } */}
                          {
                            (sum > 0 && buyNow == null) && (
                              <p>{addDot(sum)}đ</p>
                            ) 
                          }
                          {
                            buyNow && (
                              <p>{addDot(buyNow.price * buyNow.number1)}đ</p>
                            )
                          }

                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />

        {showQR && (
          <Overlay>
            {
              (sum > 0 && buyNow == null) && (
                <Qrcode onData={addDot(sum - 50 + 20)+'.000đ'} onClose={handleClose} />
               ) 
            }
            {
              buyNow && (
                <Qrcode onData={addDot(buyNow.price * buyNow.number1 - 50 + 20)+'.000đ'} onClose={handleClose} />
               ) 
            }
          </Overlay>
        )}
      </div>
  );
};

export default Buy;
