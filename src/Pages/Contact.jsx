import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Thank You For Contacting Us!");
    setFormData({
      name:"",
      email:"",
      phoneno:"",
      message:""
    })
  };

  return (
    <div
      className="container mb-4"
    >
      <div
        className="form-group mb-2"
      >
        <h2>Contact Us</h2>
        <p> Need help? Contact our support team anytime.</p>
        <form onSubmit={handleSubmit} className="row g-2">
          <div>
            <label htmlFor="name" style={{ width: "100px" }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
            <label htmlFor="email" style={{ width: "100px" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Id"
              value={formData.email}
              className="form-control"
              onChange={handleChange}
            />
            <label htmlFor="number" style={{ width: "100px" }}>
              Phone No
            </label>
            <input
              type="tel"
              id="number"
              name="phoneno"
              placeholder="Enter Your Phone Number"
              value={formData.phoneno}
              className="form-control"
              onChange={handleChange}
            />
            <label htmlFor="comment" style={{ width: "100px" }}>
              Comment Us
            </label>
            <textarea
              id="comment"
              name="message"
              placeholder="Enter Your Suggestion"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
