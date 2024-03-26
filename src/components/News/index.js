import React from "react";
import styles from "./News.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const News = () => {
    return (
        <div class={cx("container")}>
            <div className={cx("news")}>
        
                <div className={cx("news-content")}>
                    <div className="row">
                        <div className={cx("col-sm-4")}>
                        <Link to="/">
                            <div className={cx("news-item")}>
                                <img src="./images/Rectangle 47.png" alt="" style={{"max-width": "100%"}}/>
                            </div>
                            <p>27.12.2023 . Trẻ con</p>
                            <h3>Các mẫu bàn học gấp gọn thông minh đẹp trên thị trường</h3>
                            <p>
                            Bàn học gấp gọn thông minh là sản phẩm có thiết kế độc đáo, tiện lợi và an toàn cho bé, giúp tiết kiệm không gian và tăng hiệu quả học tập.
                            </p>
                        </Link>
                        </div>  
                        <div className={cx("col-sm-4")}>
                        <Link to="/">

                            <div className={cx("news-item")}>
                                <img src="./images/Rectangle 47.png" alt="" style={{"max-width": "100%"}}/>
                            </div>
                            <p>27.12.2023 . Trẻ con</p>

                            <h3>Các mẫu bàn học gấp gọn thông minh đẹp trên thị trường</h3>
                            <p>
                            Bàn học gấp gọn thông minh là sản phẩm có thiết kế độc đáo, tiện lợi và an toàn cho bé, giúp tiết kiệm không gian và tăng hiệu quả học tập.
                            </p>
                           
                            </Link>
                        </div> 
                        <div className={cx("col-sm-4")}>
                        <Link to="/">

                            <div className={cx("news-item")}>
                                <img src="./images/Rectangle 47.png" alt="" style={{"max-width": "100%"}}/>
                            </div>
                            <p>27.12.2023 . Trẻ con</p>
                        
                            <h3>Các mẫu bàn học gấp gọn thông minh đẹp trên thị trường</h3>
                            <p>
                            Bàn học gấp gọn thông minh là sản phẩm có thiết kế độc đáo, tiện lợi và an toàn cho bé, giúp tiết kiệm không gian và tăng hiệu quả học tập.
                            </p>
                           
                            </Link>

                        </div> 
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default News