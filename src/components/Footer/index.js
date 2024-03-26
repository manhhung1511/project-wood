import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <div className={cx("footer")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="192" height="48" viewBox="0 0 192 48" fill="none">
  <g clip-path="url(#clip0_1016_2834)">
    <path d="M0 40.0051L9.2176 40.6207V27.0805L14.1328 26.4665V40.6207L22.7264 41.2363V0L14.1328 1.84683V15.9898L9.2176 16.6183V3.69687L0 6.15611V40.0051Z" fill="white"/>
    <path d="M25.1855 20.9278L37.4719 22.773V41.8521L45.4575 41.2333V24.6183L54.6719 25.8495V17.8481L25.1855 11.6904V20.9278Z" fill="white"/>
    <path d="M25.1855 21.542L36.2463 27.6981V48.0004L25.1855 43.0868V21.542Z" fill="#858585"/>
    <path d="M33.4972 38.7417C34.0027 38.7417 34.4124 38.1905 34.4124 37.5105C34.4124 36.8305 34.0027 36.2793 33.4972 36.2793C32.9918 36.2793 32.582 36.8305 32.582 37.5105C32.582 38.1905 32.9918 38.7417 33.4972 38.7417Z" fill="white"/>
    <path d="M80.7999 35.6514H76.7711V25.3126H66.3711V35.6514H62.3311V12.3447H66.3727V22.0438H76.7727V12.3447H80.7999V35.6514Z" fill="white"/>
    <path d="M101.92 15.6152H94.6591V35.6546H90.6511V15.6152H83.4639V12.3447H101.92V15.6152Z" fill="white"/>
    <path d="M117.172 29.9164L117.899 33.5812L118.789 30.08L123.909 12.6841H125.704L130.752 30.08L131.626 33.6069L132.402 29.91L136.658 12.6777H138.696L132.655 36.2874H130.746L125.407 17.8239L124.808 15.4897L124.226 17.8239L118.757 36.2874H116.848L110.829 12.6841H112.868L117.172 29.9164Z" fill="white"/>
    <path d="M140.502 27.2533C140.477 25.6803 140.812 24.1223 141.48 22.6987C142.079 21.3987 143.044 20.3017 144.255 19.5416C145.466 18.7815 146.872 18.3912 148.301 18.4183C149.367 18.3817 150.429 18.583 151.408 19.0078C152.387 19.4325 153.26 20.0701 153.963 20.8743C155.474 22.6955 156.247 25.0181 156.131 27.3831V27.7887C156.156 29.3697 155.821 30.9355 155.152 32.3673C154.557 33.6596 153.598 34.7499 152.394 35.5047C151.171 36.25 149.763 36.6324 148.333 36.6077C147.268 36.6431 146.208 36.4412 145.23 36.0165C144.252 35.5917 143.381 34.9548 142.678 34.1516C141.164 32.3324 140.387 30.0091 140.502 27.6428V27.2533ZM142.443 27.7887C142.367 29.6469 142.942 31.4733 144.069 32.9509C144.585 33.5819 145.234 34.0904 145.97 34.4395C146.706 34.7886 147.51 34.9697 148.324 34.9697C149.138 34.9697 149.942 34.7886 150.678 34.4395C151.414 34.0904 152.063 33.5819 152.579 32.9509C153.724 31.4202 154.299 29.5372 154.206 27.6268V27.2533C154.221 25.9878 153.967 24.7336 153.461 23.574C153.024 22.5332 152.303 21.6369 151.381 20.9882C150.474 20.3738 149.401 20.0537 148.307 20.0712C147.493 20.0537 146.686 20.2288 145.952 20.5822C145.219 20.9357 144.578 21.4576 144.083 22.1056C142.938 23.6368 142.36 25.5198 142.45 27.4312L142.443 27.7887Z" fill="white"/>
    <path d="M159.059 27.2533C159.035 25.6801 159.369 24.1222 160.038 22.6987C160.638 21.399 161.601 20.3022 162.812 19.5421C164.023 18.782 165.429 18.3915 166.857 18.4183C167.924 18.3817 168.985 18.583 169.965 19.0078C170.944 19.4325 171.817 20.0701 172.52 20.8743C174.03 22.6955 174.804 25.0181 174.688 27.3831V27.7887C174.713 29.3697 174.378 30.9355 173.709 32.3673C173.114 33.66 172.155 34.7504 170.95 35.5047C169.728 36.2502 168.32 36.6327 166.889 36.6077C165.824 36.6431 164.765 36.4412 163.787 36.0165C162.809 35.5917 161.937 34.9548 161.235 34.1516C159.721 32.3324 158.944 30.0091 159.059 27.6428V27.2533ZM161.001 27.7887C160.924 29.647 161.499 31.4737 162.627 32.9509C163.143 33.5819 163.792 34.0904 164.528 34.4395C165.264 34.7886 166.068 34.9697 166.882 34.9697C167.696 34.9697 168.5 34.7886 169.236 34.4395C169.972 34.0904 170.621 33.5819 171.137 32.9509C172.281 31.4197 172.856 29.5369 172.763 27.6268V27.2533C172.777 25.988 172.524 24.734 172.019 23.574C171.58 22.5322 170.856 21.6359 169.931 20.9882C169.025 20.3738 167.952 20.0537 166.857 20.0712C166.044 20.0535 165.237 20.2286 164.503 20.5821C163.77 20.9356 163.13 21.4575 162.635 22.1056C161.49 23.6368 160.912 25.5198 161.001 27.4312V27.7887Z" fill="white"/>
    <path d="M177.909 27.3566C177.787 25.0439 178.426 22.7551 179.728 20.8414C180.291 20.0626 181.036 19.4342 181.897 19.0115C182.759 18.5889 183.711 18.3849 184.67 18.4174C185.738 18.3687 186.799 18.6022 187.747 19.0943C188.696 19.5865 189.499 20.32 190.075 21.2214V11.3828H192V36.2878H190.187L190.107 33.9536C189.497 34.8263 188.674 35.5285 187.717 35.9939C186.76 36.4593 185.7 36.6725 184.638 36.6132C183.688 36.6353 182.747 36.4245 181.897 35.9993C181.047 35.574 180.313 34.9472 179.76 34.1732C178.434 32.2411 177.783 29.924 177.909 27.5827V27.3566ZM179.866 27.6965C179.765 29.5558 180.233 31.4015 181.208 32.9869C181.621 33.6077 182.186 34.1119 182.849 34.451C183.512 34.7901 184.251 34.9528 184.995 34.9235C186.063 34.9828 187.124 34.7112 188.033 34.1456C188.942 33.58 189.655 32.7478 190.075 31.7621V23.5299C189.703 22.4979 189.014 21.6109 188.107 20.9964C187.2 20.3818 186.122 20.0716 185.027 20.1104C184.283 20.082 183.543 20.2436 182.878 20.5801C182.212 20.9166 181.643 21.4169 181.224 22.0342C180.208 23.7396 179.734 25.7146 179.866 27.6965Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1016_2834">
      <rect width="192" height="48" fill="white"/>
    </clipPath>
  </defs>
</svg></h4>
                            <p>Showroom: 96 Định Công - Hoàng Mai - Hà Nội</p>
                            <p>0123456777</p>
                            <p>cskh@htwood.com</p>
                          
                        </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>Điều khoản và dịch vụ</h4>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách giao hàng</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Chính sách bảo mật</p>
                        </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>Hỗ trợ</h4>
                            <p>Giải đáp thắc mắc</p>
                            <p>Hoàn trả sản phẩm</p>
                            <p>Vận chuyển</p>
                            <p>Hướng dẫn mua hàng</p>
                        </div>
                    </div>
                    <div className={cx("col-sm-3")}>
                        <div className={cx("footer-content")}>
                            <h4>Mạng xã hội</h4>
                            <Link to="/">
                                <img src="./images/Button (1).png" style={{"margin-right": "20px"}}/>
                            </Link>
                            <Link to="/">
                                <img src="./images/Button (2).png" style={{"margin-right": "20px"}}/>
                            </Link>
                            <Link to="/">
                            <img src="./images/Button (3).png"/>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx("footer-bottom")}>
                    <p>Công ty TNHH HTWoods © Bản quyền 2024, Inc. Bảo lưu mọi quyền</p>
                </div>
            </div>
        </div>
    );
}
        
export default Footer;