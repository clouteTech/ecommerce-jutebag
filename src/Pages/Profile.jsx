import React, { useState,useEffect} from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value }); 
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    toast.success("Profile saved successfully!");
    setProfile({
      name: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",
    });
  };

  return (
    <div className="container py-5">
      <h2>Customer Profile</h2>
      <div className="form-group mb-2">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={profile.phone}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter Your Address"
          value={profile.address}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group mb-2">
        <label>Pincode</label>
        <input
          type="number"
          name="pincode"
          placeholder="Enter Your Pincode"
          value={profile.pincode}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleSave}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
