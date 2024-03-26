import React, { useEffect, useState } from "react";
import styles from "./Success.module.scss";
import classNames from "classnames/bind";
import Footer from "../../Footer";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const Success = () => {

    const [cart, setToCart] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("addProducts"));
        setToCart(storedProducts);
      }, []);

      let sum = 0;

      if (cart && cart.length > 0) {
        cart.forEach((item) => {
          const number = parseInt(item.price * item.number1, 10);
          sum += number;
        });
      }

      const addDot = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };

      const handleSubmit = () => {
        localStorage.removeItem("addProducts");
        localStorage.removeItem("address");
        window.dispatchEvent(new Event("storage"));
      }
      
      const location = useLocation();
      const receivedData = location.state;
      console.log(receivedData)
      var currentDate = new Date();

    // Adjust the time for Vietnam timezone (UTC+7)
    var vietnamTime = new Date(currentDate.getTime() + (7 * 60 * 60 * 1000));

    // Extract individual components
    var year = vietnamTime.getFullYear();
    var month = vietnamTime.getMonth() + 1; // Month is zero-based, so we add 1
    var day = vietnamTime.getDate();
    var hours = vietnamTime.getHours();
    var minutes = vietnamTime.getMinutes();
    var seconds = vietnamTime.getSeconds();

    // Format the date
    var formattedDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
    var formattedTime = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    // Combine date and time
    var vietnamDateTime = formattedDate + " " + formattedTime;

    const [infor, setInfor] = useState({
      });

    useEffect(() => {
        const inforUser = JSON.parse(localStorage.getItem('user'));
        setInfor(inforUser);

        const address = JSON.parse(localStorage.getItem('address'));
        setAddress(address);
      },[])

    return (
        <>

        <h3 className={cx("title")}>
         ĐẶT HÀNG THÀNH CÔNG
        </h3>
        <div className={cx("success")}>
        <div className={cx("container")}>
            <div className={cx("row")} style={{"margin-bottom": "60px"}}>
                <div className={cx("col-sm-7")}>
                    <h4 className={cx("success_title")}>Thông tin cá nhân</h4>
                    <div className={cx("success_content-parent")}>
                        <p className={cx("success_content-parent-title")}>Mã đơn hàng: </p>
                        <p className={cx("success_content-parent-content")}>#11092023</p>
                    </div>
                    <div className={cx("success_content-parent")}>
                        <p className={cx("success_content-parent-title")}>Ngày đặt hàng: </p>
                        <p className={cx("success_content-parent-content")}>{vietnamDateTime}</p>
                    </div>
                    <div className={cx("success_content-parent")}>
                        <p className={cx("success_content-parent-title")}>Tên người nhận: </p>
                        <p className={cx("success_content-parent-content")}>{infor.name}</p>
                    </div>
                    <div className={cx("success_content-parent")}>
                        <p className={cx("success_content-parent-title")}>Email: </p>
                        <p className={cx("success_content-parent-content")}>{infor.email}</p>
                    </div>
                    <div className={cx("success_content-parent")}>
                        <p className={cx("success_content-parent-title")}>Địa chỉ nhận hàng: </p>
                        <p  className={cx("success_content-parent-content")}>{address.address_detail} - {address.district} - {address.province}</p>
                    </div>
                </div>

                <div className={cx("col-sm-5")}>
                    <h4 className={cx("success_title")}>Thông tin đơn hàng</h4>
                    {
                         cart && cart.length > 0 && (
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
                         )
                    }

                    <div className={cx("success_content-moneySum")}>
                        <p>
                        Tổng
                        </p>
                   
                        {
                            receivedData ? (
                                <div>
                                {addDot(receivedData.price*receivedData.number1)}đ
                                </div>

                            ) : (
                                <div>
                                {addDot(sum)}đ
                                </div>
                            )
                        }
                    </div>

                    <Link to="/">
                                <button className={cx("button-border")} onClick={handleSubmit} style={{"width": "100%"}}>
                                Tiếp tục mua sắm
                                </button>
                               </Link>
                </div>
            </div>
            {/* <div className={cx("success_main")}>
                <div className={cx("success_content")}>
                    <p  className={cx("success_content-logo")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path d="M43 26L28.3333 40L21 33" stroke="#039855" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="#039855" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </p>
                    <p className={cx("success_content-title")}>Mua hàng thành công</p>
                    <div className={cx("success_content-method")}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M3.5 8.75H24.5M7.7 19.25H11.9M16.1 19.25H20.3M6.86 24.5H21.14C22.3161 24.5 22.9042 24.5 23.3534 24.2139C23.7485 23.9622 24.0698 23.5607 24.2711 23.0667C24.5 22.5052 24.5 21.7701 24.5 20.3V7.7C24.5 6.22986 24.5 5.49479 24.2711 4.93327C24.0698 4.43935 23.7485 4.03778 23.3534 3.78611C22.9042 3.5 22.3161 3.5 21.14 3.5H6.86C5.68389 3.5 5.09583 3.5 4.64662 3.78611C4.25148 4.03778 3.93022 4.43935 3.72889 4.93327C3.5 5.49479 3.5 6.22986 3.5 7.7V20.3C3.5 21.7701 3.5 22.5052 3.72889 23.0667C3.93022 23.5607 4.25148 23.9622 4.64662 24.2139C5.09583 24.5 5.68389 24.5 6.86 24.5Z" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            Phương thức thanh toán
                        </p>
                        <p>
                            COD
                        </p>
                    </div>
                    <div className={cx("success_content-code")}>
                        <p>
                        Mã đơn hàng
                        </p>
                        <p>
                        <button type="button" className={cx("success_content-copy")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.3327 10.7501V14.2501C13.3327 17.1667 12.166 18.3334 9.24935 18.3334H5.74935C2.83268 18.3334 1.66602 17.1667 1.66602 14.2501V10.7501C1.66602 7.83341 2.83268 6.66675 5.74935 6.66675H9.24935C12.166 6.66675 13.3327 7.83341 13.3327 10.7501Z" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.3327 5.75008V9.25008C18.3327 12.1667 17.166 13.3334 14.2494 13.3334H13.3327V10.7501C13.3327 7.83341 12.166 6.66675 9.24935 6.66675H6.66602V5.75008C6.66602 2.83341 7.83268 1.66675 10.7493 1.66675H14.2494C17.166 1.66675 18.3327 2.83341 18.3327 5.75008Z" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Copy</span>
                        </button>
                        <span>0009234442</span>
                        </p>
                    </div>
                    <div className={cx("success_content-money")}>
                        <p>
                        Phí giao hàng
                        </p>
                        <p>
                            20.000đ
                        </p>
                    </div>
                    <div className={cx("success_content-moneySum")}>
                        <p>
                        Tổng
                        </p>
                   
                        {
                            receivedData ? (
                                <p>
                                {addDot(receivedData.price*receivedData.number1 - 50 + 20)}.000đ
                                </p>

                            ) : (
                                <p>
                                {addDot(sum - 50 + 20)}.000đ
                                </p>
                            )
                        }
                    </div>
                    <Link to="/">
                                <button className={cx("success_content-submit")} onClick={handleSubmit}>
                                Tiếp tục mua sắm
                                </button>
                               </Link>
                   
                </div>
            </div> */}
        </div>
        <Footer />
    </div>

    </>
    );
}

export default Success;