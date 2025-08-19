import { Link } from "react-router-dom";
import logojute1 from "../assets/logojute1.png";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import {Badge} from "@mui/material";
import { useCart } from "../Context/CartContext";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const { cartItems } = useCart();

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-white"
      : "bg-light text-dark";
  }, [darkMode]);
  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom border-5 ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-dark.bg-gradient"
      } px-4`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/home">
          <img src={logojute1} className="logo" alt="" width={"130px"} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-auto d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <HomeOutlinedIcon fontSize="small" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <Inventory2OutlinedIcon sx={{ fontSize: 16 }} />
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <PermContactCalendarOutlinedIcon sx={{ fontSize: 16 }} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <form className="d-flex ms-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <button
            className={`btn ms-3 ${
              darkMode ? "btn-outline-dark" : "btn-outline-light"
            }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <LightModeIcon sx={{ color: "white" }} />
            ) : (
              <DarkModeIcon sx={{ color: "black" }} />
            )}
          </button>
        </div>
        <Link to="/cart">
          <Badge
            badgeContent={cartItems.length}
            color="error"
            overlap="circular"
          >
            <LocalMallOutlinedIcon
              sx={{ color: darkMode ? "white" : "black" }}
              fontSize="large"
            />
          </Badge>
        </Link>
        <div className="dropdown ms-3 position-relative">
          <button
            className="btn btn-outline-light dropdown-toggle"
            type="button"
            id="userMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AccountCircleIcon sx={{ color: darkMode ? "white" : "black" }} />
          </button>
          <ul
            className={`dropdown-menu dropdown-menu-end ${
              darkMode ? "bg-dark border border-light" : ""
            }`}
            aria-labelledby="userMenuButton"
          >
            <li>
              <Link
                className={`dropdown-item ${
                  darkMode ? "text-white" : "text-dark"
                }`}
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className={`dropdown-item ${
                  darkMode ? "text-white" : "text-dark"
                }`}
                to="/logout"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
