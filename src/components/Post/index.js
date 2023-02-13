import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import remarkGmf from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax'
import rehypeStringify from 'rehype-stringify'

import $ from "jquery";

import './style.css';
import * as URLS from '../../constants/blogUrls';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostNotFoundPage from '../PostNotFound';

import highlightCode from '../../util/CodeHighlighter';


const getContentsOfFileFromURL = url => {
  var result = null;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'text',
    async: false,
    success: function(data) {
      result = data;
    }
  });
  return result;
}

const getJsonFromURL = url =>
  JSON.parse(getContentsOfFileFromURL(url));

const loadPostMarkdown = postId =>
  getContentsOfFileFromURL(URLS.POSTS_FOLDER + `/${postId}/index.md`);

const loadPostMetadata = postId =>
  loadMetadataOfAllPosts().find(post => post.id === postId);

export const loadMetadataOfAllPosts = () =>
  getJsonFromURL(URLS.POSTS_METADATA_FILE);

const preprocessPostMarkdown = (markdown, postId) => {
  markdown = removeFirstHeader(markdown);
  markdown = fixRelativeImagePaths(markdown, postId);
  return markdown;
};

const removeFirstHeader = (html) => {
  // First # header is a title of the post. We will replace it with our own
  // custom title block - with title, date, author, etc.
  return html.replace(/^#\s(.+)/, '');
};

const fixRelativeImagePaths = (markdown, postId) => {
  return markdown.replace(/(!\[.*?\]\()/g, `$1${URLS.POSTS_FOLDER}/${postId}/`);
};


export default function PostPage() {

  let { id } = useParams();

  const metadata = loadPostMetadata(id);

  if (metadata === undefined)
    return <PostNotFoundPage id={id} />;

  var markdown = loadPostMarkdown(id);
  markdown = preprocessPostMarkdown(markdown, id);

  const markdownComponents = {
    code: highlightCode
  };

  return(
    <div>
      <PostHeader title={metadata.title} date={metadata.datePublished} />
      <div id='post-content' className='container'>
        <ReactMarkdown
          remarkPlugins={[remarkGmf,remarkMath]}
          rehypePlugins={[rehypeMathjax,rehypeStringify]}
          components={markdownComponents}
          children={markdown} />
      </div>
      <PostFooter />
    </div>
  )
}
