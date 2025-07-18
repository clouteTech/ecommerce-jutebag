import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
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
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="" width={"130px"} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-auto d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <HomeOutlinedIcon fontSize="medium" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <Inventory2OutlinedIcon fontSize="small" />
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <ShoppingCartOutlinedIcon fontSize="small" />
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <PermContactCalendarOutlinedIcon fontSize="small" />
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
        <div className="dropdown ms-3">
          <button
            className={`btn ${
              darkMode ? "btn-outline-light" : "btn-outline-dark"
            } dropdown-toggle`}
            type="button"
            id="userMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AccountCircleIcon />
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
