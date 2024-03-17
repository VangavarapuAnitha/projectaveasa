import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Mr. Arun's Online Course for Aspiring Journalists</h1>
      <h2>
        Unlock your potential and become a successful journalist with this
        practical course.
      </h2>
      <Link to="/Course">Explore the Course</Link>
      <div className="home-container">
        <h2>About Mr. Arun</h2>
        <p>
          Mr. Arun is a retired journalist with a wealth of experience in the
          field. He has been a part of various newsrooms and has covered a wide
          range of topics. His course aims to provide aspiring journalists with
          practical insights and tips to excel in the field.
        </p>
        <h2>Course Overview</h2>
        <p>
          The course is designed to be completed in two weeks and includes video
          lectures, assignments, and quizzes. Students will have access to a
          private online community where they can connect with other aspiring
          journalists and receive feedback on their work.
        </p>
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
      </div>
      <Link to="/Enroll">Enroll Now</Link>
    </div>
  );
};

export default Home;
