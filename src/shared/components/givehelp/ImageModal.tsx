

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { styled, Box } from '@mui/system';
//import ModalUnstyled from '@mui/base/ModalUnstyled';


// const StyledModal = styled(ModalUnstyled)`
//   position: fixed;
//   z-index: 1300;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Backdrop = styled('div')`
//   z-index: -1;
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   -webkit-tap-highlight-color: transparent;
// `;

// const style = {
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   p: 2,
//   px: 4,
//   pb: 3,
// };

export default function ImageModal({ setOpenModal, onClose }) {
return (
    <>
        <Modal fullscreen={true} aria-labelledby="contained-modal-title-vcenter" centered show={setOpenModal} onHide={onClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
}
