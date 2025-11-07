import React, { useState, useEffect, useRef } from 'react';

const CollapsibleSection = ({ title, children, defaultCollapsed = false }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('auto');
    const [isCollapsed, setIsCollapsed] = useState(() => {
        // Initialize from localStorage or use default
        const savedStates = JSON.parse(localStorage.getItem('sectionStates') || '{}');
        return savedStates[title] !== undefined ? savedStates[title] : defaultCollapsed;
    });
    const isInitialMount = useRef(true);

    // Measure content height after mount
    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(height);
        }
        isInitialMount.current = false;
    }, [children]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSection = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);

        // Save to localStorage
        const savedStates = JSON.parse(localStorage.getItem('sectionStates') || '{}');
        savedStates[title] = newState;
        localStorage.setItem('sectionStates', JSON.stringify(savedStates));
    };

    return (
        <section className={`collapsible ${isCollapsed ? 'collapsed' : ''}`}>
            <h2 className="section-header" onClick={toggleSection}>
                {title}
            </h2>
            <div
                ref={contentRef}
                className="section-content"
                style={{
                    maxHeight: isCollapsed ? '0px' : (typeof contentHeight === 'number' ? `${contentHeight}px` : contentHeight),
                    opacity: isCollapsed ? 0 : 1,
                    transition: isInitialMount.current ? 'none' : undefined
                }}
            >
                {children}
            </div>
        </section>
    );
};

export default CollapsibleSection;
