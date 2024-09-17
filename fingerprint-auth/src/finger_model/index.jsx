// FingerprintScanner.jsx

import React from 'react';
import './style.css'; // Add any styling you need here
import '@fortawesome/fontawesome-free/css/all.min.css';

const FingerprintScanner = ({ onClose }) => {
    return (
        <div className="fingerprint-scanner">
            <div className="scanner-overlay">
                <div className="scanner-content">
                    <h2>Fingerprint Scanner</h2>
                    <div className="scanner-display">
                        <p>Place your finger on the scanner
                        <i className="fas fa-fingerprint"></i>
                        </p>
                        
                        <button onClick={onClose} className="btn btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FingerprintScanner;
