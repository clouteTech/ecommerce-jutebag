import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
window.bootstrap = bootstrap;
import { CartProvider } from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/Ecommerce_Demo">
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
