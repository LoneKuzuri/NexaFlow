import React from 'react'
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [

    {
     name:"Sunil Pandey",
     role:"CEO, CorpTech",
     content:`"This platform transformed our workflow completely. Highly recommended!"`,
     rating:5
    },

    {
     name:"Ragen Nepal",
     role:"FullStack Developer",
     content:`"Amazing performance and great user experience."`,
     rating:5
    },

    {
     name:"Sandeep Chaudhary",
     role:"Designer",
     content:`"The best tool i've used in years. Simple yet powerful."`,
     rating:5
    },

]

const Testimonials = () => {
  return (
   <section id='testimonials' className='testimonials-section'>
    <div className="testimonial-container">

        <div className="section-header">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-description">Join thousands of satisfied customers who've transformed their workflow.</p>
        </div>
       
        <div className="testimonial-grid">
            {testimonials.map((t,i) => (
            <div key={i} className="testimonial-card">
             
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} className="star-filled"/>)}
              </div>

              <p className="testimonial-content">{t.content}</p>

              <hr />

              <div className="testimonial-author">
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>

            </div>
            ))}
        </div>
    </div>
  
   </section>
  )
}

export default Testimonials;
