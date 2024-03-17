import React from "react";
import "./Course.css";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <div>
      <h1>Join Mr. Arun's Online Course</h1>
      <p>
        Learn practical insights about journalism from a seasoned journalist
        with over 30 years of experience.
      </p>
      <h2>This 2-week online course covers</h2>
      <ul>
        <li>
          <span>Introduction to Journalism</span>
        </li>
        <li>
          <span>Writing for Different Mediums</span>
        </li>
        <li>
          <span>Reporting and Interviewing</span>
        </li>
        <li>
          <span>Photography and Multimedia</span>
        </li>
        <li>
          <span>Social Media and Online Presence</span>
        </li>
        <li>
          <span>Ethics and Legal Issues</span>
        </li>
      </ul>
      <p id="p1">
        Interactive sessions, case studies, and assignments are included to help
        you understand the concepts better.
      </p>
      <Link to="/Enroll">Enroll Now</Link>
    </div>
  );
};

export default Course;
