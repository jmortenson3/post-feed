import React, { Component } from 'react';
import Header from './Header';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="App">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
