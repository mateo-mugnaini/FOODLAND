import React from "react";
import EditProductForm from "../../Components/Stock/FormUpdateProduct";
import "./UpdateProduct.css"

const UpdateProduct = () => {
    return(
        <div>
            <div>
                <h1>
                    Edit your product
                </h1>
            </div>
            <div>
                <EditProductForm/>
            </div>
        </div>
    )
}

export default UpdateProduct