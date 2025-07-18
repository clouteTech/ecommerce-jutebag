import { React } from "react";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";
import { pdf } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF"; // Adjust path as needed

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import "../App.css";

const Invoice = () => {
  const location = useLocation();
  const { profile, shippingAddress } =
    location.state || {};
  const { orderedItems = []} = location.state || {};

  const currentDate = new Date().toLocaleDateString();
  const invoiceNumber = `INV-${Date.now()}`;
  const gstNumber = "29ABCDE1JJKDS";

  // const generatePDF = () => {
  //   // const invoiceDiv = document.getElementById("invoice");

  //   // html2canvas(invoiceDiv, { scale: 2 }).then((canvas) => {
  //   //   const imgData = canvas.toDataURL("image/png");
  //   //   const pdf = new jsPDF("p", "mm", "a4");

  //   //   const imgProps = pdf.getImageProperties(imgData);
  //   //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   //   pdf.save("invoice.pdf");
  //   //   toast.success("Invoice Download Successfully!");
  //   // });
  // };

  const generatePDF = async () => {
    const blob = await pdf(
      <InvoicePDF
        profile={profile}
        shippingAddress={shippingAddress}
        invoiceNumber={invoiceNumber}
        currentDate={currentDate}
        processItems={processItems}
        gstTotal={gstTotal}
        grandTotal={grandTotal}
        gstGroupSummary={gstGroupSummary}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `invoice-${invoiceNumber}.pdf`;
    link.click();
    URL.revokeObjectURL(url);

    toast.success("Invoice downloaded successfully!");
  };


  const processItems = orderedItems?.map((item) => {
    const unitPrice = item.price * item.selectedSize;
    const taxableAmount = unitPrice * item.quantity;
    const taxAmount = taxableAmount * (item.gst / 100);
    const total = taxAmount + taxableAmount;
    return {
      ...item,
      unitPrice,
      taxableAmount,
      taxAmount,
      total,
    };
  });

  const gstGroupSummary = processItems?.reduce((acc, item) => {
    if (!acc[item.gst]) {
      acc[item.gst] = { gstRate: item.gst, gstTotal: 0 };
    }
    acc[item.gst].gstTotal += item.taxAmount;
    return acc;
  }, {});

  const gstTotal = processItems?.reduce((acc,item)=>acc+item.taxAmount,0);

  const grandTotal = processItems?.reduce((acc,item)=>acc+item.total,0);

  return (
    <div className="invoice-container">
      <div className="invoice-header" id="invoice">
        <div className="invoice-info">
          <img src={logo} className="logo" alt="" width={"130px"} />
          <p>
            <strong>Invoice No:</strong> {invoiceNumber}
          </p>
          <p>
            <strong>Date:</strong> {currentDate}
          </p>
          <p>
            <strong>GSTIN: </strong>
            {gstNumber}
          </p>
        </div>

        <hr />
        <h4>Customer Details</h4>
        <p>
          <strong>Name: </strong>
          {profile?.name}
        </p>
        <p>
          <strong>Phone No: </strong>
          {profile?.phone}
        </p>
        <p>
          <strong>Shipping Address: </strong>
          {shippingAddress}
        </p>
        <table className="invoice-table" border="1" cellPadding="10">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Unit Price</th>
              <th>Taxable Value</th>
              <th>Tax Amount</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {orderedItems?.map((item, index) => {
              const unitPrice = item.price * item.selectedSize;
              const taxableValue = item.quantity * unitPrice;
              const taxAmount = (taxableValue * item.gst) / 100;
              const totalPrice = taxAmount + taxableValue;

              return ( */}
            {processItems?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.selectedSize}g</td>
                <td>₹{item.unitPrice.toFixed(2)}</td>
                <td>{item.taxableAmount.toFixed(2)}</td>
                <td>
                  ₹{item.taxAmount.toFixed(2)}({item.gst}%)
                </td>
                <td>₹{item.total.toFixed(2)}</td>
              </tr>
            ))}
            {/* );
            })} */}
          </tbody>
        </table>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <h5>GST Summary:</h5>
          {Object.values(gstGroupSummary)?.map((group, index) => (
              <p key={index}>
                <strong>{group.gstRate}% GST:</strong> ₹
                {group.gstTotal.toFixed(2)}
              </p>
          ))}
          <hr/>
          <h5><strong>Total GST:</strong> ₹{gstTotal.toFixed(2)}</h5>
          <h5><strong>Grand Total:</strong>₹{grandTotal.toFixed(2)}</h5>
        </div>
        <button className="btn btn-primary mt-4" onClick={generatePDF}>
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
