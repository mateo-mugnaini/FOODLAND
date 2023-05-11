import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryContainer from "../../Components/Cards/categoryContainer";
import "./Home.css";
import Carrousel from "../../Components/Carrousel/Carrousel";
import oferta1 from "../../Imgs/oferta1.jpeg";
import oferta2 from "../../Imgs/oferta2.png";
import StockViews from "../Stock/StockViews";
import CreateProduct from "../CreateProduct/CreateProduct";
import ListUsers from "../../Components/ListUser-Admin/Users";

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedButton, setSelectedButton] = useState(""); // Estado para almacenar el botón seleccionado
  const [showStock, setShowStock] = useState(true);
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handleShowStock = () => {
    setSelectedButton("stock"); // Actualizar el botón seleccionado
    setShowStock(true);
    setShowCreateProduct(false);
    setShowUser(false);
    setShowStatistics(false);
  };

  const handleShowCreateProduct = () => {
    setSelectedButton("createProduct"); // Actualizar el botón seleccionado
    setShowCreateProduct(true);
    setShowStock(false);
    setShowUser(false);
    setShowStatistics(false);
  };

  const handleShowUser = () => {
    setSelectedButton("showUser"); // Actualizar el botón seleccionado
    setShowCreateProduct(false);
    setShowStock(false);
    setShowUser(true);
    setShowStatistics(false);
  };

  const handleShowStatistics = () => {
    setSelectedButton("showStatistics"); // Actualizar el botón seleccionado
    setShowCreateProduct(false);
    setShowStock(false);
    setShowUser(false);
    setShowStatistics(true);
  };

  if (userInfo?.isAdmin) {
    return (
      <div className="containerHome">
        <div className="messageHome">
          <h1>Hi! Admin</h1>
        </div>
        <div className="admBtnContainer">
          <button
            className={`btnPagAdm ${selectedButton === "stock" ? "selected" : ""}`}
            onClick={handleShowStock}
          >
            Stock
          </button>
          <button
            className={`btnPagAdm ${selectedButton === "createProduct" ? "selected" : ""}`}
            onClick={handleShowCreateProduct}
          >
            Create Product
          </button>
          <button
            className={`btnPagAdm ${selectedButton === "showUser" ? "selected" : ""}`}
            onClick={handleShowUser}
          >
            Users
          </button>
          <button
            className={`btnPagAdm ${selectedButton === "showStatistics" ? "selected" : ""}`}
            onClick={handleShowStatistics}
          >
            Statistics
          </button>
        </div>
        {showStock && <StockViews />}
        {showCreateProduct && <CreateProduct />}
        {showUser && <ListUsers />}
        {showStatistics && <CreateProduct />}
      </div>
    );
  } else{
    return (
      <div className="ContainerHome">
        {!imagesLoaded && (
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Loading...</h2>
          </div>
        )}
        {imagesLoaded && (
          <>
            <Carrousel />
            <CategoryContainer />
          </>
        )}
        <img
          src={oferta1}
          alt=""
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />
        <img
          src={oferta2}
          alt=""
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />
      </div>
    );
  };
  }
  

export default Home;
