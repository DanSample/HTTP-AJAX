import React from 'react';
import Friend from './Components/Friend';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
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

  render() {
    return (
      <div className="App">
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
