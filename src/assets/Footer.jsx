import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <footer className='footer'>
     <div className="container">
        <div className="footer-grid">

            <div className="footer-column">
                <div className="footer-logo">NexaFlow</div>
                <p className="footer-description">Transforming digital experiences for modern teams worldwide.</p>
            </div>

            <div className="footer-column">
                <h4 className="footer-heading">Product</h4>
                <div className="footer-links">
                    <a href="#" className='footer-link'>Features</a>
                    <a href="#" className='footer-link'>Pricing</a>
                    <a href="#" className='footer-link'>API</a>
                </div>
            </div>

            <div className="footer-column">
                <h4 className="footer-heading">Company</h4>
                <div className="footer-links">
                    <a href="#" className='footer-link'>About</a>
                    <a href="#" className='footer-link'>Blog</a>
                    <a href="#" className='footer-link'>Careers</a>
                </div>
            </div>

            <div className="footer-column">
                <h4 className="footer-heading">Support</h4>
                <div className="footer-links">
                    <a href="#" className='footer-link'>Help Center</a>
                    <a href="#Contact" className='footer-link'>Contact</a>
                    <a href="#" className='footer-link'>Status</a>
                </div>
            </div>
        </div>

           <hr />

           <div className="footer-bottom">
            <p>&copy; 2025 NexaFlow. All rights reserved.</p>
           </div>

     </div>
   </footer>
  )
}

export default Footer
