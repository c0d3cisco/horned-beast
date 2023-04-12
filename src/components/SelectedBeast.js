
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export default class SelectedBeast extends Component {

  render() {
    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.props.show} 
      onHide={this.props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.imgObj.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={this.props.imgObj.image_url} alt={this.props.imgObj.description} title={this.props.imgObj.title} rounded fluid/>
        <p>{this.props.imgObj.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    );
  }
}



