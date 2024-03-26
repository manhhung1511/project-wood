import React, { useState } from "react";
import styles from "./ChangePassword.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ChangePassword = () => {
    return (
        <div className={cx("password")}>
            <div className={cx("container")}>
                  <h3>Thay đổi mật khẩu</h3>
              
                  <div className={cx("password_current")}>
                        <p>Mật khẩu hiện tại</p>
                        <input placeholder="Họ và tên" type="text" />
                  </div>
                  <div className={cx("password_new")}>
                        <p>Mật khẩu mới</p>
                        <input placeholder="Email" type="text"/>
                  </div>
                  <div className={cx("password_repeat")}>
                        <p>Nhập lại mật khẩu</p>
                        <input placeholder="Mật khẩu" type="password"/>
                  </div>
                  <div className={cx("password_edit")}>
                        <button type="button">Hủy bỏ</button>
                        <button type="button">Lưu lại</button>
                  </div>
            </div>
        </div>
    );
}

export default ChangePassword;
