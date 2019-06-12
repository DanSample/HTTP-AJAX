import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';

const Friend = props => {
  const { name, age, email } = props.friend;
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body className="text-center">
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{age}</CardSubtitle>
              <CardText>{email}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Friend;
