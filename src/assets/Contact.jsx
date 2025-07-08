import React from 'react';
import {Phone, MessageCircle, Mail} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
   <section id='Contact' className='contact-section'>
    <div className="contact-container">
        
        <img src="/ContactImage.png" alt="Contact Illustration" className="contact-image" />

        <div className="contact-content">
            <h2 className="content-title">
                Ready to Get Started?
            </h2>
            <p className="content-description">
                Join thousands of teams already using our platform to achieve their goals faster than ever. 
            </p>
        </div>

        <div className="contact-details">Get In Touch With Us
          
          <ul className='contact-icons'>
            <li><Phone size={25} className='icon'/>
              <span>+977-9800000000</span>
            </li>
            <li><MessageCircle size={25} className='icon'/>
              <span>Message Us</span>
            </li>
            <li><Mail size={25} className='icon'/>
              <span>nexaflow@gmail.com</span>
            </li>
          </ul>

        </div>
    </div>
   </section>
  )
}

export default Contact;
