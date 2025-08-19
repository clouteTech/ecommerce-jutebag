import Backjute from "../assets/Backjute.png";
import jutebag12 from "../assets/Jute bag12.jpg";
import HomeJute3 from "../assets/HomeJute3.jpeg";
import HomeJute4 from "../assets/HomeJute4.jpeg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="text-overlay d-flex align-items-center justify-content-center"
        style={{
          background: `url(${Backjute})`,
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
          <h1>Welcome to Earth's Choice</h1>
          <p>Eco-Friendly Bags for a Better Tomorrow</p>
          <button
            className="btn btn-warning"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="scroll-banner">
        <div className="scroll-text">
          👜 Elegant & Durable • 🌿 Biodegradable Jute Bags • ♻️ Plastic-Free
          Lifestyle • 🌏 Better for You, Better for Earth • 🛒 Shop Eco Today
        </div>
      </div>
      <div className="container-sm">
        <div className="d-flex align-items-center justify-content-center">
          <h2
            className="m-3 p-3 text-center rounded-pill border border-5 "
            style={{ width: "50vh" }}
          >
            Our Products
          </h2>
        </div>
        <p className="text-center mx-3">
          Our jute bags are crafted from the golden fibers of Bengal, the
          artisan hubs of Tamil Nadu, and the skilled weaving communities of
          Assam. Each bag carries a story of eco-conscious living, ethical
          craftsmanship, and timeless tradition. We partner directly with local
          artisans who hand-weave and stitch every bag, ensuring durability,
          natural elegance, and a minimal carbon footprint so you can carry
          style with sustainability.
        </p>
        <div className="row justify-content-center">
          <div className="col-md mb-2">
            <img
              src={HomeJute3}
              alt="Scene3"
              className="equal-img rounded"
              style={{ maxWidth: "600px" }}
            />
          </div>
          <div className="col-md mb-2">
            <img
              src={HomeJute4}
              alt="Kerala"
              className="equal-img rounded"
              style={{ maxWidth: "600px" }}
            />
          </div>
          <div className="col-md mb-2">
            <img
              src={jutebag12}
              alt="Scenes"
              className="equal-img rounded"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h2
            className="m-3 p-3 text-center rounded-pill border border-5"
            style={{ width: "70vh" }}
          >
            The Origin of Our Jute Bag
          </h2>
        </div>
        <p className="text-center">
          Every jute bag in our collection carries the legacy of India’s golden
          fiber. Our premium jute is grown in the fertile alluvial plains of
          West Bengal and Assam, regions renowned for producing the finest
          quality fibers. The raw jute is harvested, retted, and sun-dried using
          age-old, eco-friendly methods that preserve its natural strength and
          texture. Skilled artisans then hand-weave and stitch each bag,
          blending traditional craftsmanship with modern designs. We believe in
          keeping the journey from farm to fashion sustainable, ethical, and
          transparent.
        </p>
      </div>
    </>
  );
};

export default Home;
