import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  console.log("Cart items:", cartItems);
  const total = Number(
    cartItems
      .reduce(
        (sum, item) => sum + item.price * item.quantity ,
        0
      )
      .toFixed(2)
  );

  const subtotal = Number(
    cartItems
      .filter((item) =>
        selectedItems.includes(`${item.id}-${item.selectedSize}`)
      )
      .reduce(
        (sum, item) => sum + item.price * item.quantity ,
        0
      )
      .toFixed(2)
  );

  const [showSummaryModal, setShowSummaryModal] = useState(false);
  /*
  const [showProcessing, setShowProcessing] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);*/

  const handleSelect = (itemKey) => {
    setSelectedItems((prev) =>
      prev.includes(itemKey)
        ? prev.filter((key) => key !== itemKey)
        : [...prev, itemKey]
    );
  };
  const handleConfirm = () => {
    /*setShowSummaryModal(false);
    setShowProcessing(true);

    setTimeout(() => {
      const input = document.getElementById("invoice");

      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        if (!imgData || imgData.indexOf("data:image/png") !== 0) {
          toast.error("Error generating PDF. Image data is invalid.");
          setShowProcessing(false);
          return;
        }

        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");

        setPaymentCompleted(true);
        setTimeout(() => {
          setShowProcessing(false);
          toast.success("Payment Successfully!");
          toast.success("Invoice downloaded!");*/
    const orderedItems = cartItems.filter((item) =>
      selectedItems.includes(`${item.id}-${item.selectedSize}`)
    );
    navigate("/order-summary", {
      state: {
        profile,
        orderedItems,
        subtotal,
      },
    });
  }; /*,2000);
      });
    }, 2000);
  };*/

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item) => {
              const itemKey = `${item.id}-${item.selectedSize}`;
              return (
                <li
                  className="list-group-item d-flex align-items-center"
                  key={itemKey}
                >
                  <input
                    type="checkbox"
                    className="form-check-input me-3"
                    checked={selectedItems.includes(itemKey)}
                    onChange={() => handleSelect(itemKey)}
                  />
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
                      {(item.price * item.quantity).toFixed(
                        2
                      )}
                    </span>
                  </div>
                  <div className="d-flex align-items-center ms-auto gap-3">
                    {item.quantity === 1 ? (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          removeFromCart(item.id, item.selectedSize)
                        }
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          decreaseQuantity(item.id, item.selectedSize)
                        }
                      >
                        -
                      </button>
                    )}
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        increaseQuantity(item.id, item.selectedSize)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-danger ms-auto"
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize, item.itemKey)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <h5>Subtotal(selected):₹{subtotal.toFixed(2)}</h5>
          <h5>Total:₹{total.toFixed(2)}</h5>
          <div>
            <button
              className="btn btn-success px-5 py-2"
              onClick={() => setShowSummaryModal(true)}
              disabled={selectedItems.length === 0}
            >
              <LocalMallOutlinedIcon fontSize="small" /> Proceed to Buy
            </button>
          </div>
          {showSummaryModal && (
            <div className="custom-modal">
              <div className="custom-modal-content">
                <h5>Cart Summary</h5>
                <ul>
                  {cartItems
                    .filter((item) =>
                      selectedItems.includes(`${item.id}-${item.selectedSize}`)
                    )
                    .map((item) => (
                      <li key={`${item.id}-${item.selectedSize}`}>
                        {item.name} - {item.selectedSize} x {item.quantity} = ₹
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </li>
                    ))}
                </ul>
                <strong>Total: ₹{subtotal.toFixed(2)}</strong>
                <div className="mt-3">
                  <button
                    className="btn btn-success me-2"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowSummaryModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* {showProcessing && (
            <div className="custom-modal">
              <div className="custom-modal-content text-center">
                {!paymentCompleted ? (
                  <>
                    <div
                      className="spinner-border text-success"
                      role="status"
                    ></div>
                    <p className="mt-3">Processing payment...</p>
                  </>
                ) : (
                  <>
                    <div className="text-success" style={{ fontSize: "50px" }}>
                      <iframe src="https://lottie.host/embed/1f79eb34-5931-4128-b91f-7e9991eeea98/QLmPNQwdjf.lottie"></iframe>
                    </div>
                    <p className="mt-3">Payment Successfully!</p>
                  </>
                )}
              </div>
            </div>
          )} */}
          {/* <div
            id="invoice"
            style={{
              position: "absolute",
              top: "-10000px",
              left: "-10000px",
              backgroundColor: "white",
              color: "black",
              padding: "20px",
              width: "210mm", // A4 width
              minHeight: "297mm", // A4 height
            }}
          >
            <h3>Invoice</h3>
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
            <ul>
              {cartItems
                .filter((item) =>
                  selectedItems.includes(`${item.id}-${item.selectedSize}`)
                )
                .map((item) => (
                  <li key={`${item.id}-${item.selectedSize}`}>
                    {item.name} - {item.selectedSize}g x {item.quantity} = ₹
                    {(item.price * item.quantity * item.selectedSize).toFixed(
                      2
                    )}
                  </li>
                ))}
            </ul>
            <h5>Total: ₹{subtotal.toFixed(2)}</h5>
          </div> */}

          <button className="btn btn-danger mt-3" onClick={clearCart}>
            <DeleteOutlineOutlinedIcon fontSize="medium" />
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
