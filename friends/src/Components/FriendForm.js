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

class FriendForm extends React.Component {
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
                <Input
                  type="text"
                  ref="name"
                  placeholder="Friend's name"
                  onChange={this.props.handleName}
                />
              </FormGroup>
              <FormGroup>
                <Label>Age</Label>
                <Input
                  type="text"
                  ref="age"
                  placeholder="Friend's age"
                  onChange={this.props.handleAge}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  ref="email"
                  placeholder="Friend's email"
                  onChange={this.props.handleEmail}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              color="primary"
              onClick={this.props.handleSubmit}
            >
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

export default FriendForm;
