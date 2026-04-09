import React from 'react';
import Header from './Header';
import CollapsibleSection from './CollapsibleSection';

const About = () => {
    return (
        <>
            <Header />

            <section className="about-static">
                <p className="about-bio">I am a PhD candidate in Astronomy and Astrophysics at Harvard University. My research focuses on <a href="https://astrobites.org/2022/10/30/guide-to-transient-astronomy/" target="_blank" rel="noopener noreferrer">transients</a>, with a particular emphasis on long-duration events, wide-field surveys, and compact object mergers. I am also interested in developing new tools and methods for detecting and characterizing these phenomena.</p>
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
                <p className="section-stats"><a href="https://ui.adsabs.harvard.edu/public-libraries/Ik0OjllsTWCtf7RzDpNJFQ" target="_blank" rel="noopener noreferrer">Click</a> for my publications.</p>
                <div className="research-topic">
                    <div className="research-topic-body">
                    <img src="/survey_observatory_larger.svg" alt="Survey telescope image" className="research-topic-image" />
                    <h3 className="topic-title">Wide-field Surveys</h3>
                    <p className="topic-description">
                        The night sky is vast and teeming with a diverse array of transients. Wide-field surveys image large swaths of the sky in real-time, taking snapshots of heterogeneous families of transients as they appear and fade. New surveys like LSST have pushed transient astronomy into a big data era, producing one million alerts each night. I use statistical and deep learning techniques to detect and characterize these events. I am excited about developing <a href="https://github.com/Adam-Boesky/astro_SPLASH" target="_blank" rel="noopener noreferrer">rapid and innovative tools</a> for dealing with the massive datasets that modern surveys collect each night. I am also interested in figuring out how to detect exotic, elusive transients that last for extremely long durations (<span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>O</span>(years)).
                    </p>
                    </div>
                </div>
                <div className="research-topic">
                    <div className="research-topic-body">
                    <img src="/black_hole_orbit_tilted.svg" alt="Black hole orbit diagram" className="research-topic-image" />
                    <h3 className="topic-title">Compact Object Mergers</h3>
                    <p className="topic-description">
                        Throughout the Universe, binaries of black holes and neutron stars (known as compact objects) are constantly merging in highly-energetic events that emit gravitational waves. I focus on "gravitational wave paleontology": using compact object mergers as fossils to understand the births, lives, and deaths of the massive stars that formed them. I forward model massive stellar evolution with <a href="https://scixplorer.org/abs/2025ApJS..280...43T/abstract" target="_blank" rel="noopener noreferrer">population synthesis</a> simulations, and use the simulated lives leading up to mergers to constrain the physics and demographics of massive stars. I have been particularly interested in the <a href="https://scixplorer.org/abs/2024ApJ...976...24B/abstract" target="_blank" rel="noopener noreferrer">rates of compact mergers</a> and <a href="https://scixplorer.org/abs/2024ApJ...976...23B/abstract" target="_blank" rel="noopener noreferrer">the dynamics that influence the rate of mergers</a>.
                    </p>
                    </div>
                </div>
            </CollapsibleSection>

        </>
    );
};

export default About;
