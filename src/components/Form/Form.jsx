import { useState,useContext } from "react";
import { formContext } from "../../context/FormContext";
import { toast } from 'react-toastify';

import "./Form.css";

const Form = () => {
  //destructuring submitForm from context
const { submitForm } = useContext(formContext);

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    overallRating: ""
  });

  //function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   //send the formdetails to context
    submitForm(formDetails);
    
   toast.success('Thank You for your feedback!',{
      className:"toast-container",
      position: "top-center",
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setFormDetails({name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    overallRating: ""
})
    //console.log(formDetails,"formdetails");
  };

  //function to handle form values
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value
    });
  };

  return (
    <div className="form">
      <div className="form-title">Aromatic Bar</div>
      <div className="form-desc">
        We are committed to providing you with the best dining experience possible,
        so we welcome your comments. Please fill out this questionnaire.<span className="ty"> Thank you.</span>
      </div>
      <form className="form-details" onSubmit={handleSubmit}>
        <div className="form-items">
          <label htmlFor="name">Name</label>
          <input 
            name="name" 
            required
           value={formDetails.name} 
            onChange={handleOnChange} 
          />
        </div>
        <div className="form-items">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
           required
            name="email" 
            value={formDetails.email} 
            onChange={handleOnChange} 
          />
        </div>
        <div className="form-items">
          <label htmlFor="phone">Phone No</label>
          <input 
            type="number" 
            name="phone" 
           required
            value={formDetails.phone} 
            onChange={handleOnChange} 
          />
        </div>
        <div className="form-items">
          <label htmlFor="serviceQuality">Quality of Service Received from Host</label>
          <select 
            name="serviceQuality" 
         required
            value={formDetails.serviceQuality} 
            onChange={handleOnChange}
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div className="form-items">
          <label htmlFor="beverageQuality">Please Rate Quality of Beverage</label>
          <select 
            name="beverageQuality" 
            required
            value={formDetails.beverageQuality} 
            onChange={handleOnChange}
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div className="form-items">
          <label htmlFor="cleanliness">Was Our Restaurant Clean?</label>
          <select 
            name="cleanliness" 
            required
            value={formDetails.cleanliness} 
            onChange={handleOnChange}
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div className="form-items">
          <label htmlFor="overallRating">Please Rate Overall Dining Experience</label>
          <select 
            name="overallRating" 
            value={formDetails.overallRating}
            required
            onChange={handleOnChange}
          >
            <option value="">Select</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div className="form-items-btn">
          <button type="submit">Submit</button>
          <div className="msg">
            Thank you for your valuable feedback!!!
        </div>
        </div>
        
      </form>
    </div>
  );
};

export default Form;
