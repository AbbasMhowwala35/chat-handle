import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import logo from '../../images/logo.svg'
import Glogo from '../../images/google.svg'
const GoogleLoginPopup = ({ }) => {
    return (
        <Modal className='language-popup-main' show={show} onHide={handleClose} centered>
            <Modal.Body className="text-center">
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={logo} alt="Phone Par Loan Logo" className="popup-logo" />
                    <p>Avail personal loans from ₹5K to ₹10L in minutes!</p>
                    <Button type='button' className='btn google-login'>
                        Connect with google </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default GoogleLoginPopup;
