import React from 'react';

function Comment({ author, avatar, content }) {
  return (
    <li>
      <div className="feed-header">
        <img src={avatar} />
        <div className="feed-comments">
          <div className="comment">
            <span className="comment-text">
              <strong>{author}</strong> 
              {content}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}


export default Comment;