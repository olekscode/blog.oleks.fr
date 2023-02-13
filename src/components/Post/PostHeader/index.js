import React from 'react';

import './style.css';


class PostHeader extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.date = props.date;
  }

  render() {
    return (
      <div id='post-header'>
        <div className='container'>
          <h1>{this.title}</h1>
          <div id='date-published'>{this.date} &#9472; 5 min read</div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default PostHeader;
