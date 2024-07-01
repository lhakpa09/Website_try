import React from 'react';
import './04-req.css';

const ContactUs = () => {
    return (
        <div className='container'>
            <div className="contact-us-container">
                <form className="contact-us-form">
                    <h2>Contact Us</h2>
                    <div className="form-group">
                        <label>Name*</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number*</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Email*</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
