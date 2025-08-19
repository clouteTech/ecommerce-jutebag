import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";

const PaymentProcessing = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const { profile, orderedItems, subtotal, shippingAddress, paymentMethod } =
    location.state || {};

  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment Successful!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // const handleClick = () => {
  //   const orderedItemsWithGST = orderedItems.map((item) => {
  //     const spice = Spices.find((s) => s.id === item.id);
  //     return {
  //       ...item,
  //       gst: spice?.gst || 0,
  //     };
  //   });

    // navigate("/invoice", {
    //   state: {
    //     profile,
    //     orderedItems:orderedItemsWithGST,
    //     shippingAddress,
    //     subtotal,
    //   },
    // });
  // };

  return (
    <div className="container py-5 text-center">
      {isProcessing ? (
        <>
          <h2>Processing Payment...</h2>
          <div className="my-4">
            <div className="spinner-border text-success" role="status"></div>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ color: "#ffff00" }}>Under Construction!</h3>
          <iframe src="https://lottie.host/embed/4a0e7a26-8fda-4c4b-903d-c4c793085b15/oIHTT7nzEu.lottie"
            //src="https://lottie.host/embed/1f79eb34-5931-4128-b91f-7e9991eeea98/QLmPNQwdjf.lottie"
            width="200" height="200" style={{ border: "none" }}
            title="Payment Animation" >
          </iframe>
          {/* <button type="invoice" className="btn btn-primary" onClick={handleClick} >Invoice</button> */}
        </>
      )}

      {/* Hidden invoice for PDF */}
      {/*<div
        id="invoice"
        style={{
          position: "absolute",
          top: "-10000px",
          left: "-10000px",
          backgroundColor: "white",
          color: "black",
          padding: "20px",
          width: "210mm",
          minHeight: "297mm",
        }}
      >
        <h3>Invoice</h3>
        <p>
          <strong>Name:</strong> {profile?.name}
        </p>
        <p>
          <strong>Phone:</strong> {profile?.phone}
        </p>
        <p>
          <strong>Shipping Address:</strong> {shippingAddress}
        </p>
        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>
        <ul>
          {orderedItems.map((item) => (
            <li key={`${item.id}-${item.selectedSize}`}>
              {item.name} - {item.selectedSize}g x {item.quantity} = ₹
              {(item.price * item.quantity * item.selectedSize).toFixed(2)}
            </li>
          ))}
        </ul>
        <h5>Total: ₹{subtotal?.toFixed(2)}</h5>
      </div>*/}
    </div>
  );
};

export default PaymentProcessing;
