import React from 'react';

import Comment from '../Comment/Comment'

function Post({ author, avatar, date, content, comments }) {
  return (
    <>
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
        <div className="feed-header">
      <ul id="ul-comment">
        {comments.map(com =>
          <Comment
            key={com.id}
            author={com.author.name}
            avatar={com.author.avatar}
            content={com.content}
          />)}
      </ul>
    </div>

      </div>
    </li>
    </>
  );
}


export default Post;
