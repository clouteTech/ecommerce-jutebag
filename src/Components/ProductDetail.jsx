import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import Jutebag from "../Data/Jutebag";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = Jutebag.find((item) => item.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(product.defaultVariant);

  const totalPrice = (product.price * selectedSize).toFixed(2);

  if (!product) return <p className="text-center mt-5">Product not found.</p>;

  const handleAdd = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      totalPrice: Number(totalPrice),
      quantity: 1,
    };
    addToCart(productToAdd);
    toast.success(`${product.name}-${selectedSize} Added to cart`);
  };

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate("/products")}
      >
        ← Back to Products
      </button>
      <div className="card shadow p-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <h4 className="text-warning">₹{product.price}</h4>
            <p>⭐ {product.rating} / 5</p>
            <p>{product.description}</p>
            <label className="form-label"><b>Size:</b></label>
            <div className="d-flex gap-2 mb-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`btn ${
                    selectedSize === variant.size
                      ? "btn-warning"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setSelectedSize(variant.size)}
                >
                  {variant.size}
                </button>
              ))}
            </div>
            <button className="btn btn-warning" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
