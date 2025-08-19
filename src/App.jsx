import React from "react";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Profile";
import OrderSummary from "./Components/OrderSummary";
// import Invoice from "./Components/invoice";
import PaymentProcessing from "./Components/PaymentProcessing";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/order-summary"
          element={<OrderSummary />}
        />
        <Route path="/payment" element={<PaymentProcessing />} />
        {/* <Route path="/invoice" element={<Invoice />} /> */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoclose={3000}
        transition={Slide}
      />
      <Footer />
    </>
  );
};

export default App;
