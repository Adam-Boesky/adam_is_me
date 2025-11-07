import React from 'react';

const CV = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: '200px',
            padding: '32px'
        }}>
            <iframe
                src="/cv_pubs.pdf"
                style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid #eee',
                    borderRadius: '4px'
                }}
                title="CV"
            />
        </div>
    );
};

export default CV;
