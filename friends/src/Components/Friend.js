import React from 'react';
import { Card } from 'reactstrap';

const Friend = props => {
  const { name, age, email } = props.friend;
  return (
    <Card>
      <div className="name-wrapper">
        <h1>{name}</h1>
      </div>
      <div className="age-wrapper">
        <h3>{age}</h3>
      </div>
      <div className="email-wrapper">
        <h3>{email}</h3>
      </div>
    </Card>
  );
};

export default Friend;
