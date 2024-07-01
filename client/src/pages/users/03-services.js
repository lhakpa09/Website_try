
import React from 'react';
import './03-services.css';
function Service() {
    return (
    <div className='body'>
        <div class="home-container">
            <div class="services-section">
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
                <div class="service-card">
                <div class="icon">💡</div>
                <h3>Machine Learning</h3>
                <p>Machine learning is a method of data analysis that makes systems learn from data, identify patterns, and make decisions with minimal human intervention.</p>
                </div>
                <div class="service-card">
                <div class="icon">🕸️</div>
                <h3>Web Scraping Service</h3>
                <p>Lots and lots of data are present on the internet in an unstructured manner. We scrap those data ethically and show them in a way you can make data-driven decisions.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
 );
}

export default Service;
