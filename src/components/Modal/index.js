import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Thank You !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h4>Your Order Has Been Placed !</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="w-auto btn-danger" onClick={props.onHide}>
          <Link to="/"> Close </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
