import React from 'react';

function Services() {
  const services = [
    {
      title: 'Strength Training',
      description: 'Personalized programs to build muscle and increase strength',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    },
    {
      title: 'Boxing',
      description: 'High-intensity boxing classes for all skill levels',
      image: 'https://images.unsplash.com/photo-1561997457-9aba3a658c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'Digital Membership',
      description: 'Access to online workouts and training resources',
      image: 'https://images.unsplash.com/photo-1518310533694-07d053ba7759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <div className="section services">
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <div key={index} className="service">
          <img 
            src={service.image} 
            alt={service.title} 
            className="service-image" 
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button className="btn">Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default Services;