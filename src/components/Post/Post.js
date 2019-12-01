import React from 'react';

import Comment from '../Comment/Comment'

function Post({ author, avatar, date, content, comments }) {
  return (
    <li>
      <div className="feed-component">
        <div className="feed-header">
        <img src={avatar} /> 
        <div className="content">
          <strong>{author}</strong>
          <small>{date}</small>
        </div>
        </div>
      <div className="feed-text">
        <span>{content}</span>
      </div>
      <hr />
      <ul>
      {comments.map(com => 
          <Comment 
          key={com.id}
          author={com.author.name}
          avatar={com.author.avatar}
          content={com.content}
          />)}
      </ul>
      </div>
    </li>
  );
}


export default Post;