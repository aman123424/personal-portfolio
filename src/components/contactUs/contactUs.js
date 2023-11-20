/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./contactUs.scss";
import Button from "../../uiElements/Button/Button";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/library/d/1f2YHtjMBCY2YcA0wnPX6ByP-LYSCbo6UiuTN2MbWZUk5N_gAJ1lc6vXB/1";

  const submitForm = () => {
    if (formData.name && formData.email && formData.message) {
      window.open(
        "mailto:amankulwal27@gmail.com"
      );
    }
  };

  return (
    <div className="contactUs-container" id="contact">
      <div className="contactUs-image-container">
        <div className="text-1">Want to work together?</div>
        <div className="text-2">Let's get in touch!</div>
        <div className="img-container">
          <img className="img" />
        </div>
      </div>

      <div ref={formRef} className="form-container">
        <div className="questions">
          <div className="input-title name">Name</div>
          <input
            className="name input"
            // onChange={(e) => setName(e.target.value)}
            onChange={handleInputChange}
            placeholder="Enter your name here"
            name="name"
          />

          <div className="input-title email">Email</div>
          <input
            className="email input"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleInputChange}
            placeholder="Enter your email here"
            name="email"
          />

          <div className="input-title message">Message</div>
          <textarea
            className="message input"
            // onChange={(e) => setMsg(e.target.value)}
            onChange={handleInputChange}
            name="message"
            placeholder="Please enter your message here"
          />
        </div>

        <div type="submit" className="send-btn">
          <Button text={"Send Message"} onClick={submitForm} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
