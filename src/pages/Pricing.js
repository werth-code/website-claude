import React from 'react';

function Pricing() {
  const plans = [
    {
      title: 'Basic Membership',
      price: '$49/month',
      features: ['Gym Access', 'Basic Classes', 'Digital Resources']
    },
    {
      title: 'Premium Membership',
      price: '$99/month',
      features: ['Unlimited Classes', 'Personal Training', 'Nutrition Consultation']
    }
  ];

  return (
    <div className="section pricing">
      <h2>Membership Plans</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
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