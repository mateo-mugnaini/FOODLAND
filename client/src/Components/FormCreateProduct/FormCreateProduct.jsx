import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

//IMPORT STYLES
import "../FormCreateProduct/FormCreateProduct.css";

import { getAllCategories, addCategory } from "../../redux/actions";

function FormCreateProduct() {
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
    <div className="createProductContainer">
      <form onSubmit={handleSubmit}>
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
        <div className="labelContainer">
    <label className="label">
      Category
      <select
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
        <div className="labelContainer">
          <label className="label">
            Description
            <textarea
              className="input"
              value={product.description}
              onChange={handleChange}
              name="description"
            />
          </label>
        </div>
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
