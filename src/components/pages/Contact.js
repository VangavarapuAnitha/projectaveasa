import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p>
        If you have any questions or would like to learn more about the course,
        please contact us at:
      </p>
      <p>
        <Link to="mailto:arun@journalismcourse.com">
          arun@journalismcourse.com
        </Link>
      </p>
    </div>
  );
};

export default Contact;
