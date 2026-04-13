import React from 'react';

const CV = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: '200px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <a
                href="https://github.com/Adam-Boesky/apb_cv/tree/main"
                target="_blank"
                rel="noreferrer"
                style={{ marginBottom: '12px', fontSize: '14px' }}
            >
                View source on GitHub
            </a>
            <iframe
                src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/Adam-Boesky/apb_cv/main-pdf/tex/cv_pubs.pdf&embedded=true"
                style={{
                    width: '816px',
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
