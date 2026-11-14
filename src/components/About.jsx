function About() {
  return (
    <section id="a-propos" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Présentation</span>
          <h2 className="section-title">À propos de mon approche</h2>
        </div>

        <div className="about-grid">
          {/* COLONNE GAUCHE : Vision & Piliers */}
          <div className="about-text-column">
            <p className="about-lead">
              Responsable Marketing et Communication basé à Bamako, j’accompagne
              la croissance et le rayonnement des organisations en alignant la
              stratégie de marque sur des objectifs commerciaux mesurables.
            </p>
            <p className="about-body">
              Mon approche hybride réunit la rigueur analytique du marketing B2B
              et la force de la création visuelle : je conçois des écosystèmes
              d’acquisition complets — de l’identité éditoriale jusqu’au
              pilotage des opportunités dans le CRM — pour transformer la
              visibilité en revenus concrets.
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <span className="pillar-number">01</span>
                <div>
                  <h4>Stratégie & Image de Marque</h4>
                  <p>Positionnement corporate, ligne éditoriale et communication institutionnelle.</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-number">02</span>
                <div>
                  <h4>Acquisition B2B & CRM</h4>
                  <p>Génération de leads qualifiés, Digital Selling et automatisation HubSpot / Mailchimp.</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-number">03</span>
                <div>
                  <h4>Direction Artistique & Contenu</h4>
                  <p>Conception de campagnes visuelles, catalogues produits et capsules vidéo haute définition.</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Carte de synthèse Executive */}
          <div className="about-card-column">
            <div className="executive-card">
              <h3>Synthèse du profil</h3>
              <div className="executive-stats">
                <div className="stat-box">
                  <span className="stat-value">ICHEC</span>
                  <span className="stat-label">Master en Management (Brussels)</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">+5 ans</span>
                  <span className="stat-label">Expérience Commerciale & B2B</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">360°</span>
                  <span className="stat-label">Marketing, CRM & Production Vidéo</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">B2B</span>
                  <span className="stat-label">Grands Comptes, ONG & Institutions</span>
                </div>
              </div>

              <div className="executive-footer">
                <p>
                  <strong>Basé à :</strong> Bamako, Mali (Disponible pour missions et collaborations)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;