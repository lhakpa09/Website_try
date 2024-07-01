import React from 'react';
import './02-aboutUs.css';
function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="content">
        <div className="section">
          <div className="text-section">
            <h2>Our Mission</h2>
            <p>
              At Datazenith Toch, we are dedicated to harnessing the power of data to transform businesses and drive innovation. Our mission is to provide cutting-edge data science solutions that empower organizations in Nepal and beyond to make informed decisions, optimize operations, and achieve sustainable growth. We strive to create a collaborative environment where creativity thrives, and our team works tirelessly to deliver actionable insights that propel our clients towards success.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="image-section">
            <img src='1.jpg' alt="Mission Image" />
          </div>
        </div>
        <div className="section">
          <div className="image-section">
            <img src='2.jpg' alt="Vision Image" />
          </div>
          <div className="text-section">
            <h2>Our Vision</h2>
            <p>
              Our vision at Datazenith Toch is to lead the data science revolution in Nepal by fostering a culture of innovation and continuous learning. We envision a future where businesses leverage advanced analytics and artificial intelligence to solve complex challenges and drive societal progress. Through pioneering research and strategic partnerships, we aim to establish Nepal as a hub for data-driven excellence, empowering local talents and contributing globally.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="section">
          <div className="text-section">
            <h2>Our Values</h2>
            <p>
              Integrity, Innovation, Collaboration, Excellence, and Impact are the core values that define us at Datazenith Toch. We uphold the highest ethical standards in every aspect of our work, ensuring transparency and trustworthiness in our relationships. Innovation drives us to push boundaries and pioneer new approaches in data science. Collaboration is at the heart of our success, as we believe in the collective strength of diverse perspectives. Excellence is our benchmark, and we continuously strive for mastery in our craft. Above all, we are driven by the desire to make a meaningful impact through data-driven insights that transform businesses and elevate communities.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="image-section">
            <img src='3.jpg' alt="Values Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
