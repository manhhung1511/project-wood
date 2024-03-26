import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import LineChart from "../LineChart.js";
import orders from "../../../data/order.json";

const cx = classNames.bind(styles);

const Dashboard = () => {
  
  return (
    <div className={cx("dashboard")}>
      <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_sum")}>
              <p className={cx("dashboard_sum-title")}>
                Sản phẩm
              </p>
              <p className={cx("dashboard_sum-price")}>
              1109
              </p>
          </div>
        </div>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_order")}>
              <p className={cx("dashboard_order-title")}>
                Tổng đơn hàng
              </p>
              <p className={cx("dashboard_order-number")}>
                  550.012
              </p>
          </div>
        </div>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_order")}>
              <p className={cx("dashboard_order-title")}>
                Lượt xem
              </p>
              <p className={cx("dashboard_order-number")}>
              2024
              </p>
          </div>
        </div>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_order")}>
              <p className={cx("dashboard_order-title")}>
                Người dùng
              </p>
              <p className={cx("dashboard_order-number")}>
                  423
              </p>
          </div>
        </div>
      </div>
      <div className={cx("history_main")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-12")}>
            <LineChart />
        </div>
      </div>

    </div>
    <div className={cx("order_title")} >
                <h3>Đơn hàng mới nhất</h3>
            </div>
    <table className={cx("styled-table")}>
  
            <thead>
                <tr>
                <th>STT</th>
                <th>ID Đơn hàng</th>
                <th>Tên khách hàng</th>
                <th>Trạng thái</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Ngày</th>
                <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((item, index) => (
                        <tr>
                        <td>{index + 1 }.</td>
                        <td>{item.id}</td>
                        <td>
                                {item.name}
                        </td>
                        <td>{item.status}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.date}</td>
                        <td>
                            <span style={{"margin-right": "10px", "color": "#0693E3"}}>
                                Sửa
                            </span>
                            <span style={{"color": "#CF2E2E"}}>
                                Xoá
                            </span>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
  
      </div>
     
    </div>
  );
};

export default Dashboard;
