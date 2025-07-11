import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import "../App.css";

const PaymentProcessing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, orderedItems, subtotal, shippingAddress, paymentMethod } =
    location.state || {};

  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      generatePDF();
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const generatePDF = () => {
    setTimeout(()=>{
    const invoiceDiv = document.getElementById("invoice");

    html2canvas(invoiceDiv, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");

      toast.success("Payment Successful!");
      toast.success("Invoice Downloaded!");

      setIsProcessing(false);
    });
    },1000);
  };

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
          <h3 style={{ color: "#ffff00" }}>
            Payment Completed! Invoice downloaded.
          </h3>
          <iframe
            src="https://lottie.host/embed/1f79eb34-5931-4128-b91f-7e9991eeea98/QLmPNQwdjf.lottie"
            width="200"
            height="200"
            style={{ border: "none" }}
            title="Payment Animation"
          ></iframe>

          <button type="invoice" className="btn btn-primary"  >Invoice</button>
        </>
      )}

      {/* Hidden invoice for PDF */}
      <div
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
      </div>
    </div>
  );
};

export default PaymentProcessing;
