import React from "react";
import styles from "./Branch.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const Branch = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("branch")}>
                <div className={cx("branch_title")}>
                    <h3>ĐỐI TÁC</h3>
                </div>
                <div className={cx("branch_content")}>
                    <div className={cx("branch_content-item")}>
                        <img src="./images/image 7.png"  alt=""/>
                    </div>
                    <div className={cx("branch_content-item")}>
                        <img src="./images/image 18.png"  alt=""/>
                    </div>
                    <div className={cx("branch_content-item")}>
                        <img src="./images/image 19.png"  alt=""/>
                    </div>
                    <div className={cx("branch_content-item")}>
                        <img src="./images/image 20.png"  alt=""/>
                    </div>
                    <div className={cx("branch_content-item")}>
                        <img src="./images/image 21.png"  alt=""/>
                    </div>
                </div>
        </div>
    </div>
    );
   
}

export default Branch;