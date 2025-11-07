import React from 'react';

const Header = () => {
    return (
        <header>
            <img src="/headshot.png" alt="Adam Boesky" className="headshot" />
            <h1>Adam Boesky</h1>
            <p className="tagline">Founding Engineer · PhD Candidate in Astrophysics</p>
            <div className="contact-header">
                <a href="mailto:apboesky@gmail.com">Email</a>
                <span className="sep">·</span>
                <a href="tel:+19174283632">Phone</a>
                <span className="sep">·</span>
                <a href="https://github.com/Adam-Boesky">GitHub</a>
                <span className="sep">·</span>
                <a href="https://linkedin.com/in/adam-boesky">LinkedIn</a>
            </div>
        </header>
    );
};

export default Header;
