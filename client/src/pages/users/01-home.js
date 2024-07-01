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

      <div className="body">
        <div className="home-container">
          <div className="services-section">
            <h2>Our Data Science Services</h2>
            <p>
              Nepal’s top-ranking data science firm offers every high-quality solution<br />
              that your business could possibly require.
            </p>
            <div className="services-grid">
              <div className="service-card">
                <div className="icon">📊</div>
                <h3>Data Analytics Solution</h3>
                <p>
                  Data infers everything about your business. Data analysis is a necessity
                  for well-informed and efficient decision making.
                </p>
              </div>
              <div className="service-card">
                <div className="icon">🤖</div>
                <h3>Artificial Intelligence</h3>
                <p>
                  AI enables software ability of understanding, reasoning, planning,
                  communication, and perception.
                </p>
              </div>
              <div className="service-card">
                <div className="icon">📈</div>
                <h3>Data Driven Marketing</h3>
                <p>
                  Growth Hacking and Digital Marketing improve your sales,
                  conversion, branding, and loyal customers.
                </p>
              </div>
            </div>
            <a href="/service" className="cta-button explore-more-button">Explore More</a>
          </div>
        </div>
        <ServicesGrid/>
      </div>
    </div>
    
  );
}

export default Home;
