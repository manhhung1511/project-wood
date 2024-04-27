import React from "react";
import styles from "./Newss.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const DetailNew = () => {
  return (
    <div class={cx("newss")}>
      <div className={cx("container")}>
        <div className={cx("breadcrumb")}>
          <span>Tin tức</span>
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
          <span>
            Đồ Nội Thất Gỗ 2023: Top 10 Xu Hướng Hot Đang Làm Mưa Làm Gió!
          </span>
        </div>
      </div>

      <div class={cx("container")}>
        <div className={cx("news")}>
          <div className={cx("news-content")}>
            <div className="row">
              <div className={cx("col-sm-12")}>
                <h5 className={cx("news-content-top")}>
                  Đồ Nội Thất Gỗ 2023: Những Xu Hướng Hot Đang Làm Mưa Làm Gió!
                </h5>

                <div className={cx("author")}>
                  <img src="./images/Ellipse 29.png" />
                  <div className={cx("author_item")}>
                    <h5>Dương Ngọc Điệp</h5>
                    <p>15:09 21/1/2024</p>
                  </div>
                </div>

                <div className={cx("content-new")}>
                  <p className={cx("content-new_item")}>
                    Bước sang năm 2023, thế giới đồ nội thất gỗ đang chứng kiến
                    một biến động đầy mạnh mẽ và sáng tạo. Trên đỉnh cao của sự
                    đổi mới, chúng ta sẽ cùng nhau khám phá những xu hướng đáng
                    chú ý nhất, từ những đường nét thiết kế tân tiến đến sự hòa
                    quyện của gỗ tự nhiên và công nghệ hiện đại. Đồng hành cùng
                    chúng tôi trong chuyến hành trình này, bạn sẽ không chỉ đắm
                    chìm trong vẻ đẹp của các mẫu đồ nội thất gỗ độc đáo mà còn
                    có cơ hội cập nhật những ý tưởng mới nhất để tạo nên không
                    gian sống ấn tượng và đầy cá tính. Hãy để chúng tôi là nguồn
                    cảm hứng cho hành trình trang trí nội thất của bạn trong năm
                    nay!
                  </p>

                  <h4>Phong cách nội thất “hoài cổ”</h4>

                  <p className={cx("content-new_item")}>
                    Một xu hướng khác đó là sử dụng những phong cách chẳng hạn
                    như Retro hay Vintage vào thiết kế nội thất. Những phong
                    cách này tạo nên không gian sống hoài cổ, mang đến “điểm
                    nhấn” thú vị cho cuộc sống hiện đại. Cách hiệu quả nhất để
                    mang vẻ đẹp xưa cũ vào không gian sống đó là sử dụng những
                    món đồ nội thất có kiểu dáng sang trọng. Nếu muốn tạo nên
                    một thiết kế thú vị thì bạn có thể lựa chọn những món nội
                    thất có màu sắc nổi bật. Chúng mang trong mình nét thẩm mỹ
                    mang đậm tính “hoài niệm” nhưng vẫn “hợp thời”.
                  </p>

                  <div style={{ padding: "10px 0 20px 0" }}>
                    <img
                      style={{ maxWidth: "100%" }}
                      src="./images/image 51.png"
                    />
                  </div>

                  <h4>Gạch kính ngày càng được ưa chuộng</h4>

                  <p className={cx("content-new_item")}>
                    Sử dụng gạch kính là một trong những xu hướng thiết kế nội
                    thất 2023 nổi bật nhất. Chúng là vật liệu được phát minh vào
                    những năm 80 của thế kỷ trước, được ưa chuộng trong thời
                    gian gần đây và xuất hiện ngày càng nhiều trong những công
                    trình hiện đại. Gạch kính được lựa chọn nhiều là do đặc tính
                    của chúng. Với khả năng xuyên sáng tốt, gạch kính “mở ra”
                    không gian nội thất sáng sủa và thông thoáng hơn. Ngoài ra,
                    những dòng gạch kính mới còn có khả năng cách âm, chống
                    nhiệt, chống cháy mang đến một công trình an toàn và tiện
                    nghi.
                  </p>

                  <div style={{ padding: "10px 0 20px 0" }}>
                    <img
                      style={{ maxWidth: "100%" }}
                      src="./images/image 52.png"
                    />
                  </div>

                  <h4>Sử dụng nội thất thân thiện môi trường</h4>
                  <p className={cx("content-new_item")}>
                    Năm 2023 được dự đoán là thời điểm lên ngôi của phong cách
                    nội thất Organic. Xu hướng này được thể hiện qua sự tối giản
                    trong cách bài trí nhà ở trong thời gian gần đây. Đồng thời,
                    các sản phẩm nội thất được làm bằng gỗ tái chế cũng được các
                    chủ đầu tư lựa chọn nhiều hơn.
                  </p>
                </div>

                <div className={cx("news-content")}>
                  <div
                    className={cx("news-content-titlee")}
                    style={{ marginTop: "20px" }}
                  >
                    BÀI VIẾT
                  </div>
                  <div className="row">
                    <div className={cx("col-sm-4")}>
                      <Link to="/detail-new">
                        <div className={cx("news-full")}>
                        <img style={{"max-width": "100%", "borderRadius": "10px"}} src="./images/Rectangle 66.png" alt="image"/>
                         
                          <p className={cx("news-full-time")}>20.04.2021 | 14:45</p>
                          <h3>
                            Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập
                            Nhật Tổng Quan!
                          </h3>
                        </div>
                      </Link>
                    </div>
                    <div className={cx("col-sm-4")}>
                      <div className={cx("news-full")}>
                      <img style={{"max-width": "100%", "borderRadius": "10px"}} src="./images/Rectangle 65.png" alt="image"/>
                       
                        <p className={cx("news-full-time")}>20.04.2021 | 14:45</p>
                        <Link to="/">
                          <h3>
                            Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập
                            Nhật Tổng Quan!
                          </h3>
                        </Link>
                      </div>
                    </div>{" "}
                    <div className={cx("col-sm-4")}>
                      <div className={cx("news-full")}>
                      <img style={{"max-width": "100%", "borderRadius": "10px"}} src="./images/Rectangle 63.png" alt="image"/>
                    
                      
                        <p className={cx("news-full-time")}>20.04.2021 | 14:45</p>
                        <Link to="/">
                          <h3>
                            Khám Phá Đồ Nội Thất Gỗ Mới: Tin Tức, Tư Vấn và Cập
                            Nhật Tổng Quan!
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailNew;
