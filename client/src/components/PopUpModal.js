import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class PopUpModal extends React.Component {
    renderButtons = () => {
        const buttons = [];
        Object.entries(this.props.choices).map(([keyName, keyIndex]) => {
            buttons.push(
                <Button onClick={keyIndex}>{keyName}</Button>
            )
        })
        buttons.pop();
        buttons.push(
            <Button onClick={this.props.closePopUpModal}>No, Do not delete round</Button>
        )

        return buttons;
    }

    render() {
        return (
            <Modal show={this.props.showPopUpModal} onHide={this.props.closePopUpModal}>
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.props.text}</p>
                </Modal.Body>

                <Modal.Footer>
                    {this.renderButtons()}
                </Modal.Footer>
                
            </Modal>
        )
    }
}

export default PopUpModal;