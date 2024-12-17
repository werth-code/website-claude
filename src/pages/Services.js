import React from 'react';

function Services() {
  const services = [
    {
      title: 'Strength Training',
      description: 'Personalized programs to build muscle and increase strength',
      image: '/path/to/strength-training.jpg'
    },
    {
      title: 'Boxing',
      description: 'High-intensity boxing classes for all skill levels',
      image: '/path/to/boxing.jpg'
    },
    {
      title: 'Digital Membership',
      description: 'Access to online workouts and training resources',
      image: '/path/to/digital-membership.jpg'
    }
  ];

  return (
    <div className="section services">
      {services.map((service, index) => (
        <div key={index} className="service">
          <img src={service.image} alt={service.title} className="service-image" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button className="btn">Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default Services;