import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jutebag from "../Data/Jutebag";

const Productcard = ({ id, img, name, price, onAdd }) => {
  const navigate = useNavigate();

  const spice = Jutebag.find((spice) => spice.id === id);

  const handleAddtoCart = (e) => {
    e.stopPropagation();
    onAdd({ ...spice, selectedSize, price});
    navigate("/cart");
  };

  const handleViewDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="card h-100 shadow-sm"
      onClick={handleViewDetails}
      style={{ cursor: "pointer" }}
    >
      <img
        src={img}
        className="card-img-top"
        alt="name"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text flex-grow-1">
          ₹{price}
          <span className="small text-muted"></span>
        </p>
        <button onClick={handleAddtoCart} className="btn btn-warning ms-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;
