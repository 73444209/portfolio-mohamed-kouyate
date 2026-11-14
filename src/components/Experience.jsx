function Experience() {
  return (
    <section id="experiences" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Parcours professionnel</span>
          <h2 className="section-title">Expériences professionnelles</h2>
        </div>

        <div className="timeline-container">
          {/* EXPÉRIENCE 1 : GLOB ACCESS */}
          <div className="timeline-item">
            <div className="timeline-dot timeline-dot-active"></div>
            <div className="timeline-card timeline-card-active">
              <div className="timeline-header">
                <div>
                  <h3>Responsable Marketing & Communication</h3>
                  <p className="timeline-company">
                    GLOB ACCESS (Glob Access International SARL) · Bamako, Mali
                  </p>
                </div>
                <span className="timeline-badge badge-current">Poste actuel</span>
              </div>
              <ul className="timeline-list">
                <li>
                  Pilotage de la stratégie marketing B2B et de la communication
                  globale de l’entreprise.
                </li>
                <li>
                  Mise en place et optimisation des pipelines de génération de
                  leads et d’intégration CRM (HubSpot & Mailchimp).
                </li>
                <li>
                  Déploiement de campagnes d’acquisition B2B (gammes Lenovo
                  ThinkBook/ThinkPad), Sales Enablement et conception de
                  supports corporate.
                </li>
              </ul>
            </div>
          </div>

          {/* EXPÉRIENCE 2 : Consultant Digital Selling */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Consultant en Digital Selling & Stratégie Marketing B2B</h3>
                  <p className="timeline-company">
                    Accompagnement & Conseil · Bamako, Mali
                  </p>
                </div>
                <span className="timeline-badge">Consulting</span>
              </div>
              <ul className="timeline-list">
                <li>
                  Structuration de processus commerciaux modernes (Social
                  Selling, prospection LinkedIn B2B et Sales Enablement).
                </li>
                <li>
                  Configuration et optimisation de HubSpot CRM (lead scoring,
                  segmentation et automatisation marketing).
                </li>
                <li>
                  Direction artistique, production vidéo promotionnelle et
                  stratégie de contenu éducatif multi-plateformes.
                </li>
              </ul>
            </div>
          </div>

          {/* EXPÉRIENCE 3 : SODIMA SARL */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Agent Commercial</h3>
                  <p className="timeline-company">SODIMA SARL · Mali</p>
                </div>
                <span className="timeline-badge">+5 ans d’expérience</span>
              </div>
              <ul className="timeline-list">
                <li>
                  Développement et gestion d’un portefeuille clients sur le
                  terrain pendant plus de quatre années.
                </li>
                <li>
                  Négociation commerciale, suivi des ventes et fidélisation de
                  la clientèle professionnelle et particulière.
                </li>
                <li>
                  Veille concurrentielle et remontée d’informations
                  stratégiques du marché local.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;