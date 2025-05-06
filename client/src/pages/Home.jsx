import React from 'react';
import { MacbookScroll } from '../components/ui/macbook-scroll';


const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Your solution for everything tech!</p>
      </header>

      <section className="macbook-section">
        <MacbookScroll />
      </section>

      <footer className="home-footer">
        <p>Created with love by Your Team</p>
      </footer>
    </div>
  );
};

export default Home;
