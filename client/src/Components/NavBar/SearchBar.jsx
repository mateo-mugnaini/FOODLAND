

import React from "react"
import "./SearchBar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setFilterState } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const AllProducts = useSelector(state => state.products.AllProducts.products);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {

    const filteredProducts = AllProducts.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch(setFilterState(false))
    console.log(filteredProducts)
    dispatch(setProduct(filteredProducts));
    navigate("/categories/allProducts");
  };
  

  return (
    <div name="ContainerSearch" className="ContainerSearch">
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className="Search"
        placeholder="Search products ..."
      ></input>
      <button onClick={handleSearch} className="butonSearch">
        <img
          src="https://tinypic.host/images/2023/04/27/lupa2.png"
          alt="iconLupa"
          className="Lup"
        />
      </button>
    </div>
  );
};

export default SearchBar;


