import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap'
import './App.css';

class App extends Component {
  state = {
    visible: true
  }

  onDismiss = () => this.setState({visible: false})

  render() {
    return (
      <div>
        <UncontrolledAlert color="info">
          I am an alert and I can be dismissed!
        </UncontrolledAlert>
      </div>
    );
  }
}

export default App;
