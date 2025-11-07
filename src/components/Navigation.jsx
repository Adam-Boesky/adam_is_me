import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
    const tabs = ['About', 'Blog', 'CV'];

    return (
        <nav className="nav-sidebar">
            <ul className="nav-list">
                {tabs.map((tab) => (
                    <li key={tab} className="nav-item">
                        <a
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
