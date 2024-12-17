import React from 'react';

function Services() {
  const services = [
    {
      title: 'Strength Training',
      description: 'Personalized programs to build muscle and increase strength'
    },
    {
      title: 'Boxing',
      description: 'High-intensity boxing classes for all skill levels'
    },
    {
      title: 'Digital Membership',
      description: 'Access to online workouts and training resources'
    }
  ];

  return (
    <div className="section services">
      {services.map((service, index) => (
        <div key={index} className="service">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button className="btn">Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default Services;