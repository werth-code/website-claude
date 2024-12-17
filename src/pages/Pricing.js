import React from 'react';

function Pricing() {
  const plans = [
    {
      title: 'Basic Membership',
      price: '$49/month',
      features: ['Gym Access', 'Basic Classes', 'Digital Resources'],
      image: 'https://images.unsplash.com/photo-1623874106349-5ac10a8e25d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'Premium Membership',
      price: '$99/month',
      features: ['Unlimited Classes', 'Personal Training', 'Nutrition Consultation'],
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    }
  ];

  return (
    <div className="section pricing">
      <h2>Membership Plans</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <img 
              src={plan.image} 
              alt={plan.title} 
              className="pricing-image" 
            />
            <h3>{plan.title}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;