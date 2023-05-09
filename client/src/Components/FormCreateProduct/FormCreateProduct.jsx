/* ========================* IMPORT GENERALES  *======================== */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import axios from "axios";

/* ========================* IMPORT VALIDACIONES  *======================== */
import {
  ValidateName,
  ValidateBrand,
  ValidateCategory,
  ValidateDescription,
  ValidatePrice,
  ValidateSlug,
  ValidateStock,
} from "./Validations";

/* ========================* IMPORT STYLES  *======================== */
import "../FormCreateProduct/FormCreateProduct.css";

/* ========================* ESTADO LOCAL  *======================== */
//import { getAllCategories, addCategory } from "../../redux/actions";
//nueva importación con store2. AddCategory no se está usando
import { getAllCategories } from "../../redux/actions/productActions";

function FormCreateProduct() {

// const URL = "http://localhost:5000";
const URL = "https://foodland-production.up.railway.app";

  /* ========================* ESTADO LOCAL  *======================== */
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    price: 0,
    category: "",
    brand: "",
    stock: 0,
    description: "",
  });

  const [errors, setErrors] = useState({});

  // const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  // const [newCategoryInputValue, setNewCategoryInputValue] = useState("");

  /* ========================* FUNCION PARA QUE CAMBIEN EL VALUE *======================== */
  const handleChange = (event, cb) => {
    const { name, slug, price, category, brand, stock, description, value } =
      event.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: cb(value),
      [slug]: cb(value),
      [price]: cb(value),
      [category]: cb(value),
      [brand]: cb(value),
      [stock]: cb(value),
      [description]: cb(value),
    });
    // if (value === "New category") {
    //   setShowNewCategoryInput(true);
    // } else {
    //   setShowNewCategoryInput(false);
    // }
  };

  // const handleNewCategoryInputChange = (event) => {
  //   setNewCategoryInputValue(event.target.value);
  //   setProduct({ ...product, category: event.target.value });
  // };

  /* ========================* FUNCION PARA QUE SE ENVIEN *======================== */
  async function handleSubmit(event) {
    event.preventDefault();
    // if (product.category === "New category" && product.category !== "") {
    //   await axios.post("http://localhost:5000/api/categories", {
    //     name: product.category,
    //   });
    //   dispatch(addCategory({ name: product.category }));
    //   setProduct({
    //     ...product,
    //     category: product.category,
    //   });
    // }
    await axios.post(`${URL}/api/products`, product);
    window.alert("El producto ha sido creado con éxito!!");
  }

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    /* ================== * CONTENEDOR GENERAL * ================== */
    <div className="formProductContainer">
      <div className="btnHomeContainer">
      <Link to="/">
      <button className="btnHome" >HOME</button>
      </Link>
      </div>
      {/* ================== * CONTENEDOR FORMULARIO * ================== */}
      <form className="formCreate" onSubmit={handleSubmit}>
        {/* ================== * NOMBRE * ================== */}
        <div className="labelContainer">
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              value={product.name}
              onChange={(e) => handleChange(e, ValidateName)}
              name="name"
            />
          </label>
          {errors["name"]?.isValidation ? null : <p  className="errorFormCP">{errors?.name?.message}</p>}
        </div>
        {/* ================== * SLUG * ================== */}
        <div className="labelContainer">
          <label className="label">
            Slug
            <input
              className="input"
              type="text"
              value={product.slug}
              onChange={(e) => handleChange(e, ValidateSlug)}
              name="slug"
            />
          </label>
          {errors["slug"]?.isValidation ? null : <p  className="errorFormCP">{errors?.slug?.message}</p>}
        </div>
        {/* ================== * PRECIO * ================== */}
        <div className="labelContainer">
          <label className="label">
            Price
            <input
              className="input"
              type="number"
              value={product.price}
              onChange={(e) => handleChange(e, ValidatePrice)}
              name="price"
            />
          </label>
          {errors["price"]?.isValidation ? null : (
            <p  className="errorFormCP">{errors?.price?.message}</p>)}
        </div>
        {/* ================== * CATEGORIA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Category
            <select
              className="input"
              name="category"
              value={product.category}
              onChange={(e) => handleChange(e, ValidateCategory)}
            >
              <option value="0">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category._id}
                </option>
              ))}
            </select>
          </label>
          {errors["category"]?.isValidation ? null : (
            <p  className="errorFormCP">{errors?.category?.message}</p>
          )}
        </div>
        {/* ================== * MARCA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Brand
            <input
              className="input"
              type="text"
              value={product.brand}
              onChange={(e) => handleChange(e, ValidateBrand)}
              name="brand"
            />
          </label>
          {errors["brand"]?.isValidation ? null : (
            <p  className="errorFormCP">{errors?.brand?.message}</p>
          )}
        </div>
        {/* ================== * IMAGEN * ================== */}
        <div className="labelContainer">
          <label className="label">
            Image
            <input
              className="input"
              type="text"
              value={product.image}
              onChange={(e) => handleChange(e, ()=> ({isValidation: true, message: "",}))}
              name="image"
            />
          </label>
          {errors["image"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.image?.message}</p>
          )}
        </div>
        {/* ================== * STOCK * ================== */}
        <div className="labelContainer">
          <label className="label">
            Stock
            <input
              className="input"
              type="number"
              value={product.stock}
              onChange={(e) => handleChange(e, ValidateStock)}
              name="stock"
            />
          </label>
          {errors["stock"]?.isValidation ? null : (
            <p  className="errorFormCP">{errors?.stock?.message}</p>
          )}
        </div>
        {/* ================== * DESCRIPCION * ================== */}
        <div className="labelContainer">
          <label className="label">
            Description
            <textarea
              className="inputDescription"
              value={product.description}
              onChange={(e) => handleChange(e, ValidateDescription)}
              name="description"
            />
          </label>
          {errors["description"]?.isValidation ? null : (
            <p  className="errorFormCP">{errors?.description?.message}</p>
          )}
        </div>
        {/* ================== * Vista Previa * ================== */}
        <div className="vistaPrevia">
          <div className="vsTitulo">
            <h1>Vista Previa</h1>
          </div>
          <div className="vsContent">
            <div>
              <h2>{product.name}</h2>
              <h2>${product.price}</h2>
              <h2>{product.category}</h2>
              <h2>{product.brand}</h2>
            </div>
            <img className="vsImg" src={product.image} />
          </div>
        </div>
        {/* ================== * BOTON DE CREAR * ================== */}
        <div className="btnContainer">
          <button className="btn" type="submit">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCreateProduct;
