import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  render() {
    const getRando = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/');
        // const good = JSON.stringify(res);
        console.log(res.data.results[0].gender);
        const gender = res.data.results[0].gender;
        return gender;
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className='App'>
        <header className='App-header'>
          <p className='text-large'>Playing around with Missive integrations.</p>
          <p>{getRando()}</p>
        </header>
      </div>
    );
  }
}

export default App;
