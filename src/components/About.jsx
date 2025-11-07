import React from 'react';
import Header from './Header';
import CollapsibleSection from './CollapsibleSection';

const About = () => {
    return (
        <>
            <Header />

            <CollapsibleSection title="About">
                <p>I'm a founding engineer at ProDex Labs and a PhD candidate in astrophysics at Harvard University. My work spans computational astrophysics, machine learning, and full-stack software engineering—from simulating black hole populations to architecting discrete-event simulation engines for manufacturing.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Currently">
                <div className="item">
                    <div className="item-header">
                        <span className="title">Founding Engineer</span>
                        <span className="org">ProDex Labs</span>
                    </div>
                    <p>Developing a discrete-event simulation engine and native AI agent for digital twin manufacturing modeling and operational planning. Leading UX design of application with React/TypeScript frontend and Python-FastAPI backend.</p>
                </div>
                <div className="item">
                    <div className="item-header">
                        <span className="title">PhD Candidate</span>
                        <span className="org">Harvard University</span>
                    </div>
                    <p>Investigating cosmic transients across multiple domains: modeling black hole and neutron star demographics with population synthesis; cataloging long-duration transients using novel source extraction methods; studying detectability with LSST and Roman; developing machine learning pipelines for rapid supernova classification from host galaxy properties.</p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Previously">
                <div className="item">
                    <div className="item-header">
                        <span className="title">GNC Engineering Intern</span>
                        <span className="org">SpaceX</span>
                    </div>
                    <p>Developed high-fidelity Monte Carlo simulations for Falcon rocket. Drove operational changes to promote launch reliability and accelerate launch cadence.</p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Education">
                <div className="item">
                    <div className="item-header">
                        <span className="title">BA, Astrophysics & Mathematics</span>
                        <span className="org">Harvard University</span>
                    </div>
                    <p>Cum Laude, 2025</p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Open-source software">
                <p className="section-stats">&gt;1000 contributions / 21 repositories</p>
                <div className="item">
                    <a href="https://github.com/Adam-Boesky/astro_SPLASH" className="project-link">astro_SPLASH</a>
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

            <CollapsibleSection title="Selected publications">
                <p className="section-stats">refereed: 3 / first author: 3 / citations: 37 / h-index: 4</p>
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

            <CollapsibleSection title="Skills">
                <p><span className="skill-category">Programming:</span> Python, C++, Java, Typescript/React, HTML, Mathematica, JavaScript, SQL, R, Julia</p>
                <p><span className="skill-category">Software:</span> Git/GitHub, LangChain, GCP, CI/CD, Slurm, LaTeX, Linux, Bash, SAOImage DS9</p>
                <p><span className="skill-category">Miscellaneous:</span> Billiards, bartending, running, weightlifting, ranching, knitting, mountaineering, skiing, foosball</p>
            </CollapsibleSection>
        </>
    );
};

export default About;
