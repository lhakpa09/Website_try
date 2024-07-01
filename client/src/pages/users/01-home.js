import React from 'react';
import './01-home.css';
import ServicesGrid from '../../components/user/homepage-components/servicesGrid';

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Supporting businesses in making well-informed decisions with accurate data</h1>
          <p>
            We are dedicated to offering well-structured, scientifically reliable guidance, research, analytics, and marketing,<br />
            supporting our clients in understanding, engaging, and fostering stronger relationships with their customers and stakeholders.
          </p>
          <a href="/admin-login" className="cta-button">Learn More</a>
        </div>
      </div>
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
      <a href="/about-us" className="cta-button">Explore More</a>
      </div>
      <div className="body">
        <div class="service_container">
                <h2>Our Data Science Services</h2>
                <p>Nepal’s top-ranking data science firm offers every high-quality solution <br />
                that your business could possibly require.</p>
            <div class="services-grid">
                <div class="service-card">
                <div class="icon">📊</div>
                <h3>Data Analytics Solution</h3>
                <p>Data infers everything about your business. Data analysis is a necessity for well-informed and efficient decision making.</p>
                </div>
                <div class="service-card">
                <div class="icon">🤖</div>
                <h3>Artificial Intelligence</h3>
                <p>AI enables software ability of understanding, reasoning, planning, communication, and perception.</p>
                </div>
                <div class="service-card">
                <div class="icon">📈</div>
                <h3>Data Driven Marketing</h3>
                <p>Growth Hacking and Digital Marketing improve your sales, conversion, branding, and loyal customers.</p>
                </div>
                <div class="service-card">
                <div class="icon">⚙️</div>
                <h3>Automation</h3>
                <p>Automation helps in higher production rates, increased productivity, efficient use of materials, and better product quality. Everything that can be automated must be automated.</p>
                </div>
            <a href="/service" className="cta-button">Explore More</a>
          </div>
        </div>
        <ServicesGrid/>
    </div>
  </div>
  </div>
  );
}

export default Home;
