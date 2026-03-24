import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="hero">
        <h1>🚀 MonSitePro</h1>
        <p>Site + RDV Le Havre • 250€ • 48h</p>
        <a href="https://callrdv.com/" target="_blank" className="cta-button">
          Tester RDV
        </a>
      </section>
      <section className="contact">
        <h2>Devis gratuit</h2>
        <form action="https://formsubmit.co/ton-email@gmail.com" method="POST">
          <input type="text" name="nom" placeholder="Commerce" />
          <input type="tel" name="tel" placeholder="06 XX XX XX XX" />
          <button type="submit" className="cta-button">Je veux !</button>
        </form>
      </section>
    </div>
  );
}
export default App;
