import React from "react";
import styles from "./otp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Otp = ({ onClose, onLogin}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

 
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("login")}>
          <div className={cx("login_content")}>
            <h3>Mã xác thực OTP</h3>
            <div>
              <form onSubmit={handleSubmit}> 
                {/* <div style={{"display": "flex","justify-content": "center"}}>
                            
                            <input id="first" className="m-4 text-center form-control"  type="text" style={{ "border-radius": "194px", "width": "10%", "padding": "16px 29px"}} onChange={handleInputChange}/> 
                            <input id="second" className="m-4 text-center form-control" maxLength={1} type="text" style={{ "border-radius": "194px", "width": "10%", "padding": "16px 29px"}}/> 

                            <input className="m-4 text-center form-control" maxLength={1} type="text" style={{ "border-radius": "194px", "width": "10%", "padding": "16px 29px"}}/> 

                            <input className="m-4 text-center form-control" maxLength={1} type="text" style={{ "border-radius": "194px", "width": "10%", "padding": "16px 29px"}}/> 

                            <input className="m-4 text-center form-control" maxLength={1} type="text" style={{ "border-radius": "194px", "width": "10%", "padding": "16px 29px"}}/> 

                            <input className="m-4 text-center form-control" maxLength={1} type="text" style={{ "border-radius": "194px", "width": "10%", "padding": "16px 29px"}}/> 
                            </div> */}

                
                <div id="otp"
                        class="inputs d-flex flex-row justify-content-center mt-2"
                      >
                         <input
                          class="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />
                         <input
                          class="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />
                         <input
                          class="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />
                         <input
                          class="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />
                         <input
                          class="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />
                         <input
                          class="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />

                            </div>

                <p
                  className={cx("not_account")}
                  style={{ "margin-bottom": "20px" }}
                >
                  Chưa nhận được mã Otp?{" "}
                  <button className={cx("register")}>Gửi lại ngay</button>
                </p>

                <button className={cx("login_button")}>Xác nhận</button>
              </form>
            </div>

            <p className={cx("not_account")}>
              Bạn đã có tài khoản?{" "}
              <button className={cx("register")} onClick={onLogin}>
                Đăng nhập ngay
              </button>
            </p>

            <button className={cx("button_off")} onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16748 4.16663L15.8334 15.8325"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.16676 15.8325L15.8326 4.16663"
                  stroke="#334155"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
