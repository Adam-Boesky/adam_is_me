import React from 'react';
import Header from './Header';
import CollapsibleSection from './CollapsibleSection';

const About = () => {
    return (
        <>
            <Header />

            <section className="about-static">
                <p className="about-bio">I am a PhD candidate in Astronomy and Astrophysics at Harvard University. My research focuses on <a href="https://astrobites.org/2022/10/30/guide-to-transient-astronomy/" target="_blank" rel="noopener noreferrer">transients</a>, with a particular emphasis on long-duration events and compact object mergers. I am also interested in developing new tools and methods for detecting and characterizing these phenomena.</p>
            </section>

            <CollapsibleSection title="Previously">
                <div className="item">
                    <div className="item-header">
                        <span className="title">ProDex Labs, Founding Engineer</span>
                    </div>
                    <p>Developed software to help manufacturers optimize their operations with a native AI agent.</p>
                </div>

                <div className="item">
                    <div className="item-header">
                        <span className="title">SpaceX, Falcon GNC</span>
                    </div>
                    <p>Developed high-fidelity Monte Carlo simulations for the Falcon rocket. Drove operational changes to promote launch reliability and accelerate launch cadence.</p>
                </div>

                <div className="item">
                    <div className="item-header">
                        <span className="title">Harvard University, BA in Astrophysics & Mathematics</span>
                    </div>
                    <p>Cum Laude, 2025</p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Open-source software">
                <div className="item">
                    <a href="https://github.com/Adam-Boesky/SPLASH" className="project-link">SPLASH</a>
                    <span className="sep">—</span>
                    <span>Supernova classification pipeline leveraging host galaxy properties</span>
                </div>
                <div className="item">
                    <a href="https://github.com/TeamCOMPAS/COMPAS" className="project-link">COMPAS</a>
                    <span className="sep">—</span>
                    <span>Rapid binary population synthesis code</span>
                </div>
                <div className="item">
                    <a href="https://github.com/Adam-Boesky/HOOTSim" className="project-link">HOOTSim</a>
                    <span className="sep">—</span>
                    <span>N-Body simulator</span>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Research">
                <p className="section-stats"> <a href="https://ui.adsabs.harvard.edu/public-libraries/Ik0OjllsTWCtf7RzDpNJFQ" target="_blank" rel="noopener noreferrer">Click</a> for my publications.</p>
                <div className="item">
                    <p className="pub-title"><a href="https://ui.adsabs.harvard.edu/abs/2025ApJS..280...43T" target="_blank">Rapid Stellar and Binary Population Synthesis with COMPAS: Methods Paper II</a></p>
                    <p className="pub-info">Team Compas (incl. <span className="author-highlight">Boesky</span>) • ApJS, 2025 • 4 citations</p>
                </div>
                <div className="item">
                    <p className="pub-title"><a href="https://ui.adsabs.harvard.edu/abs/2024ApJ...976...24B" target="_blank">Investigating the Cosmological Rate of Compact Object Mergers from Isolated Massive Binary Stars</a></p>
                    <p className="pub-info"><span className="author-highlight">Boesky</span>, Broekgaarden, & Berger • ApJ, 2024 • 14 citations</p>
                </div>
                <div className="item">
                    <p className="pub-title"><a href="https://ui.adsabs.harvard.edu/abs/2024ApJ...976...23B" target="_blank">The Binary Black Hole Merger Rate Deviates from the Cosmic Star Formation Rate</a></p>
                    <p className="pub-info"><span className="author-highlight">Boesky</span>, Broekgaarden, & Berger • ApJ, 2024 • 13 citations</p>
                </div>
                <div className="item">
                    <p className="pub-title"><a href="https://ui.adsabs.harvard.edu/abs/2025arXiv250600121B" target="_blank">SPLASH: A Rapid Host-Based Supernova Classifier for Wide-Field Time-Domain Surveys</a></p>
                    <p className="pub-info"><span className="author-highlight">Boesky</span> et al. • ArXiv, 2025 • 4 citations</p>
                </div>
                <div className="item">
                    <p className="pub-title"><a href="https://ui.adsabs.harvard.edu/abs/2025arXiv250600757S" target="_blank">RESOLVE: Rare Event Surrogate Likelihood for Gravitational Wave Paleontology Parameter Estimation</a></p>
                    <p className="pub-info">Schuetz et al. • ArXiv, 2025 • 1 citation</p>
                </div>
            </CollapsibleSection>

        </>
    );
};

export default About;
