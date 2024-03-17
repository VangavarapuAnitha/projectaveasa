import React from "react";
import { useState } from "react";
import "./Enroll.css";
const Enroll = () => {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    age: "",
    email: "",
    phone: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.name ||
      !formData.qualification ||
      !formData.age ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Update table data and store in local storage
    const newTableData = [...tableData, formData];
    setTableData(newTableData);
    localStorage.setItem("formData", JSON.stringify(newTableData));
    alert("Enrolled successfully! Our team contact you within 24 hours");
    // Clear form data
    setFormData({
      name: "",
      qualification: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <h2> Enroll Now</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleInputChange}
        />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>PhoneNumber:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <div>
          <button type="submit">Enroll</button>
        </div>
      </form>
    </div>
  );
};
export default Enroll;
