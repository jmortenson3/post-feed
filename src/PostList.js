import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      didError: false
    }
  }

  componentDidMount() {
    this.fetchPosts('https://jsonplaceholder.typicode.com/posts');
  }

  fetchPosts(url) {
    this.setState({ isLoading: true });

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(`Bad response: ${res.status}`);
        }
        return res;
      })
      .then(res => {
        return res.json();
      })
      .then(posts => {
        this.setState({ posts });
      })
      .catch(err => {
        this.setState({ didError: true });
      });
  }

  render() {
    const postItems = this.state.posts.map(post =>
      <Post key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body} />
    );
    return (
        <div className="row justify-content-sm-center">
          <ul className="col-sm-6">
            {postItems}
          </ul>
        </div>
    );
  }
}

export default PostList;