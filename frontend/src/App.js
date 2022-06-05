// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/Header";
import Dashboard from "./pages/admin/Dashboard";
import Product from "./pages/admin/Product";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import DetailProduct from "./pages/content/DetailProduct";
import Home from "./pages/home/Home";
import "./assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/add" element={<AddProduct/>} />
        <Route path="/products/edit/:id" element={<EditProduct/>} />
        <Route path="/detail-product/:id" element={<DetailProduct/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
    
  );
}

export default App;
