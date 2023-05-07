import React from "react";
//IMPORT STYLES
import "./CreateProduct.css";
//IMPORT COMPONENTS
import FormCreateProduct from "../../Components/FormCreateProduct/FormCreateProduct";

const CreateProduct = () => {
  return (
    <div className="containerCreateProduct">
      <div className="titleFormCreateProduct">
        <h1>Create your product</h1>
      </div>
      <div className="formCreateProduct">
        <FormCreateProduct />
      </div>
    </div>
  );
};

export default CreateProduct;
