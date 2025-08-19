import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, orderedItems, subtotal } = location.state || {};
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  const handlePlaceOrder = () => {
    if (!shippingAddress.trim()) {
      toast.error("Please Enter Shipping Address");
      return;
    }
    
    navigate("/payment", {
      state: {
        profile,
        orderedItems,
        subtotal,
        shippingAddress,
        paymentMethod,
      },
    });
  };

  return (
    <div className="container py-5">
      <h2>Order Summary</h2>
      <h4>1.Customer Login Info</h4>
      <p>
        <strong>Name:XYZ</strong>
        {profile?.name}
      </p>
      <p>
        <strong>Phone No:1234567891</strong>
        {profile?.phone}
      </p>
      <h4>2.Shipping Address</h4>
      <textarea
        className="form-control"
        rows="3"
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
        placeholder="Enter Your Shipping Address"
      />
      <h4>3.Payment Method</h4>
      <select
        className="form-select"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option>Cash On Delivery</option>
        <option>UPI</option>
        <option>Net Banking</option>
        <option>Credit/Debit Card</option>
      </select>

      <h4>4.Ordered Products List</h4>
      <ul className="list-group mb-3">
        {orderedItems?.map((item) => {
          const itemKey = `${item.id}-{item.selectedSize}`;
          return (
            <li
              className="list-group-item d-flex align-items-center"
              key={itemKey}
            >
              <div className="mb-3">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="row">
                <span>Name:{item.name}</span>
                <span>Qty:{item.quantity}</span>
                <span>Size:{item.selectedSize}</span>
                <span>
                  Price:₹
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        className="btn btn-success mt-4 px-4 py-2"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
