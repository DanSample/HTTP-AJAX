import React from 'react';
import Friend from './Components/Friend';
import FriendForm from './Components/FriendForm';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState(() => ({ friends: res.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleAge = e => {
    this.setState({
      age: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const name = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios.post(`http://localhost:5000/friends`, name).then(res => {
      this.setState(() => ({ friends: res.data }));
    });
  };

  render() {
    return (
      <div className="App">
        <FriendForm
          handleName={this.handleName}
          handleAge={this.handleAge}
          handleEmail={this.handleEmail}
          handleSubmit={this.handleSubmit}
        />
        {this.state.friends.map(friend => (
          <div className="friend-container" key={friend.id}>
            <Friend key={friend.id} friend={friend} />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
