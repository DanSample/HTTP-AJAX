import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Click Me
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add a Friend</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input placeholder="Friend's name" />
              </FormGroup>
              <FormGroup>
                <Label>Age</Label>
                <Input placeholder="Friend's age" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input placeholder="Friend's email" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Add Friend
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
