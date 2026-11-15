function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <div className="section-header reveal reveal-fade-up">
          <span className="section-subtitle">Parcours académique & continu</span>
          <h2 className="section-title">Formation & Certifications</h2>
        </div>

        {/* NIVEAU 1 : DIPLÔMES UNIVERSITAIRES (2 colonnes larges) */}
        <div className="diplomas-grid">
          <div className="diploma-card diploma-card-featured reveal reveal-fade-up">
            <div className="diploma-badge">Diplôme Universitaire Supérieur</div>
            <h3>Master en Marketing & Communication</h3>
            <p className="diploma-school">ICHEC Brussels Management School · Bruxelles, Belgique</p>
            <p className="diploma-desc">
              Stratégie marketing internationale, communication d’entreprise,
              management stratégique et pilotage de la performance commerciale.
            </p>
          </div>

          <div className="diploma-card reveal reveal-fade-up">
            <div className="diploma-badge">Diplôme Universitaire</div>
            <h3>Licence en Droit Public</h3>
            <p className="diploma-school">Enseignement Supérieur · Mali</p>
            <p className="diploma-desc">
              Droit administratif, droit constitutionnel, gouvernance des
              institutions publiques et cadre réglementaire des organisations.
            </p>
          </div>
        </div>

        {/* NIVEAU 2 : CERTIFICATIONS PROFESSIONNELLES (6 cartes = 2 lignes de 3 parfaites) */}
        <div className="certifications-grid reveal reveal-fade-up">
          <div className="cert-card">
            <span className="cert-issuer">Alison Academy</span>
            <h4>Diplôme en Gestion Marketing</h4>
            <p>Management marketing, positionnement stratégique et analyse de marché.</p>
          </div>

          <div className="cert-card">
            <span className="cert-issuer">HubSpot Academy</span>
            <h4>Inbound Marketing Certification</h4>
            <p>Acquisition B2B, tunnels de conversion, lead nurturing et méthodologie Inbound.</p>
          </div>

          <div className="cert-card">
            <span className="cert-issuer">LinkedIn Marketing</span>
            <h4>B2B Digital Marketing & Social Media</h4>
            <p>Stratégie digitale B2B, Social Selling et communication corporate sur LinkedIn.</p>
          </div>

          <div className="cert-card">
            <span className="cert-issuer">Google Analytics</span>
            <h4>Google Analytics (GA4)</h4>
            <p>Analyse d’audience, suivi des conversions et mesure de la performance digitale.</p>
          </div>

          <div className="cert-card">
            <span className="cert-issuer">HP LIFE</span>
            <h4>Customer Experience (CX)</h4>
            <p>Expérience client pour la croissance des entreprises et fidélisation B2B.</p>
          </div>

          <div className="cert-card">
            <span className="cert-issuer">Cursa</span>
            <h4>Programmation Neuro-Linguistique (PNL)</h4>
            <p>Communication interpersonnelle, persuasion éthique et négociation commerciale.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;