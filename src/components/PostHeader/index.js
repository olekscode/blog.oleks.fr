import React from 'react';

import githubLogo from "../../img/github.svg";
import twitterLogo from "../../img/twitter.svg";

import * as MYSELF from '../../constants/myself';

class PostHeader extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.date = props.date;
  }

  render() {
    return (
      <div id="post-header">
        <h1>{this.title}</h1>
        <div id="author-info">
          <div id="author-image-name-date">
            <div id="author-image"><a href={MYSELF.WEBSITE}><img src="../../img/profile.jpg" alt=""/></a></div>
            <div id="author-name-date">
              <div id="author-name"><a href={MYSELF.WEBSITE}>{MYSELF.NAME}</a></div>
              <div id="date-published">{this.date} &middot; 5 min read</div>
            </div>
          </div>
          <div id="social-media-icons">
            <a href={MYSELF.GITHUB}><img src={githubLogo} alt="GitHub logo" /></a>
            <a href={MYSELF.TWITTER}><img src={twitterLogo} alt="GitHub logo" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default PostHeader;
