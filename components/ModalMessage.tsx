import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

type ModalMessageProps = {
  titleToShow: string;
  messageToShow: string;
};

export default function ModalMessage(props: ModalMessageProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View full description
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.titleToShow}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.messageToShow}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
