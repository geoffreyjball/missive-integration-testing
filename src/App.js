import React, { Component } from 'react';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Playing around with Missive integrations.</p>
        </header>
      </div>
    );
  }
}

export default App;
