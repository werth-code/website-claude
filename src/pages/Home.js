import React from 'react';

function Home() {
  return (
    <div className="section home">
      <img 
        src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
        alt="Fitness Hero" 
        className="hero-image" 
      />
      <h1>KLIPSAN FITNESS</h1>
      <p>Where You Come As You Are</p>
      <p>Comprehensive fitness programs designed to help you achieve your goals</p>
      <button className="btn">Join Now</button>
    </div>
  );
}

export default Home;