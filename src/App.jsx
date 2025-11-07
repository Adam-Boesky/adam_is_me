import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import CV from './components/CV';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('About');

    return (
        <div className="app-container">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="main-content">
                {activeTab === 'About' && <About />}
                {activeTab === 'Blog' && <Blog />}
                {activeTab === 'CV' && <CV />}
            </main>
        </div>
    );
}

export default App;
