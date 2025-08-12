import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Jute World</h5>
            <p>Fashion that Loves the Earth</p>
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
          <div className="col-md-4 mb-4">
            <h5>Connect With Us</h5>
            <div className="icon-group">
              <InstagramIcon />
              <FacebookOutlinedIcon />
              <MailOutlinedIcon />
              <WhatsAppIcon />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>
            © {new Date().getFullYear()} Jute Store. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
