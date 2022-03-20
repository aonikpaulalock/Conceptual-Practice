import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
  const {description, image, category} = props.product || {};
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <div>
          <Button variant="success" onClick={handleShow}>
            Details
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h2 className='text-success fw-bold text-center'>Products Details</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>
               <img src={image} alt="" className='w-50 d-block mx-auto p-2' />
                  <h2 className='fw-bold text-center text-success'>{category}</h2>
                <p className='fw-bold text-center text-muted'>{description}</p>
               </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose} className="d-block mx-auto">
                Delete Details
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }

export default ReactModal;