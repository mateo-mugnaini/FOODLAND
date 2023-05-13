import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProduct,
  getDetail,
  getAllCategories,
} from "../../redux/actions/productActions";
import { Link, useParams } from "react-router-dom";

import "./FormUpdateProduct.css";
import swal from "sweetalert";

const EditProductForm = () => {
  const URL = "http://localhost:5000";
  // const URL = "https://foodland-production.up.railway.app";

  const { id } = useParams();
  const decodedName = decodeURI(id);
  const { product } = useSelector((state) => state.products);
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getDetail(decodedName));
  }, [dispatch, decodedName]);

  const [formData, setFormData] = useState({
    // active: true,
    name: "",
    slug: "",
    image: "",
    images: [],
    imageCategory: "",
    brand: "",
    category: "",
    description: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    setFormData({
      // active: product?.active,
      name: product?.name,
      slug: product?.slug,
      image: product?.image,
      images: product?.images,
      imageCategory: product?.imageCategory,
      brand: product?.brand,
      category: product?.category,
      description: product?.description,
      price: product?.price,
      stock: product?.stock,
    });
    // console.log(product.id, product._id);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData, product);
    try {
      dispatch(updateProduct(formData, product._id));
      // await axios
      //   .put(`${URL}/api/products/${product._id}`, formData)
      //   .then((res) => console.log(res));
      setFormData({
        // active: "",
        name: "",
        slug: "",
        image: "",
        images: [],
        imageCategory: "",
        brand: "",
        category: "",
        description: "",
        price: 0,
        stock: 0,
      });
      swal({
        title: "Cambio exitoso",
        icon: "success",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      setTimeout(() => {
        window.location.replace("/products");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formProductContainer">
      <form onSubmit={handleSubmit} className="formCreate">
        {/* ================== * NAME * ================== */}
        <div className="labelContainer">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder={product?.name}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* ================== * SLUG * ================== */}
        <div className="labelContainer">
          <label htmlFor="slug" className="label">
            Slug:
          </label>
          <input
            className="input"
            type="text"
            id="slug"
            name="slug"
            placeholder={product?.slug}
            value={formData.slug}
            onChange={handleChange}
          />
        </div>
        {/* ================== * IMAGE * ================== */}
        <div className="labelContainer">
          <label htmlFor="image" className="label">
            Image:
          </label>
          <input
            className="input"
            type="text"
            id="image"
            name="image"
            placeholder="Insert a new image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        {/* ================== * IMAGES * ================== */}
        <div className="labelContainer">
          <label htmlFor="images" className="label">
            Images:
          </label>
          <input
            className="input"
            type="text"
            id="images"
            name="images"
            placeholder="Insert a new images"
            value={formData.images}
            onChange={handleChange}
          />
        </div>
        {/* ================== * BRAND * ================== */}
        <div className="labelContainer">
          <label htmlFor="brand" className="label">
            Brand:
          </label>
          <input
            className="input"
            type="text"
            id="brand"
            name="brand"
            placeholder={product?.brand}
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        {/* ================== * CATEGORIA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Category
            <select
              className="input"
              name="category"
              placeholder={product?.category}
              value={product.category}
              onChange={(e) => handleChange(e)}
            >
              <option value="0">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category?.name}>
                  {category._id}
                </option>
              ))}
            </select>
          </label>
        </div>
        {/* ================== * DESCRIPTION * ================== */}
        <div className="labelContainer">
          <label htmlFor="description" className="label">
            Description:
          </label>
          <textarea
            className="inputDescription"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {/* ================== * PRICE * ================== */}
        <div className="labelContainer">
          <label htmlFor="price" className="label">
            Price:
          </label>
          <input
            className="input"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        {/* ================== * STOCK * ================== */}
        <div className="labelContainer">
          <label htmlFor="stock" className="label">
            Stock:
          </label>
          <input
            className="input"
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        {/* ================== * ACTIVADO * ================== */}
        <div className="labelContainer">
          <label className="label">
            Active / Disactive
            <select
              className="input"
              name="active"
              value={formData?.active}
              onChange={(e) => handleChange(e)}
            >
              <option value="0">Active / Desactive</option>
              <option value={true}> Active</option>
              <option value={false}> Desactive</option>
            </select>
          </label>
        </div>
        <div className="btnContainer">
          <button className="btn" type="submit">
            Submit
          </button>
          <Link to="/">
            <button className="btnCancel">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;