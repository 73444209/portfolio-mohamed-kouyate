function Skills() {
  return (
    <section id="competences" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Domaines d’expertise</span>
          <h2 className="section-title">Compétences clés</h2>
        </div>

        <div className="skills-grid">
          {/* PÔLE 1 : Stratégie Marketing & B2B */}
          <div className="skill-card">
            <span className="skill-pole">Pôle 01 · Stratégie</span>
            <h3>Stratégie Marketing & B2B</h3>
            <ul className="skill-list">
              <li>Stratégie Marketing B2B & Positionnement</li>
              <li>Digital Selling & Sales Enablement</li>
              <li>Génération de leads & Prospection LinkedIn</li>
              <li>Expérience Client (CX) & Fidélisation</li>
            </ul>
          </div>

          {/* PÔLE 2 : CRM, Analyse & Outils Digitaux */}
          <div className="skill-card skill-card-accent">
            <span className="skill-pole">Pôle 02 · Data & Outils</span>
            <h3>CRM, Analyse & Outils Digitaux</h3>
            <ul className="skill-list">
              <li>HubSpot CRM (Pipelines, Lead Scoring, Tagging)</li>
              <li>Email Marketing & Automatisation (Mailchimp)</li>
              <li>Google Analytics (GA4) & Suivi de performance</li>
              <li>Meta Business Suite & Gestion Social Media</li>
            </ul>
          </div>

          {/* PÔLE 3 : Communication & Production Visuelle */}
          <div className="skill-card">
            <span className="skill-pole">Pôle 03 · Création</span>
            <h3>Communication & Production Visuelle</h3>
            <ul className="skill-list">
              <li>Communication Corporate & Institutionnelle</li>
              <li>Direction artistique & Production vidéo</li>
              <li>Montage & Post-production (DaVinci Resolve, CapCut Pro)</li>
              <li>Conception graphique & Supports B2B (Canva)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;