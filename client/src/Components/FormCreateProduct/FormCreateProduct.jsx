import { useState } from "react";
import axios from "axios";

//IMPORT STYLES
import "../FormCreateProduct/FormCreateProduct.css";

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

  function hadlerChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("http://localhost:5000/api/products", product);
    window.alert("El producto ha sido creado con éxito!!");
  }

  return (
    <div className="createProductContainer">
      <h1>Create your product</h1>
      <div className="formCreateProduct">
        <form onSubmit={handleSubmit}>
          <div className="labelContainer">
            <label className="label">
              Name:
              <input
                className="input"
                type="text"
                value={product.name}
                onChange={hadlerChange}
                name="name"
              />
            </label>
          </div>
          <div className="labelContainer">
            <label className="label">
              Slug:
              <input
              className="input"
                type="text"
                value={product.slug}
                onChange={hadlerChange}
                name="slug"
              />
            </label>
          </div>
          <div className="labelContainer">
            <label className="label">
              Price:
              <input
              className="input"
                type="number"
                value={product.price}
                onChange={hadlerChange}
                name="price"
              />
            </label>
          </div>
          <div className="labelContainer">
            <label className="label">
              Category:
              <input
              className="input"
                type="text"
                value={product.category}
                onChange={hadlerChange}
                name="category"
              />
            </label>
          </div>
          <div className="labelContainer">
            <label className="label">
              Brand:
              <input
              className="input"
                type="text"
                value={product.brand}
                onChange={hadlerChange}
                name="brand"
              />
            </label>
          </div>
          <div className="labelContainer">
            <label className="label">
              Stock:
              <input
              className="input"
                type="number"
                value={product.stock}
                onChange={hadlerChange}
                name="stock"
              />
            </label>
          </div>
          <div className="labelContainer">
            <label className="label">
              Description:
              <textarea
              className="input"
                value={product.description}
                onChange={hadlerChange}
                name="description"
              />
            </label>
          </div>
          <div className="btnContainer">
            <button type="submit">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCreateProduct;
