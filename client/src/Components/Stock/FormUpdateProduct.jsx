import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions/productActions"; 
import { Link } from "react-router-dom";

import "./FormUpdateProduct.css"

const EditProduct = () => {
  const productId = "";

  console.log(productId);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    slug: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    description: "",
    image: "",
  });

  const [previewProduct, setPreviewProduct] = useState({});

  const products = useSelector((state) => state.products);
  const productList = products.AllProducts.products;

  useEffect(() => {
    const product = productList?.find((p) => p.id === productId);
    setPreviewProduct(product);
    setProduct({
      ...product,
    });
  }, [productList, productId]);

  const handleUpdateProduct = () => {
    const updatedProduct = {
      id: previewProduct.id,
      ...product,
    };
    dispatch(updateProduct(updatedProduct));
    setPreviewProduct(updatedProduct);
  };

  return (
    <div className="editProductContainer">
      <h1>Edit Product</h1>
      <div className="editForm">
        <div className="formRow">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="formRow">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
        </div>
        <div className="formRow">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          />
        </div>
        <div className="formRow">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          />
        </div>
        <button onClick={handleUpdateProduct}>Save Changes</button>
        <Link to="/stock">
          <button>Cancel</button>
        </Link>
      </div>

      <div className="preview">
        <h2>Preview:</h2>
        <div className="previewRow">
          <label>Name:</label>
          <span>{previewProduct?.name}</span>
        </div>
        <div className="previewRow">
          <label>Category:</label>
          <span>{previewProduct?.category}</span>
        </div>
        <div className="previewRow">
          <label>Stock:</label>
          <span>{previewProduct?.stock}</span>
        </div>
        <div className="previewRow">
          <label>Brand:</label>
          <span>{previewProduct?.brand}</span>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
