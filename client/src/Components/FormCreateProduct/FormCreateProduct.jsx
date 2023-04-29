/* ========================* IMPORT GENERALES  *======================== */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

/* ========================* IMPORT STYLES  *======================== */
import "../FormCreateProduct/FormCreateProduct.css";

/* ========================* ESTADO LOCAL  *======================== */
import { getAllCategories, addCategory } from "../../redux/actions";

function FormCreateProduct() {
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
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategoryInputValue, setNewCategoryInputValue] = useState("");

  /* ========================* FUNCION PARA QUE CAMBIEN EL VALUE *======================== */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });

    if (value === "New category") {
      setShowNewCategoryInput(true);
    } else {
      setShowNewCategoryInput(false);
    }
  };

  const handleNewCategoryInputChange = (event) => {
    setNewCategoryInputValue(event.target.value);
    setProduct({ ...product, category: event.target.value });
  };

  /* ========================* FUNCION PARA QUE SE ENVIEN *======================== */
  async function handleSubmit(event) {
    event.preventDefault();
    if (product.category === "New category" && product.category !== "") {
      await axios.post("http://localhost:5000/api/categories", {
        name: product.category,
      });
      dispatch(addCategory({ name: product.category }));
      setProduct({
        ...product,
        category: product.category,
      });
    }
    await axios.post("http://localhost:5000/api/products", product);
    window.alert("El producto ha sido creado con éxito!!");
  }

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    /* ================== * CONTENEDOR GENERAL * ================== */
    <div className="formProductContainer">
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
              onChange={handleChange}
              name="name"
            />
          </label>
        </div>
        {/* ================== * SLUG * ================== */}
        <div className="labelContainer">
          <label className="label">
            Slug
            <input
              className="input"
              type="text"
              value={product.slug}
              onChange={handleChange}
              name="slug"
            />
          </label>
        </div>
        {/* ================== * PRECIO * ================== */}
        <div className="labelContainer">
          <label className="label">
            Price
            <input
              className="input"
              type="number"
              value={product.price}
              onChange={handleChange}
              name="price"
            />
          </label>
        </div>
        {/* ================== * CATEGORIA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Category
            <select
              className="input"
              name="category"
              value={product.category}
              onChange={handleChange}
            >
              <option value="0">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category._id}
                </option>
              ))}
              <option value="New category">New category</option>
            </select>
            {showNewCategoryInput && (
              <input
                className="input"
                type="text"
                value={newCategoryInputValue}
                onChange={handleNewCategoryInputChange}
                name="category"
              />
            )}
          </label>
        </div>
        {/* ================== * MARCA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Brand
            <input
              className="input"
              type="text"
              value={product.brand}
              onChange={handleChange}
              name="brand"
            />
          </label>
        </div>
        {/* ================== * IMAGEN * ================== */}
        <div className="labelContainer">
          <label className="label">
            Image
            <input
              className="input"
              type="text"
              value={product.image}
              onChange={handleChange}
              name="image"
            />
          </label>
        </div>
        {/* ================== * STOCK * ================== */}
        <div className="labelContainer">
          <label className="label">
            Stock
            <input
              className="input"
              type="number"
              value={product.stock}
              onChange={handleChange}
              name="stock"
            />
          </label>
        </div>
        {/* ================== * DESCRIPCION * ================== */}
        <div className="labelContainer">
          <label className="label">
            Description
            <textarea
              className="inputDescription"
              value={product.description}
              onChange={handleChange}
              name="description"
            />
          </label>
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
