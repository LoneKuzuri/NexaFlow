import React from 'react';
import { ArrowRight, ChevronDown, Star, Users } from 'lucide-react';
import './Body.css'
const Body = () => {
return(
   <section id="home" className="body-section">
    <div className="bg-animations">
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
      <div className="bg-circle circle-3"></div>
    </div>

    <div className="body-content">
      <h1 className="body-title">
        Transform Your <span className="body-subtitle">Digital Experience</span>
      </h1>
      <p className="body-description">
        Unlock the power of next-generation technology with our innovative platform.
      </p>

      <div className="body-buttons">
        <button className="btn btn-primary">
          Get Started Free <ArrowRight size={20} className="btn-icon" />
        </button>
        <button className="btn btn-secondary">Watch Demo</button>
      </div>

      <div className="body-stats">
        <div className="stat-item">
          <Star size={20} className="stat-icon star" />
          <span>4.9/5 Rating</span>
        </div>
        <div className="stat-item">
          <Users size={20} className="stat-icon users" />
          <span>10K+ Users</span>
        </div>
      </div>
    </div>

    <div className="scroll-indicator">
      <ChevronDown size={32} />
    </div>
  </section>
);
}
  
export default Body;
