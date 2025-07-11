import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Spice Store</h5>
            <p>Unlock the Aroma of Authentic Spices.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Explore</h5>
            <ul>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white text-decoration-none"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-white text-decoration-none">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: xxx@xxx.com</p>
            <p>Phone: 9585574201</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>
            © {new Date().getFullYear()} Spice Store. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
