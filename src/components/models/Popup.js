import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class Popup extends React.Component {
  render() {
    const { showPopup, togglePopup, removeItem } = this.props;
    return (
      <Modal show={showPopup} onHide={togglePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={togglePopup}>
            Close
          </Button>
          <Button variant="primary" onClick={removeItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
