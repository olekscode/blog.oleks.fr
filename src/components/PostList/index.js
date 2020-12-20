import React from 'react';
import { loadMetadataOfAllPosts } from '../Post';


class PostListPage extends React.Component {
  render() {
    const postsMetadata = loadMetadataOfAllPosts();

    const posts = postsMetadata.map(post =>
      <li><a href={post.id}>{post.title}</a></li>
    );

    return (
      <div>
        <h1>My Stories</h1>
        <ul id="list-of-posts">{posts}</ul>
      </div>
    );
  }
}


export default PostListPage;
