import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import CV from './components/CV';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navigation />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/cv" element={<CV />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
