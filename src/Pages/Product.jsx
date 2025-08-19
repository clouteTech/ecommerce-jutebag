import Productcard from "../Components/Productcard";
import Jutebag from "../Data/Jutebag";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { addToCart } =useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="mb-4">Our Products</h2>
      <div className="row g-4">
        {Jutebag.map((spice) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={spice.id}>
            <Productcard
              id={spice.id}
              img={spice.img}
              name={spice.name}
              price={spice.price}
              variants={spice.variants}
              gst={spice.gst}
              onAdd={() => addToCart(spice)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
