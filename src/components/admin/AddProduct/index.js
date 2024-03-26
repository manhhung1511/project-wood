import React, { useState } from "react";
import styles from "./AddProduct.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import products from "../../../data/product.json";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const cx = classNames.bind(styles);
const AddProduct = () => {
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState("")

    function handleSearch(e) {
        setInputSearch(e.target.value)
    }

    const [formData, setFormData] = useState({
        name: "",
        number: "",
      });

    const [errors, setErrors] = useState({});
    const [editorValue, setEditorValue] = useState('');

    const [file, setFile] = useState()
    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
    }

    function handleChange(event) {
      setFile(event.target.files[0])
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/admin/product');
    }

    return (
        <>
    <div className={cx("add_product")}>
        <div className={cx("add_summary")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-sm-8")}>
                        <div className={cx("add_title")} >
                            <h3>Thông tin sản phẩm</h3>
                        </div>

                        <div className={cx("add_form")} >
                            <form onSubmit={handleSubmit}>
                            <div className={cx("form_two")}>

                                <div className={cx("form_name")}>
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="Tên sản phẩm"
                                        name="name"
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <div className="error_input">{errors.name}</div>}
                                </div>
                                <div className={cx("form_number")}>
                                    <p>Số lượng</p>
                                    <input
                                        type="text"
                                        placeholder="Số lượng"
                                        name="number"
                                        onChange={handleInputChange}
                                    />
                                    {errors.number && <div className="error_input">{errors.number}</div>}
                                </div>
                                </div>
                                <div className={cx("form_two")}>
                                    <div className={cx("form_category")}>
                                    <p>Danh mục</p>
                                        <select id="category">
                                            <option value="Áo polo">Phòng khách</option>
                                            <option value="Áo In">Phòng bếp</option>
                                            <option value="Quần Tây">Phòng ngủ</option>
                                            <option value="Áo nỉ">Phòng thờ</option>
                                            <option value="Quần Jeans">Phòng làm việc</option>
                                        </select>
                                        {errors.name && <div className="error_input">{errors.name}</div>}
                                        </div>
                                        <div className={cx("form_price")}>
                                            <p>Giá bán</p>
                                            <input
                                                type="text"
                                                placeholder="Giá bán"
                                                name="price"
                                                // onChange={handleInputChange}
                                            />
                                            {errors.price && <div className="error_input">{errors.price}</div>}
                                    </div>
                                </div>

                                <div className={cx("form_desc")}>
                                    <p>Mô tả sản phẩm</p>

                                    <ReactQuill
                                    value={editorValue}
                                    onChange={(value) => setEditorValue(value)}
                                    modules={{
                                        toolbar: [
                                        [{ header: [1, 2, false] }],
                                        ['bold', 'italic', 'underline'],
                                        ['image', 'code-block']
                                        ]
                                    }}
                                    theme="snow"
                                    />
                                </div>
                                <div className={cx("form_upload")}>
                                    <p>Hình ảnh sản phẩm</p>

                                    <input type="file" onChange={handleChange} placeholder="Chọn hình ảnh sản phẩm"/>
                                </div>

                                <div className={cx("form_two")}>
                                    <div className={cx("form_size")}>
                                    <p>Kích cỡ</p>
                                        <select id="size">
                                            <option value="s">Tay 14-6 món</option>
                                            <option value="M">Tay 15-6 món</option>
                                        </select>
                                        {errors.name && <div className="error_input">{errors.name}</div>}
                                        </div>
                                        <div className={cx("form_color")}>
                                            <p>Màu sắc</p>
                                            <input
                                                type="text"
                                                placeholder="Màu sắc"
                                                name="color"
                                                // onChange={handleInputChange}
                                            />
                                            {errors.price && <div className="error_input">{errors.price}</div>}
                                    </div>
                                </div>
        
                            
                                    <div style={{marginLeft: "24px"}}>
                                        <button type="submit" className={cx("add_button")}>Lưu sản phẩm</button>

                                    </div>
                            </form>
                        </div>
                    </div>
                    <div className={cx("col-sm-4")}>

                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default AddProduct;