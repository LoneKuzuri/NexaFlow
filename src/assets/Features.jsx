import React from 'react';
import { Zap, Shield, Users } from 'lucide-react';
import './Features.css' 

const features = [
  {
    icon: <Zap size={32} className="feature-icon" />,
    title: 'Lightening Fast',
    description: 'Blazing-fast performance.',
  },
  {
    icon: <Shield size={32} className="feature-icon" />,
    title: 'Secure & Reliable',
    description: '99.99% uptime guarantee.',
  },
  {
    icon: <Users size={32} className="feature-icon" />,
    title: 'Team Collaboration',
    description: 'Real-time teamwork support.',
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-description">
            Everything you need to boost productivity.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => ( 
            <div key={i} className="feature-card">
              {feature.icon}
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
