import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import logo from '../../images/logo.svg'
const LanguagePopup = ({ onSelectLanguage }) => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');
        if (!hasSeenPopup) {
            setShow(true);
        }
    }, []);
    const handleClose = () => setShow(false);
    const handleLanguageSelect = (languageCode) => {
        handleClose();
        onSelectLanguage(languageCode);
        localStorage.setItem('hasSeenPopup', 'true');
        const googleTranslate = document.querySelector('.goog-te-combo');
        if (googleTranslate) {
            googleTranslate.value = languageCode;
            googleTranslate.dispatchEvent(new Event('change'));
        }
    };

    return (
        <Modal className='language-popup-main' show={show} onHide={handleClose} centered>
            <Modal.Body className="text-center">
                <div className='d-flex justify-content-center align-items-center'>
                    <h1 className="mb-3">Welcome to</h1>
                    <img src={logo} alt="Phone Par Loan Logo" className="popup-logo" />
                </div>
                <p>Please select language for the app</p>
                <div className="d-flex flex-wrap justify-content-center mb-3">
                    <Button onClick={() => handleLanguageSelect('hi')} className="btn language-btn" style={{ backgroundColor: '#E08420' }}> हिन्दी <span>Hindi</span></Button>
                    <Button onClick={() => handleLanguageSelect('mr')} className="btn language-btn" style={{ backgroundColor: '#B950DE' }}>मराठी <span>Marathi</span></Button>
                    <Button onClick={() => handleLanguageSelect('bn')} className="btn language-btn" style={{ backgroundColor: '#51B92D' }}>বাংলা <span>Bangali</span></Button>
                    <Button onClick={() => handleLanguageSelect('te')} className="btn language-btn" style={{ backgroundColor: '#179493' }}>తెలుగు <span>Telugu</span></Button>
                    <Button onClick={() => handleLanguageSelect('gu')} className="btn language-btn" style={{ backgroundColor: '#1B4AF1' }}>ગુજરાતી <span>Gujarati</span></Button>
                    <Button onClick={() => handleLanguageSelect('mr')} className="btn language-btn" style={{ backgroundColor: '#C54040' }}>मराठी <span>Marathi</span></Button>
                    <Button onClick={() => handleLanguageSelect('kn')} className="btn language-btn" style={{ backgroundColor: '#FB6D74' }}>ಕನ್ನಡ <span>Kannada</span></Button>
                    <Button onClick={() => handleLanguageSelect('ha')} className="btn language-btn" style={{ backgroundColor: '#5E35B6' }}>हरियाणवी <span>Haryanvi</span></Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LanguagePopup;
