import React from "react";
import Spices from "../assets/Spices2.jpg";
import Kerala from "../assets/Kerala.jpg";
import Scenes from "../assets/Scenes.jpg";
import Scene from "../assets/Scene4.jpeg";
import "../App.css";

const Home = () => {
  return (
    <>
      <div
        className="text-overlay d-flex align-items-center justify-content-center"
        style={{
          background: `url(${Spices})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <h1>Welcome to Spice World</h1>
          <p>Discover the finest handpicked Spices from Organic Farms</p>
          <button className="btn btn-warning">Shop Now</button>
        </div>
      </div>
      <div className="scroll-banner">
        <div className="scroll-text">
          🌿 100% Organic Spices • 🌶️ Handpicked From Indian Farms • 🍛
          Freshness Guaranteed • 🛒 Shop Now & Taste the Tradition •
        </div>
      </div>
      <div className="container-sm">
        <div className="d-flex align-items-center justify-content-center ">
          <h2
            className="m-3 p-3 text-center rounded-pill border border-5 "
            style={{ width: "50vh" }}
          >
            Our Products
          </h2>
        </div>
        <p className="text-center mx-3">
          Our spices are sourced directly from the lush farms of Kerala, the
          aromatic lands of Tamil Nadu, and the vibrant markets of Rajasthan.
          Each spice tells a story of ancient traditions, organic farming, and
          rich cultural heritage. We work closely with farmers who handpick and
          sun-dry the spices to retain their natural oils and powerful flavors.
        </p>
        <div className="row justify-content-center">
          <div className="col-md mb-3">
            <img
              src={Scene}
              alt="Scene3"
              className="img-fluid-rounded"
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="col-md mb-3">
            <img
              src={Kerala}
              alt="Kerala"
              className="img-fluid-rounded"
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="col-md mb-3">
            <img
              src={Scenes}
              alt="Scenes"
              className="img-fluid-rounded"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-center">The Origin of our Spices</h2>
          <p className="text-center">
            Every spice in our collection tells a story. Our cinnamon is sourced
            from the hills of Kerala, while our turmeric comes from the rich
            soils of Erode, Tamil Nadu — known as the "Turmeric City of India".
            Black pepper, cardamom, and other exotic spices are handpicked from
            farms where traditional organic farming methods are still followed.
            We believe in keeping the journey from farm to kitchen transparent
            and natural.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
