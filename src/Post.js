import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didError: false,
      username: '',
      name: ''
    };
  }

  componentDidMount() {
    this.fetchUser(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`);
  }

  // method to get post comments, fetch
  fetchComments(url) {

  }

  // method to get this post's OP.
  fetchUser(url) {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(`Bad response ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        this.setState({ username: data.username, name: data.name });
      })
      .catch(err => {
        this.setState({ didError: true });
      });
  }

  render() {
    return (
      <div className="card" style={{}}>
        <div className="card-body">
          <p className="card-title">User {this.state.username}  |  {this.state.name}</p>
          <p className="card-subtitle mb-2 text-muted">{this.props.title}</p>
          <p className="card-body">{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;