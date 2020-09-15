import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  render() {
    const state = [];
    axios({
      url: 'https://api-us-west-2.graphcms.com/v2/ckf44qtb00j3u01xr6osoacb8/master',
      method: 'post',
      data: {
        query: `
          query {
            posts(
              stage:PUBLISHED
            ) {
              id
              title
              slug
            }
          }
        `,
      },
    }).then(result => {
      // console.log(result.data.data.posts);
      const items = result.data.data.posts.map(post => {
        return <li key={post.id}>{post.title}</li>;
      });
      console.log(items);
    });

    return (
      <div className='App'>
        <header className='App-header'>
          <p className='text-large'>Playing around with Missive integrations.</p>
          <ul>{items}</ul>
        </header>
      </div>
    );
  }
}

export default App;
