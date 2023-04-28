import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import DetailCard from "./Views/Detail/DetailCard";
import FormCreateProduct from "./Components/FormCreateProduct/FormCreateProduct";
import ProductsContainer from "./Components/Cards/productsContainer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location?.pathname === "/login" ? null : <NavBar />} 

      <Routes>
        {/* -----------------Routes generals -----------------*/}
        <Route exact path="/" element={<Home />} name="Home" key="Home"></Route>
        <Route path="/login" element={""} name="Login" key="Login"></Route>
        <Route
          path="/register"
          element={""}
          name="Register"
          key="Register"
        ></Route>
        <Route path="/about" element={""} name="About" key="About"></Route>
        {/* -----------------Routes Users -----------------*/}
        <Route
          path="/detail/:id"
          element={<DetailCard />}
          name="DetailProducts"
          key="DetailProducts"
        ></Route>
           <Route
          path="/categorys/:categoryId"
          element={<ProductsContainer />}
          name="Products"
          key="Products"
        ></Route>
        <Route
          path="/profile"
          element={""}
          name="ProfileUser"
          key="ProfileUser"
        ></Route>
        <Route path="/widget" element={""} name="Widget" key="Widget"></Route>
        {/* -----------------Routes Admins -----------------*/}
        <Route
          path="/ordersUs"
          element={""}
          name="OrdersUser"
          key="OrdersUser"
        ></Route>
        <Route
          path="/products"
          element={""}
          name="products"
          key="products"
        ></Route>
        <Route
          path="/OrdersAdm"
          element={""}
          name="OrdersAdm"
          key="OrdersAdm"
        ></Route>
        <Route path="/Users" element={""} name="Users" key="Users"></Route>
        <Route
          path="/create"
          element={<FormCreateProduct />}
          name="create"
          key="create"
        ></Route>
        <Route path="/edit" element={""} name="edit" key="edit"></Route>
        <Route
          path="/detailOrder/:i"
          element={""}
          name="detailOrder"
          key="detailOrder"
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
