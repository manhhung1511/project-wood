import React, { useEffect, useState }  from "react";
import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from 'react-router-dom';
import Product from "../ProductNew";
import Footer from "../Footer";
import Cart from "./Cart";
import Overlay from "../Overlay";
import products from "../../data/product.json";
import Size from "./Size";

const cx = classNames.bind(styles);

const ProductDetail = () => {
        const [isCart, setCart] = useState(false);
        const [cart, setToCart] = useState([]);
        const [color, setColor] = useState('black');
        const [size, setSize] = useState('S');
        const [number, setNumber] = useState(1);
        const [isSize, setIsSize] = useState(false);

        const [label, setLabel ] = useState('');
        const handleCart = () => {
            setCart(true);
        }
        const handleCloseCart = () => {
            setCart(false);
        }

        const { itemId } = useParams();

        useEffect(() => {
            const storedLikedProducts = JSON.parse(localStorage.getItem('addProducts'));
            setToCart(storedLikedProducts);
        },[])

        const handleAddToCart = (product, color, size, number) => {
            if(cart && cart.length > 0) {
                const check = cart.some(obj => obj.id == product.id);
                if (!check) {
                    const updatedProducts = [...cart, {...product, "color": color, "size": size, "number1": number}];
                    setToCart(updatedProducts);
                    localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
                    window.dispatchEvent(new Event("storage"));
                } else {
                    const checkColor = cart.some(obj => obj.color == color && obj.id == product.id);
                    const checkSize = cart.some(obj => obj.size == size && obj.id == product.id);
                    if(!checkColor || !checkSize) {
                        const updatedProducts = [...cart, {...product, "color": color, "size": size, "number1": number}];
                        setToCart(updatedProducts);
                        localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
                        window.dispatchEvent(new Event("storage"));
                    }
                }
            } else {
                const updatedProducts = [{...product, "color": color, "size": size, "number1": number}];
                setToCart(updatedProducts)
                 // Update the localStorage with the new liked products
                localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
                window.dispatchEvent(new Event("storage"));
            }
            
        }

        const handleCartAndAddToCart = (item, color, size, number) => {
            handleAddToCart(item, color, size, number);
            handleCart();
        }
    
        const handleColor = (item) => {
            setColor(item);
        }
        const handleSize = (item) => {
            setSize(item);
        }

        const handleNumber = (item) => {
           if(item == "+") {
            setNumber(number + 1);
           } else if(number >= 2) {
            setNumber(number - 1);
           }
        }

        const handleOpenSize = () => {
            setIsSize(true);
        }
        const handleCloseSize = () => {
            setIsSize(false);
        }

        const addDot = (number) => {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          };
        
    return (
        <div className={cx("detail")}>
            <div className={cx("container")}>
                <div className={cx("breadcrumb")}>
                    <span>Home</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z" fill="#94A3B8"/>
                        </svg>
                    </span>
                    <span>Sản phẩm</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z" fill="#94A3B8"/>
                        </svg>
                    </span>
                    {
                        products.map((item, index) => {
                                if(item.id == itemId) {
                                    return (
                                        <span>
                                        {item.name}
                                        </span>
                                    )
                                }
                                    })

                    }
                   
                </div>
            </div>
            <div className={cx("detail_content")}>
                <div className={cx("container")}>
                    <div className={cx("row")}>
                    {
                        products.map((item, index) => {
                            if(item.id == itemId) {
                                return (
                                    <>

                            {/* <div className={cx("col-sm-1")}>
                            <div className={cx("detail_content-mockup")}>
                                <div>
                                     <img style={{width:"100px"}} src={item[color].image1} alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img style={{width:"100px"}} src={item[color].image2} alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                     <img style={{width:"100px"}} src={item[color].image3} alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img style={{width:"100px"}} src={item[color].image4} alt=""/>
                                </div>
                            </div>
                        </div> */}
                        <div className={cx("col-sm-6")}>
                            <div className={cx("detail_content-image")}>
                                 <img style={{width: "100%", height:"100%"}} src={item.img} alt=""/>
                            </div>
                            <div className={cx("detail_content-mockup")}>
                                <div className={cx("detail_content-mockup-item")}>
                                     <img style={{width:"100px"}} src="https://i.postimg.cc/jSR9QzwD/Rectangle-50.png" alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img style={{width:"100px"}} src="https://i.postimg.cc/jSR9QzwD/Rectangle-50.png" alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                     <img style={{width:"100px"}} src="https://i.postimg.cc/jSR9QzwD/Rectangle-50.png" alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img style={{width:"100px"}} src="https://i.postimg.cc/jSR9QzwD/Rectangle-50.png" alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img style={{width:"100px"}} src="https://i.postimg.cc/jSR9QzwD/Rectangle-50.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={cx("col-sm-6")}>
                            <div className={cx("detail_content-right")}>
                                <h3>{item.name }</h3> 
                                <p>
                                    Mã sản phẩm: 
                                    <span>{item.id}</span>
                                </p>
                                <div className={cx("detail_content-right-price")}>
                                    {addDot(item.price)}đ

                                    {
                                        item.price_sales.length > 1 && (
                                            <span> {item.price_sales}đ </span>
                                        )
                                    }
                                </div>
                                {/* <div className={cx("detail_content-right-attr")}>
                                    Màu sắc:
                                    <span>{item[color].vi}</span>
                                </div> */}
                                {/* <div className={cx("detail_content-right-color")}>
                                    <span>
                                    {
                                        item.black && (
                                        <button onClick={() => handleColor("black")} className={cx("detail_content-button",{
                                            'border': 'black' === color})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                                <rect x="3.69766" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#161414" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                            </svg>
                                        </button>
                                        )
                                    }
                                    </span>
                                    <span>
                                        {
                                            item.white && (
                                                <button onClick={() => handleColor("white")} className={cx("detail_content-button",{
                                                'border': 'white' === color})}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                    <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                                    <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#D3D3D3" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                                    </svg>
                                                </button>
                                            )
                                        }
                                      
                                    </span>
                                    <span>
                                    {
                                        item.blue && (
                                            <button onClick={() => handleColor("blue")} className={cx("detail_content-button",{
                                        'border': 'blue' === color})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                            <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#aaaa86" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                            </svg>
                                        </button>
                                        )
                                    }
                                    </span>
                                    <span>
                                    {
                                        item.red && (
                                            <button onClick={() => handleColor("red")} className={cx("detail_content-button",{
                                        'border': 'red' === color})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                            <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#6e3e28" stroke="#E0E0E0" strokeWidth="1.04083"/>
                                            </svg>
                                        </button>
                                        )
                                    }
                                        
                                    </span>
                                </div> */}
                                {/* <div className={cx("detail_content-right-size1")}>
                                    <span>Kích cỡ: <button className={cx("table-size")} onClick={handleOpenSize}>Xem bảng kích cỡ</button></span> 
                                </div> */}
                                {/* <div className={cx("detail_content-right-size")}>
                                    <button className={cx("detail_content-button",{
                                        'border': 'XS' === size})} onClick={() => handleSize('XS')} type="button">XS</button>
                                    <button className={cx("detail_content-button",{
                                        'border': 'S' === size})} onClick={() => handleSize('S')} type="button">S</button>
                                    <button className={cx("detail_content-button",{
                                        'border': 'M' === size})} onClick={() => handleSize('M')} type="button">M</button>
                                    <button className={cx("detail_content-button",{
                                        'border': 'L' === size})}onClick={() => handleSize('L')} type="button">L</button>
                                    <button className={cx("detail_content-button",{
                                        'border': 'XL' === size})} onClick={() => handleSize('XL')} >XL</button>
                                </div> */}
                                 <div className={cx("detail_content-right-size1")}>
                                    <p className={cx("text-detail")}>Kích thước(cm): </p>
                                    <button type="button" className={cx("button-size")}>
                                                <span>Tay 14  - 6 món</span>
                                            </button>

                                            <button type="button" className={cx("button-size-outsize")} style={{"margin-left":"10px"}}>
                                                <span>Tay 14  - 6 món</span>
                                            </button>
                                </div>
                                
                                <div className={cx("detail_content-right-size1")}>
                                    <p className={cx("text-detail")}>Chất liệu: </p>
                                    <button type="button" className={cx("button-size")}>
                                                <span>Gỗ đinh chun</span>
                                            </button>

                                            <button type="button" className={cx("button-size-outsize")} style={{"margin-left":"10px"}}>
                                                <span>Gỗ lim</span>
                                            </button>
                                </div>
                                <div className={cx("detail_content-right-size1")}>
                                    <p className={cx("text-detail")}>Màu sắc: </p>
                                    <button type="button" className={cx("button-size")}>
                                                <span>Nguyên bản màu gỗ</span>
                                            </button>
                                </div>
                                <div className={cx("detail_content-right-number")}>
                                <p className={cx("text-detail")}>Số lượng: </p>

                                    <div className={cx("detail_content-right-number-left")}>
                                        <button type="button" className={cx("detail_content-right-number-left-top1")} onClick={()=>handleNumber("-")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
  <path d="M16 1C16 1.55208 15.5865 2 15.0769 2H0.923077C0.413462 2 0 1.55208 0 1C0 0.447917 0.413462 0 0.923077 0H15.0769C15.5865 0 16 0.447917 16 1Z" fill="#2E2E2E"/>
</svg>
                                        </button>
                                        <button type="button" className={cx("detail_content-right-number1")}>
                                            {number}
                                        </button>
                                        <button type="button" className={cx("detail_content-right-number-left-top11")} onClick={()=>handleNumber("+")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M16 8C16 8.50962 15.5865 8.92308 15.0769 8.92308H8.92308V15.0769C8.92308 15.5865 8.50962 16 8 16C7.49038 16 7.07692 15.5865 7.07692 15.0769V8.92308H0.923077C0.413462 8.92308 0 8.50962 0 8C0 7.49038 0.413462 7.07692 0.923077 7.07692H7.07692V0.923077C7.07692 0.413462 7.49038 0 8 0C8.50962 0 8.92308 0.413462 8.92308 0.923077V7.07692H15.0769C15.5865 7.07692 16 7.49038 16 8Z" fill="#2E2E2E"/>
</svg>
                                        </button>
                                    </div>
                                    {/* <div className={cx("detail_content-right-number-right")}>
                                        <button type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M18 17.5L13 12.5M14.6667 8.33333C14.6667 11.555 12.055 14.1667 8.83333 14.1667C5.61167 14.1667 3 11.555 3 8.33333C3 5.11167 5.61167 2.5 8.83333 2.5C12.055 2.5 14.6667 5.11167 14.6667 8.33333Z" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8.8335 5.83325V8.33325M8.8335 8.33325V10.8333M8.8335 8.33325H11.3335M8.8335 8.33325H6.3335" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>
                                                Xem trước sản phẩm
                                            </span> 
                                        </button>
                                    </div> */}
                                </div>
                                    <div className={cx("detail_content-right-buy")}>
                                        <Link to="/cart/buy" state={{...item, number1: number,color: color}}>
                                            <button type="button" className={cx("detail_content-right-buy-now")}>
                                                <span>Mua ngay</span>
                                            </button>
                                        </Link>
                                        <button type="button" className={cx("detail_content-right-buy-cart")} onClick={() => handleCartAndAddToCart(item, color, size,number)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2.5 3.33325H3.00526C3.85578 3.33325 4.56986 3.97367 4.6621 4.81917L5.3379 11.014C5.43014 11.8595 6.14422 12.4999 6.99474 12.4999H14.205C14.9669 12.4999 15.6317 11.9833 15.82 11.2451L16.9699 6.73584C17.2387 5.68204 16.4425 4.65733 15.355 4.65733H5.5M5.52063 15.5207H6.14563M5.52063 16.1457H6.14563M14.6873 15.5207H15.3123M14.6873 16.1457H15.3123M6.66667 15.8333C6.66667 16.2935 6.29357 16.6666 5.83333 16.6666C5.3731 16.6666 5 16.2935 5 15.8333C5 15.373 5.3731 14.9999 5.83333 14.9999C6.29357 14.9999 6.66667 15.373 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2935 15.4602 16.6666 15 16.6666C14.5398 16.6666 14.1667 16.2935 14.1667 15.8333C14.1667 15.373 14.5398 14.9999 15 14.9999C15.4602 14.9999 15.8333 15.373 15.8333 15.8333Z" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                            <span>Thêm vào giỏ hàng</span>
                                        </button>
                                    </div>
                                    <div className={cx("detail_content-right-desc")}>
                                        {/* <div className={cx("detail_content-right-desc1")}>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M2.5 6.25H17.5M5.5 13.75H8.5M11.5 13.75H14.5M4.9 17.5H15.1C15.9401 17.5 16.3601 17.5 16.681 17.2956C16.9632 17.1159 17.1927 16.829 17.3365 16.4762C17.5 16.0751 17.5 15.5501 17.5 14.5V5.5C17.5 4.4499 17.5 3.92485 17.3365 3.52377C17.1927 3.17096 16.9632 2.88413 16.681 2.70436C16.3601 2.5 15.9401 2.5 15.1 2.5H4.9C4.05992 2.5 3.63988 2.5 3.31901 2.70436C3.03677 2.88413 2.8073 3.17096 2.66349 3.52377C2.5 3.92485 2.5 4.4499 2.5 5.5V14.5C2.5 15.5501 2.5 16.0751 2.66349 16.4762C2.8073 16.829 3.03677 17.1159 3.31901 17.2956C3.63988 17.5 4.05992 17.5 4.9 17.5Z" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                                <span>Thanh toán an toàn</span>
                                            </div>
                                            <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M13.0293 16.6666H6.97104C6.13457 16.6666 5.45648 16.0005 5.45648 15.1788V9.64962C5.45648 9.21944 4.927 9.004 4.61734 9.30818C4.33462 9.5859 3.85062 9.43353 3.78489 9.04613L3.35417 6.50754C3.25188 5.90466 3.53535 5.30166 4.06889 4.9872L6.8306 3.3595C6.91103 3.31209 7.01476 3.3304 7.07336 3.40235C8.57383 5.24476 11.4265 5.24476 12.927 3.40235C12.9856 3.3304 13.0893 3.31209 13.1697 3.3595L15.9314 4.9872C16.465 5.30166 16.7484 5.90466 16.6462 6.50754L16.2154 9.04613C16.1497 9.43353 15.6657 9.5859 15.383 9.30818C15.0733 9.004 14.5438 9.21944 14.5438 9.64962V15.1788C14.5438 16.0005 13.8658 16.6666 13.0293 16.6666Z" stroke="#3C4242" strokeWidth="1.5"/>
                                                    </svg>
                                                <span>Kích thước vừa vặn</span>
                                            </div>
                                        </div> */}
                                        {/* <div className={cx("detail_content-right-desc2")}>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5 13.889V4.55564C11.5 4.34086 11.3321 4.16675 11.125 4.16675H2.875C2.66789 4.16675 2.5 4.34086 2.5 4.55564V13.889C2.5 14.1037 2.66789 14.2779 2.875 14.2779H4M11.5 13.889C11.5 14.1037 11.3321 14.2779 11.125 14.2779H7M11.5 13.889V6.88897C11.5 6.67419 11.6679 6.50008 11.875 6.50008H14.3447C14.4441 6.50008 14.5395 6.54105 14.6098 6.61398L17.3902 9.49729C17.4605 9.57022 17.5 9.66914 17.5 9.77228V13.889C17.5 14.1037 17.3321 14.2779 17.125 14.2779H16M11.5 13.889C11.5 14.1037 11.6679 14.2779 11.875 14.2779H13M4 14.2779C4 15.137 4.67157 15.8334 5.5 15.8334C6.32843 15.8334 7 15.137 7 14.2779M4 14.2779C4 13.4187 4.67157 12.7223 5.5 12.7223C6.32843 12.7223 7 13.4187 7 14.2779M13 14.2779C13 15.137 13.6716 15.8334 14.5 15.8334C15.3284 15.8334 16 15.137 16 14.2779M13 14.2779C13 13.4187 13.6716 12.7223 14.5 12.7223C15.3284 12.7223 16 13.4187 16 14.2779" stroke="#3C4242" strokeWidth="1.5"/>
                                                </svg>
                                                <span>Miễn phí vận chuyển</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M7.0372 15.1851C7.0372 16.0033 6.37392 16.6666 5.55572 16.6666C4.73752 16.6666 4.07424 16.0033 4.07424 15.1851C4.07424 14.3669 4.73752 13.7036 5.55572 13.7036C6.37392 13.7036 7.0372 14.3669 7.0372 15.1851ZM7.0372 15.1851H12.9631C13.7813 15.1851 14.4446 14.5218 14.4446 13.7036V10.7407M12.9631 4.81473C12.9631 5.63293 13.6264 6.29621 14.4446 6.29621C15.2628 6.29621 15.9261 5.63293 15.9261 4.81473C15.9261 3.99653 15.2628 3.33325 14.4446 3.33325C13.6264 3.33325 12.9631 3.99653 12.9631 4.81473ZM12.9631 4.81473H7.0372C6.219 4.81473 5.55572 5.47802 5.55572 6.29621V9.25918M16.6668 12.2221L14.7065 10.1164C14.5619 9.96108 14.3274 9.96108 14.1827 10.1164L12.2224 12.2221M7.77794 7.7777L5.81761 9.88339C5.67297 10.0388 5.43847 10.0388 5.29383 9.88339L3.3335 7.7777" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                                <span>Sản phẩm chất lượng</span>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                        </div> 
                            </>
                                )
                            }
                    })
                    }
                       
                    </div>
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("detail_bottom")}>
                    <div className={cx("detail_bottom-content")}>
                        <div className={cx("row")}>
                                <h4>Mô tả chi tiết</h4>
                                <div>
                                <p><span>Trạng thái: </span> Còn hàng</p>
                                <p><span>Chất liệu:</span> Gỗ Đinh chun</p>
                                <p><span>Màu sắc:</span> Màu nguyên bản với màu gỗ</p>
                                <p><span>Tình trạng:</span>Hàng mới xuất xưởng 100%</p>
                                <p><span>Hàng bao gồm:</span> 6 món được gia công bằng tay (1 ghế dài, 1 bàn, 2 ghế con, 2 đôn)</p>
                                    <ul>
                                        <li>Trọn bộ: Dài 181 x 226cm</li>
                                        <li>Bàn: Dài 125cm x Rộng 65cm x Cao 54cm</li>
                                        <li>Ghế dài: Dài 181 x 61cm</li>
                                    </ul>
                                </div>
                        
                        </div>
                    </div>
                    <div style={{"margin-top": "40px"}}>
                        <img src="https://i.postimg.cc/m2CHQ5KS/2eb319bec2e76db934f6.jpg"  alt="image detail" style={{"width":"100%"}}/>
                    </div>

                    <div className={cx("row")}>
                        <div className={cx("col-sm-6")} style={{"margin-top": "40px"}}>
                            <img src="https://i.postimg.cc/bYMx0brq/2840f84d23148c4ad505.jpg" alt="img" style={{"width":"100%"}}/>
                        </div>
                        <div className={cx("col-sm-6")} style={{"margin-top": "40px"}}>
                            <img src="https://i.postimg.cc/m2CHQ5KS/2eb319bec2e76db934f6.jpg" alt="img" style={{"width":"100%"}}/>
                        </div>
                        <div className={cx("col-sm-6")} style={{"margin-top": "40px"}}>
                            <img src="https://i.postimg.cc/t41C3Z1G/2c732d7ff62659780037.jpg" alt="img" style={{"width":"100%"}}/>
                        </div>
                        <div className={cx("col-sm-6")} style={{"margin-top": "40px"}}>
                            <img src="https://i.postimg.cc/Wz3PsCgc/5c5e96514d08e256bb19.jpg" alt="img" style={{"width":"100%"}}/>
                        </div>
                    </div>
                </div>  
                {/* <div className={cx("detail_feedback")}>
                    <div className={cx("row")}>
                        <div className={cx("col-sm-4")}>
                            <h4>ĐÁNH GIÁ</h4>
                            <p>Đánh giá cùng chúng tôi</p>

                            <form>
                                <div className={cx("detail_feedback-username")}>
                                <p>Tên của bạn</p>
                                <input 
                                type="text" 
                                placeholder="Nhập tên của bạn"
                                name="username"
                                />  
                                </div>
                                <div className={cx("detail_feedback-email")}>
                                <p>Email</p>
                                <input 
                                type="text" 
                                placeholder="Nhập email"
                                name="email"
                                />  
                                </div>
                                <div className={cx("detail_feedback-star")}>
                                    <p>Đánh giá</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                    </p>
                                </div>
                                <div className={cx("detail_feedback-comment")}>
                                    <p>Bình luận</p>
                                    <textarea rows="4" cols="50">
                                        Bình luận
                                    </textarea>      
                                </div>
                                <button className={cx("detail_feedback-button")}>Gửi</button>
                            </form>
                        </div>
                        <div className={cx("col-sm-8")}>
                            <div className={cx("detail_comment")}>
                                <div className={cx("detail_comment-top")}>
                                    <div className={cx("detail_comment-top-name")}>
                                        <img src="./images/comment.png" alt=""/>
                                        <div className={cx("detail_comment-top-infor")}>
                                            <p>Mạnh Hùng</p>
                                            <p>15/11/2023</p>
                                        </div>
                                    </div>
                                    <div className={cx("detail_comment-top-star")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx("detail_comment-bottom")}>
                                    <p>
                                        Sản phẩm tốt
                                    </p>
                                    <p>
                                        Một chiếc áo thun là món đồ cổ điển có thể mặc trong bất kỳ dịp nào. Thật thoải mái, linh hoạt và phong cách
                                    </p>
                                </div>
                            </div>
                            <div className={cx("detail_comment")}>
                                <div className={cx("detail_comment-top")}>
                                    <div className={cx("detail_comment-top-name")}>
                                        <img src="./images/comment.png" alt=""/>
                                        <div className={cx("detail_comment-top-infor")}>
                                            <p>Mạnh Hùng</p>
                                            <p>15/11/2023</p>
                                        </div>
                                    </div>
                                    <div className={cx("detail_comment-top-star")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx("detail_comment-bottom")}>
                                    <p>
                                        Sản phẩm tốt
                                    </p>
                                    <p>
                                        Một chiếc áo thun là món đồ cổ điển có thể mặc trong bất kỳ dịp nào. Thật thoải mái, linh hoạt và phong cách
                                    </p>
                                </div>
                            </div> <div className={cx("detail_comment")}>
                                <div className={cx("detail_comment-top")}>
                                    <div className={cx("detail_comment-top-name")}>
                                        <img src="./images/comment.png" alt=""/>
                                        <div className={cx("detail_comment-top-infor")}>
                                            <p>Mạnh Hùng</p>
                                            <p>15/11/2023</p>
                                        </div>
                                    </div>
                                    <div className={cx("detail_comment-top-star")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx("detail_comment-bottom")}>
                                    <p>
                                        Sản phẩm tốt
                                    </p>
                                    <p>
                                        Một chiếc áo thun là món đồ cổ điển có thể mặc trong bất kỳ dịp nào. Thật thoải mái, linh hoạt và phong cách
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      */}

            <div className={cx("detail_bottom-content")}>
                        <div className={cx("row")}>
                                <h4>NỘI THẤT ĐỒ GỖ HTWOOD</h4>
                                <div>
                                <p><span>Địa chỉ công ty: </span>Số 96 Định Công - Phương Liệt - Thanh Xuân - Hà Nội</p>
                                <p><span>Xưởng SX:</span>Số 96 Định Công - Phương Liệt - Thanh Xuân - Hà Nội</p>
                                <p><span>Điện thoại:</span>0123456777</p>
                        </div>
                    </div>
                </div>
            </div>
            <Product title={'SẢN PHẨM TƯƠNG TỰ'}/>
            {/* <Product title={'SẢN PHẨM ĐÃ XEM GẦN ĐÂY'}/> */}
            <Footer/>

            {/* {isCart && (
                <Overlay >
                    <Cart onClose={handleCloseCart} itemId={itemId} number={number} color={color} size={size}/> 
                </Overlay>
            )}
              
            {
                isSize && (
                    <Overlay>
                        <Size onClose={handleCloseSize} id={itemId} />
                    </Overlay>
                )
            } */}
    
        </div>
    );
}

export default ProductDetail                                                       