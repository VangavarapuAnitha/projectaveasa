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
      <Link to="/Course" className="blink-container">
        Explore the Course
      </Link>
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
      <Link to="/Enroll" className="blink-container">
        Enroll Now
      </Link>
      <div className="home1">
        <h2>Testimonials</h2>
        <p>
          Mr. Arun's course was an eye-opener for me. I learned so much about
          journalism and how to approach stories. I highly recommend it to
          anyone who wants to become a journalist.- Anand, Aspiring Journalist
        </p>
        <br />
        <p>
          I loved the interactive sessions and the real-life examples that Mr.
          Arun shared with us. It was a great learning experience.- Suneetha,
          Aspiring Journalist
        </p>
        <h2>Contact</h2>
        <p>
          If you have any questions or would like to learn more about the
          course, please contact us at
          [contact@arunscourse.com](mailto:contact@arunscourse.com).
        </p>
      </div>
    </div>
  );
};

export default Home;
