import React from 'react';
import Button from '../Button/Button';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="ContactUs" id="ContactUs">
      <div className="image-container">
        <img src="/assets/images/contact-bg.jpg" alt="Contact Background" />
      </div>

      <div className="content-container">
        <div className="text-container">
          <span>Contact Us</span>
          <h3>Get In Touch with Our Agents</h3>
        </div>

        <div className="contact-info-container">
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"
              title="Contact Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <div className="info-boxes">
              <div className="box">
                <img src="/assets/images/phone-icon.png" alt="Phone Icon" />
                <div className="text">
                  <h6>010-020-0340</h6>
                  <p>Phone Number</p>
                </div>
              </div>

              <div className="box">
                <img src="/assets/images/email-icon.png" alt="Email Icon" />
                <div className="text">
                  <h6>info@villa.co</h6>
                  <p>Business Email</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-box">
            <form action="#">
              <div className="input-box">
                <label htmlFor="FullName">Full Name</label>
                <input type="text" name="FullName" id="FullName" placeholder="Your Name ..." />
              </div>

              <div className="input-box">
                <label htmlFor="EmailAddress">Email Address</label>
                <input type="email" name="EmailAddress" id="EmailAddress" placeholder="Your E-mail ..." />
              </div>

              <div className="input-box">
                <label htmlFor="Subject">Subject</label>
                <input type="text" name="Subject" id="Subject" placeholder="Subject ..." />
              </div>

              <div className="input-box">
                <label htmlFor="Message">Message</label>
                <textarea name="Message" rows={6} id="Message" placeholder="Your Message" />
              </div>

              <Button text="Send Message" icon={false} semicircular={true} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
