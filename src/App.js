import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* HERO */}
      <section className="hero">
        <h1>🚀 MonSitePro Le Havre</h1>
        <p>Site web + RDV en ligne • 250€ • 48h</p>
        <p><strong>Coiffeurs • Restaurants • Fast-foods • Associations</strong></p>
        <div className="btn-group">
          <a href="https://callrdv.com/" target="_blank" className="cta-button" rel="noopener noreferrer">
            Tester le RDV
          </a>
          <a href="#contact" className="btn-secondary">Devis gratuit</a>
        </div>
      </section>

      {/* FORMULAIRE AVEC LISTE DÉROULANTE */}
      <section id="contact" className="formulaire">
        <div className="container">
          <h2>Quel commerce voulez-vous booster ?</h2>
          <form action="https://formsubmit.co/abdoulsalam.sow@outlook.fr" method="POST">
            <input type="text" name="nom" placeholder="Nom de votre commerce" required />
            <input type="tel" name="telephone" placeholder="06 XX XX XX XX" required />
            
            {/* LISTE DÉROULANTE */}
            <select name="type_commerce" required>
              <option value="">Choisissez votre activité</option>
              <option value="coiffeur">💈 Coiffeur / Barbier</option>
              <option value="restaurant">🍽️ Restaurant</option>
              <option value="fastfood">🍔 Fast-food</option>
              <option value="association">🤝 Association / Mosquée</option>
              <option value="autoecole">🚗 Auto-école</option>
              <option value="institut">💅 Institut de beauté</option>
              <option value="autre">❓ Autre commerce</option>
            </select>
            
            <input type="hidden" name="_next" value="Merci ! Je vous rappelle sous 2h" />
            <button type="submit" className="cta-button-large">Je veux mon site !</button>
          </form>
          <p>✅ Leads qualifiés directement dans votre boîte mail</p>
        </div>
      </section>
    </div>
  );
}

export default App;
