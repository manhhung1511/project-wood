import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {

    const [activeCategory, setActiveCategory] = useState(null);
    let location = useLocation();

    useEffect(() => {
        switch(location.pathname) {
            case '/admin/dashboard': 
                setActiveCategory(1);
                break;
            case '/admin/order': 
                setActiveCategory(2);
                break;
            case '/admin/product': 
                setActiveCategory(3);
                break;
            case '/admin/staff': 
                setActiveCategory(4);
                break;
            default:
                setActiveCategory(0);
        }
    }, [location.pathname])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //           setScrolled(true);
    //         } else {
    //           setScrolled(false);
    //         }
    //       };
      
    //       window.addEventListener('scroll', handleScroll);
      
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };
    //   }, []); // Empty dependency array ensures that the effect runs only once
    
 
    //   const style = {
    //     overflow: scrolled ? 'hidden' : '',
    //     backgroundColor: scrolled ? '#FFF' : '',
    //     position: scrolled ? 'fixed' : '',
    //     top: scrolled ? '0' : '',
    //     width: scrolled ? '100%' : '',
    //     zIndex:scrolled ? '999' : '',
    //     boxShadow: scrolled ? '0px 6px 24px 0px rgba(86, 86, 86, 0.15)' : ''
    //   };

    return (
        <div className={cx("header-all")}>
            {/* <div className={cx("navbar-full")}>
                <div className={cx("container")}>
                    <div className={cx("navbar")}>
                        <ul className={cx("navbar_left")}>
                            <li className={cx("navbar_left_item")}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M2.5 6.66666L9.0755 11.0503C9.63533 11.4235 10.3647 11.4235 10.9245 11.0503L17.5 6.66666M4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83332C17.5 4.91285 16.7538 4.16666 15.8333 4.16666H4.16667C3.24619 4.16666 2.5 4.91285 2.5 5.83332V14.1667C2.5 15.0871 3.24619 15.8333 4.16667 15.8333Z"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>contact@insidemen.com</p>
                            </li>
                            <li className={cx("navbar_left_item")}>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H6.89937C7.25806 2.5 7.57651 2.72953 7.68994 3.06981L8.93811 6.81434C9.06926 7.20777 8.89115 7.63776 8.52022 7.82322L6.63917 8.76375C7.55771 10.801 9.19898 12.4423 11.2363 13.3608L12.1768 11.4798C12.3622 11.1088 12.7922 10.9307 13.1857 11.0619L16.9302 12.3101C17.2705 12.4235 17.5 12.7419 17.5 13.1006V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H15C8.09644 17.5 2.5 11.9036 2.5 5V4.16667Z"
                                                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <p>
                                    1800.808.88
                                </p>
                            </li>
                        </ul>
                        <ul className={cx("navbar_right")}>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M15.6435 12.8517L16.0581 10.1485H13.4645V8.39425C13.4645 7.65471 13.8268 6.93385 14.9885 6.93385H16.1677V4.63248C16.1677 4.63248 15.0975 4.44983 14.0744 4.44983C11.9383 4.44983 10.5421 5.74445 10.5421 8.08819V10.1485H8.16769V12.8517H10.5421V19.3865C11.0182 19.4612 11.5062 19.5001 12.0033 19.5001C12.5004 19.5001 12.9884 19.4612 13.4645 19.3865V12.8517H15.6435Z"
                                                fill="#F9FAFB" />
                                </svg>
                            </li>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12"
                                            fill="none">
                                            <g clipPath="url(#clip0_442_2823)">
                                                <path
                                                    d="M12.697 2.90101C12.7054 3.02375 12.7054 3.14649 12.7054 3.27036C12.7054 7.04468 9.83768 11.3976 4.59389 11.3976V11.3954C3.04486 11.3976 1.528 10.953 0.223969 10.1148C0.44921 10.142 0.675581 10.1555 0.902517 10.1561C2.18623 10.1572 3.43324 9.72567 4.44316 8.93099C3.22324 8.9078 2.15348 8.11085 1.77977 6.94739C2.20711 7.02997 2.64744 7.013 3.06687 6.89818C1.73687 6.62895 0.780017 5.45814 0.780017 4.09841C0.780017 4.08597 0.780017 4.07409 0.780017 4.06221C1.17631 4.28336 1.62002 4.4061 2.07389 4.41968C0.821227 3.58088 0.435098 1.91119 1.19155 0.605762C2.63897 2.39026 4.77453 3.47511 7.06703 3.58993C6.83728 2.59784 7.15115 1.55825 7.89179 0.860853C9.04002 -0.220595 10.8459 -0.165165 11.9253 0.984722C12.5637 0.85859 13.1757 0.623862 13.7357 0.291283C13.5228 0.952482 13.0774 1.51413 12.4824 1.87103C13.0475 1.80429 13.5996 1.65271 14.1195 1.42137C13.7368 1.99603 13.2547 2.4966 12.697 2.90101Z"
                                                    fill="#F9FAFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_442_2823">
                                                    <rect width="14" height="11.5385" fill="white"
                                                        transform="translate(0.167938)" />
                                                </clipPath>
                                            </defs>
                                </svg>
                            </li>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14"
                                            fill="none">
                                            <g clipPath="url(#clip0_442_2827)">
                                                <path
                                                    d="M7.16743 0.000366211C3.30166 0.000366211 0.167572 3.13446 0.167572 7.00022C0.167572 9.96724 2.01116 12.5022 4.61522 13.5219C4.55184 12.9688 4.49999 12.1162 4.63826 11.5112C4.76501 10.9639 5.45635 8.03148 5.45635 8.03148C5.45635 8.03148 5.24895 7.61091 5.24895 6.99446C5.24895 6.02082 5.81355 5.29491 6.51641 5.29491C7.11558 5.29491 7.40364 5.74428 7.40364 6.28007C7.40364 6.87924 7.0234 7.77799 6.82176 8.61336C6.65468 9.31046 7.17319 9.88082 7.85877 9.88082C9.10319 9.88082 10.0596 8.56727 10.0596 6.6776C10.0596 5.00109 8.85546 3.83156 7.13286 3.83156C5.13949 3.83156 3.96996 5.32371 3.96996 6.86772C3.96996 7.46688 4.20041 8.11213 4.48847 8.46357C4.54608 8.5327 4.55184 8.59608 4.53456 8.66521C4.48271 8.88414 4.36172 9.36231 4.33868 9.46025C4.30987 9.587 4.23498 9.61581 4.10247 9.55243C3.22677 9.14339 2.67945 7.87016 2.67945 6.83891C2.67945 4.63237 4.28107 2.60443 7.3057 2.60443C9.73116 2.60443 11.6208 4.33279 11.6208 6.64879C11.6208 9.06273 10.0999 11.0043 7.99128 11.0043C7.28265 11.0043 6.61435 10.6355 6.38967 10.1977C6.38967 10.1977 6.03823 11.5343 5.95182 11.8627C5.79626 12.4734 5.36994 13.2338 5.08187 13.7005C5.73865 13.9021 6.43 14.0116 7.15591 14.0116C11.0217 14.0116 14.1558 10.8775 14.1558 7.01175C14.1673 3.13446 11.0332 0.000366211 7.16743 0.000366211Z"
                                                    fill="#F9FAFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_442_2827">
                                                    <rect width="13.9997" height="13.9997" fill="white"
                                                        transform="translate(0.167572 0.000366211)" />
                                                </clipPath>
                                            </defs>
                                    </svg>
                            </li>
                            <li className={cx("navbar_right-item")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M16.5772 8.26396C16.5772 7.79868 16.2001 7.423 15.7366 7.423C15.273 7.423 14.8956 7.79868 14.8956 8.26396C14.8956 8.72752 15.273 9.10321 15.7366 9.10321C16.2001 9.10321 16.5772 8.72752 16.5772 8.26396Z"
                                                fill="#F9FAFB" />
                                            <path
                                                d="M17.6975 14.8284C17.6663 15.5109 17.5522 15.8818 17.4574 16.1281C17.3301 16.4547 17.1782 16.6882 16.9319 16.9331C16.6884 17.178 16.4549 17.3295 16.1283 17.4554C15.882 17.5516 15.5097 17.6661 14.8272 17.6986C14.0893 17.7312 13.8707 17.7381 11.9995 17.7381C10.1301 17.7381 9.90973 17.7312 9.17184 17.6986C8.48933 17.6661 8.11883 17.5516 7.87251 17.4554C7.54422 17.3295 7.31245 17.178 7.06753 16.9331C6.82087 16.6882 6.66901 16.4547 6.54344 16.1281C6.44863 15.8818 6.33276 15.5109 6.30334 14.8284C6.26738 14.0905 6.26079 13.8684 6.26079 12.0011C6.26079 10.1299 6.26738 9.90952 6.30334 9.17164C6.33276 8.48912 6.44863 8.11863 6.54344 7.87023C6.66901 7.54402 6.82087 7.31188 7.06753 7.06696C7.31245 6.8224 7.54422 6.67052 7.87251 6.54323C8.11883 6.44671 8.48933 6.33393 9.17184 6.30142C9.90973 6.26889 10.1301 6.26058 11.9995 6.26058C13.8707 6.26058 14.0893 6.26889 14.8272 6.30142C15.5097 6.33393 15.882 6.44671 16.1283 6.54323C16.4549 6.67052 16.6884 6.8224 16.9319 7.06696C17.1782 7.31188 17.3301 7.54402 17.4574 7.87023C17.5522 8.11863 17.6663 8.48912 17.6975 9.17164C17.7317 9.90952 17.74 10.1299 17.74 12.0011C17.74 13.8684 17.7317 14.0905 17.6975 14.8284ZM18.9577 9.11422C18.9235 8.36837 18.8058 7.85881 18.6311 7.41499C18.4533 6.95454 18.215 6.56432 17.8248 6.17411C17.4363 5.78563 17.0461 5.54727 16.5856 5.36739C16.1401 5.19442 15.6322 5.0754 14.886 5.04289C14.1398 5.00691 13.9015 5.00034 11.9995 5.00034C10.0993 5.00034 9.85924 5.00691 9.11305 5.04289C8.36858 5.0754 7.86109 5.19442 7.41346 5.36739C6.95475 5.54727 6.56453 5.78563 6.17605 6.17411C5.78583 6.56432 5.54748 6.95454 5.36793 7.41499C5.19496 7.85881 5.07735 8.36837 5.04136 9.11422C5.00885 9.86041 5.00055 10.0991 5.00055 12.0011C5.00055 13.9013 5.00885 14.1396 5.04136 14.8858C5.07735 15.6303 5.19496 16.1395 5.36793 16.5854C5.54748 17.0441 5.78583 17.4361 6.17605 17.8246C6.56453 18.213 6.95475 18.4531 7.41346 18.6327C7.86109 18.8056 8.36858 18.9233 9.11305 18.9575C9.85924 18.9918 10.0993 19.0001 11.9995 19.0001C13.9015 19.0001 14.1398 18.9918 14.886 18.9575C15.6322 18.9233 16.1401 18.8056 16.5856 18.6327C17.0461 18.4531 17.4363 18.213 17.8248 17.8246C18.215 17.4361 18.4533 17.0441 18.6311 16.5854C18.8058 16.1395 18.9235 15.6303 18.9577 14.8858C18.992 14.1396 19.0003 13.9013 19.0003 12.0011C19.0003 10.0991 18.992 9.86041 18.9577 9.11422Z"
                                                fill="#F9FAFB" />
                                            <path
                                                d="M11.9993 14.3324C10.7113 14.3324 9.66627 13.289 9.66627 12.0011C9.66627 10.7111 10.7113 9.66639 11.9993 9.66639C13.2876 9.66639 14.334 10.7111 14.334 12.0011C14.334 13.289 13.2876 14.3324 11.9993 14.3324ZM11.9993 8.40441C10.0139 8.40441 8.40604 10.0158 8.40604 12.0011C8.40604 13.9847 10.0139 15.5944 11.9993 15.5944C13.9846 15.5944 15.5942 13.9847 15.5942 12.0011C15.5942 10.0158 13.9846 8.40441 11.9993 8.40441Z"
                                                fill="#F9FAFB" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
             </div> */}
             <div className={cx("header_main")}>
             {/* <div style={style}> */}
                <div className={cx("container")}>
                    <div className={cx("header")}>
                        <div className={cx("header_left")}>
                            <div className={cx("header_logo")}>
                                <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="48" viewBox="0 0 192 48" fill="none">
  <g clip-path="url(#clip0_995_660)">
    <path d="M0 40.0051L9.2176 40.6207V27.0805L14.1328 26.4665V40.6207L22.7264 41.2363V0L14.1328 1.84683V15.9898L9.2176 16.6183V3.69687L0 6.15611V40.0051Z" fill="#996935"/>
    <path d="M25.1855 20.9278L37.4719 22.773V41.8521L45.4575 41.2333V24.6183L54.6719 25.8495V17.8481L25.1855 11.6904V20.9278Z" fill="#996935"/>
    <path d="M25.1855 21.542L36.2463 27.6981V48.0004L25.1855 43.0868V21.542Z" fill="#C25406"/>
    <path d="M33.4972 38.7417C34.0027 38.7417 34.4124 38.1905 34.4124 37.5105C34.4124 36.8305 34.0027 36.2793 33.4972 36.2793C32.9918 36.2793 32.582 36.8305 32.582 37.5105C32.582 38.1905 32.9918 38.7417 33.4972 38.7417Z" fill="white"/>
    <path d="M80.7999 35.6514H76.7711V25.3126H66.3711V35.6514H62.3311V12.3447H66.3727V22.0438H76.7727V12.3447H80.7999V35.6514Z" fill="#996935"/>
    <path d="M101.92 15.6152H94.6591V35.6546H90.6511V15.6152H83.4639V12.3447H101.92V15.6152Z" fill="#996935"/>
    <path d="M117.172 29.9164L117.899 33.5812L118.789 30.08L123.909 12.6841H125.704L130.752 30.08L131.626 33.6069L132.402 29.91L136.658 12.6777H138.696L132.655 36.2874H130.746L125.407 17.8239L124.808 15.4897L124.226 17.8239L118.757 36.2874H116.848L110.829 12.6841H112.868L117.172 29.9164Z" fill="#996935"/>
    <path d="M140.502 27.2533C140.477 25.6803 140.812 24.1223 141.48 22.6987C142.079 21.3987 143.044 20.3017 144.255 19.5416C145.466 18.7815 146.872 18.3912 148.301 18.4183C149.367 18.3817 150.429 18.583 151.408 19.0078C152.387 19.4325 153.26 20.0701 153.963 20.8743C155.474 22.6955 156.247 25.0181 156.131 27.3831V27.7887C156.156 29.3697 155.821 30.9355 155.152 32.3673C154.557 33.6596 153.598 34.7499 152.394 35.5047C151.171 36.25 149.763 36.6324 148.333 36.6077C147.268 36.6431 146.208 36.4412 145.23 36.0165C144.252 35.5917 143.381 34.9548 142.678 34.1516C141.164 32.3324 140.387 30.0091 140.502 27.6428V27.2533ZM142.443 27.7887C142.367 29.6469 142.942 31.4733 144.069 32.9509C144.585 33.5819 145.234 34.0904 145.97 34.4395C146.706 34.7886 147.51 34.9697 148.324 34.9697C149.138 34.9697 149.942 34.7886 150.678 34.4395C151.414 34.0904 152.063 33.5819 152.579 32.9509C153.724 31.4202 154.299 29.5372 154.206 27.6268V27.2533C154.221 25.9878 153.967 24.7336 153.461 23.574C153.024 22.5332 152.303 21.6369 151.381 20.9882C150.474 20.3738 149.401 20.0537 148.307 20.0712C147.493 20.0537 146.686 20.2288 145.952 20.5822C145.219 20.9357 144.578 21.4576 144.083 22.1056C142.938 23.6368 142.36 25.5198 142.45 27.4312L142.443 27.7887Z" fill="#996935"/>
    <path d="M159.059 27.2533C159.035 25.6801 159.369 24.1222 160.038 22.6987C160.638 21.399 161.601 20.3022 162.812 19.5421C164.023 18.782 165.429 18.3915 166.857 18.4183C167.924 18.3817 168.985 18.583 169.965 19.0078C170.944 19.4325 171.817 20.0701 172.52 20.8743C174.03 22.6955 174.804 25.0181 174.688 27.3831V27.7887C174.713 29.3697 174.378 30.9355 173.709 32.3673C173.114 33.66 172.155 34.7504 170.95 35.5047C169.728 36.2502 168.32 36.6327 166.889 36.6077C165.824 36.6431 164.765 36.4412 163.787 36.0165C162.809 35.5917 161.937 34.9548 161.235 34.1516C159.721 32.3324 158.944 30.0091 159.059 27.6428V27.2533ZM161.001 27.7887C160.924 29.647 161.499 31.4737 162.627 32.9509C163.143 33.5819 163.792 34.0904 164.528 34.4395C165.264 34.7886 166.068 34.9697 166.882 34.9697C167.696 34.9697 168.5 34.7886 169.236 34.4395C169.972 34.0904 170.621 33.5819 171.137 32.9509C172.281 31.4197 172.856 29.5369 172.763 27.6268V27.2533C172.777 25.988 172.524 24.734 172.019 23.574C171.58 22.5322 170.856 21.6359 169.931 20.9882C169.025 20.3738 167.952 20.0537 166.857 20.0712C166.044 20.0535 165.237 20.2286 164.503 20.5821C163.77 20.9356 163.13 21.4575 162.635 22.1056C161.49 23.6368 160.912 25.5198 161.001 27.4312V27.7887Z" fill="#996935"/>
    <path d="M177.909 27.3566C177.787 25.0439 178.426 22.7551 179.728 20.8414C180.291 20.0626 181.036 19.4342 181.897 19.0115C182.759 18.5889 183.711 18.3849 184.67 18.4174C185.738 18.3687 186.799 18.6022 187.747 19.0943C188.696 19.5865 189.499 20.32 190.075 21.2214V11.3828H192V36.2878H190.187L190.107 33.9536C189.497 34.8263 188.674 35.5285 187.717 35.9939C186.76 36.4593 185.7 36.6725 184.638 36.6132C183.688 36.6353 182.747 36.4245 181.897 35.9993C181.047 35.574 180.313 34.9472 179.76 34.1732C178.434 32.2411 177.783 29.924 177.909 27.5827V27.3566ZM179.866 27.6965C179.765 29.5558 180.233 31.4015 181.208 32.9869C181.621 33.6077 182.186 34.1119 182.849 34.451C183.512 34.7901 184.251 34.9528 184.995 34.9235C186.063 34.9828 187.124 34.7112 188.033 34.1456C188.942 33.58 189.655 32.7478 190.075 31.7621V23.5299C189.703 22.4979 189.014 21.6109 188.107 20.9964C187.2 20.3818 186.122 20.0716 185.027 20.1104C184.283 20.082 183.543 20.2436 182.878 20.5801C182.212 20.9166 181.643 21.4169 181.224 22.0342C180.208 23.7396 179.734 25.7146 179.866 27.6965Z" fill="#996935"/>
  </g>
  <defs>
    <clipPath id="clip0_995_660">
      <rect width="192" height="48" fill="white"/>
    </clipPath>
  </defs>
</svg>
                                </Link>
                            </div>
                          
                        </div>
                        <div>
                        <ul className={cx("header_menu")}>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/admin/dashboard"} className={cx("header_menu-link",{
                                        'active1': 1 === activeCategory,
                                        })}>
                                        Thống kê
                                    </Link>
                                </li>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/admin/order"} className={cx("header_menu-link", {
                                        'active1': 2 === activeCategory,
                                        })}>
                                        Đơn hàng
                                    </Link>
                                </li>
                                {/* <li className={cx("header_menu-list")}>
                                    <Link to={"/contact"} className={cx("header_menu-link",{
                                        'active1': 3 === activeCategory,
                                        })}>
                                        Liên hệ
                                    </Link>
                                </li> */}
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/admin/product"} className={cx("header_menu-link",{
                                        'active1': 4 === activeCategory,
                                        })}>
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li className={cx("header_menu-list")}>
                                    <Link to={"/admin/customer"} className={cx("header_menu-link", {
                                        'active1': 5 === activeCategory,
                                        })}>
                                        Khách hàng
                                    </Link>
                                </li> 

                                <li className={cx("header_menu-list")}>
                                    <Link to={"/admin/staff"} className={cx("header_menu-link", {
                                        'active1': 5 === activeCategory,
                                        })}>
                                        Nhân viên
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                        <div className={cx("header_right")}>
                            {/* <div className={cx("header_right-search")}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    value={inputSearch}
                                    onChange={handleSearch}
                                />

                            </div> */}
                            <ul className={cx("header_right-list")}>
                               
                               <li className={cx("header_right-item")}>
                               <Link to="/" style={{ textDecoration: 'none', color: '#081C66'}}>Tú Dương</Link>   

                               </li>
                                {/* <li className={cx("header_right-item")}>
                                {user ? (
                                        <Link to="/infor" style={{ textDecoration: 'none', color: '#081C66'}}>{user}</Link>   
                                        ) : (
                                        <button type="button" onClick={} style={{ "background": "none",
                                            "border": "none"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M10.9286 11.875H7.07143C3.16595 11.875 0 14.953 0 18.75C0 19.4403 0.575598 20 1.28571 20H16.7143C17.4244 20 18 19.4403 18 18.75C18 14.953 14.834 11.875 10.9286 11.875ZM1.96851 18.125C2.28596 15.6619 4.45339 13.75 7.07143 13.75H10.9286C13.5466 13.75 15.714 15.6619 16.0315 18.125H1.96851ZM9 10C11.8403 10 14.1429 7.76137 14.1429 5C14.1429 2.23855 11.8403 0 9 0C6.15966 0 3.85714 2.23855 3.85714 5C3.85714 7.76137 6.15966 10 9 10ZM9 1.875C10.7723 1.875 12.2143 3.27684 12.2143 5C12.2143 6.72309 10.7723 8.125 9 8.125C7.22768 8.125 5.78571 6.72309 5.78571 5C5.78571 3.27684 7.22768 1.875 9 1.875Z" fill="#2E2E2E"/>
</svg>
                                        </button>
                                    )}
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
             {/* </div> */}
             </div>
           


        </div>
    );
}

export default Header