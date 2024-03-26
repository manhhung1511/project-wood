import React from "react";
import styles from "./Introduce.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const Introduce = () => {
    return (
        <div class={cx("introduce")}>
            <div className={cx("container")}>
                <div className={cx("breadcrumb")}>
                <span>Trang chủ</span>
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
                <span>Giới thiệu</span>
                </div>
            </div>
            <div class={cx("introduce_content")}>
                <div class={cx("container")}>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class={cx("introduce_content-title")}>
                                <img style={{"width": "100%"}} src="https://i.postimg.cc/Z5LYCvjx/Rectangle-64.png" alt="image"/>
                                <div class={cx("introduce_content-content")}>
                                    VỀ CHÚNG TÔI
                                </div>
                            </div>
                           

                        </div>
                    </div>
               
                <div class={cx("introduce_content-desc")}>
                    <p style={{"marginBottom": "10px"}}>
                    Tại Thế Giới Nội Thất Gỗ, chúng tôi tự hào là địa chỉ đáng tin cậy cho những người đam mê và tôn trọng vẻ đẹp tự nhiên của gỗ. Với một tinh thần sáng tạo và sự tận tâm, chúng tôi mang đến cho bạn không gian sống và làm việc hoàn hảo bằng những sản phẩm nội thất gỗ chất lượng cao và độc đáo.
                    </p>
                    <p style={{"marginBottom": "10px"}}>
                    Với một sự kết hợp hoàn hảo giữa truyền thống và hiện đại, bộ sưu tập của chúng tôi bao gồm mọi thứ từ bàn ăn, ghế sofa, kệ sách, đến giường ngủ và tủ quần áo. Mỗi mẫu sản phẩm đều được chế tác tỉ mỉ từ những loại gỗ tự nhiên tốt nhất, mang lại không chỉ vẻ đẹp mà còn tính bền vững và sự thoải mái cho gia đình của bạn.
                    </p>
                   
                </div>

                <div class="row">
                  
                        <div class="col-sm-6"  style={{"marginBottom": "30px"}}>
                            <img style={{"width": "100%", "borderRadius":"10px"}} src="https://i.postimg.cc/7hCMLkkS/Rectangle-56.png" alt="image"/>
                        </div>
                        <div class="col-sm-6"  style={{"marginBottom": "30px"}}>
                            <img style={{"width": "100%", "borderRadius":"10px"}} src="https://i.postimg.cc/7hCMLkkS/Rectangle-56.png" alt="image"/>
                        </div>
               
                    <div class="col-sm-6"  style={{"marginBottom": "30px"}}>
                        <img style={{"width": "100%", "borderRadius":"10px"}} src="https://i.postimg.cc/7hCMLkkS/Rectangle-56.png" alt="image"/>
                    </div>
                    <div class="col-sm-6"  style={{"marginBottom": "30px"}}>
                        <img style={{"width": "100%", "borderRadius":"10px"}} src="https://i.postimg.cc/7hCMLkkS/Rectangle-56.png" alt="image"/>
                    </div>
                </div>

                <div class={cx("introduce_content-desc")}>
                    <p style={{"marginBottom": "10px"}}>
                    Chúng tôi hiểu rằng mỗi không gian sống là một biểu tượng của cá nhân hóa và phong cách riêng biệt. Với sự đa dạng về kiểu dáng, màu sắc và chất liệu, chúng tôi cam kết cung cấp cho bạn sự lựa chọn phong phú để biến ước mơ của bạn thành hiện thực.
                    </p>
                    <p style={{"marginBottom": "10px"}}>
                    Đội ngũ nhân viên chuyên nghiệp của chúng tôi luôn sẵn lòng hỗ trợ và tư vấn bạn trong quá trình chọn lựa sản phẩm phù hợp nhất với nhu cầu và không gian của bạn. Chúng tôi không chỉ đơn thuần là một cửa hàng nội thất, mà còn là người bạn đồng hành trong việc tạo nên không gian sống lý tưởng.
                    </p>
                   <p style={{"marginBottom": "10px"}}>
                   Hãy đến với Thế Giới Nội Thất Gỗ, nơi mà bạn có thể tìm thấy sự ấm áp, đẳng cấp và sự hoàn hảo cho không gian của mình. Chúng tôi sẽ mang đến cho bạn trải nghiệm mua sắm đáng nhớ và những sản phẩm nội thất gỗ tuyệt vời nhất.
                   </p>
                </div>
            </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Introduce