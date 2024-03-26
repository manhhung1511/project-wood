import React, { useState } from "react";
import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import orders from "../../../data/order.json";

const cx = classNames.bind(styles);
const Order = () => {
    const [inputSearch, setInputSearch] = useState("")

    function handleSearch(e) {
        setInputSearch(e.target.value)
    }

    return (
        <>
    <div className={cx("order")}>
    <div className={cx("container")}>
        <div className={cx("order_summary")}>
            <div className={cx("order_title")} >
                <h3>Đơn hàng</h3>
            </div>

            <div className={cx("order_search")} >
            <div className={cx("navbar_search")}>
                    <input
                    type="text"
                    placeholder="Tìm kiếm"
                    value={inputSearch}
                    onChange={handleSearch}
                />
                </div>
            </div>
        </div>

        {/* <div className={cx("order_status")}>
            <ul className={cx("order_status-list")}>
                <li className={cx("order_status-item")}>
                    <button className={cx("active")}>
                        Tất cả
                    </button>
                </li>
                <li className={cx("order_status-item")}>
                    <button>
                        Vận chuyển
                    </button>
                </li>
                <li className={cx("order_status-item")}>
                    <button>
                    Đã hoàn thành
                    </button>
                </li>
                <li className={cx("order_status-item")}>
                    <button>
                    Đã hủy
                    </button>
                </li>
            </ul>
        </div> */}

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
                            <Link to={`/admin/detail-order/${item.id}`} className={cx("order_name")}>
                                {item.name}
                            </Link>
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
        </>
    );
}

export default Order;