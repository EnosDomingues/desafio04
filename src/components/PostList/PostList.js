import React, { Component } from 'react';

import Post from '../Post/Post'

import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';

class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatar2
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return(
      <div id="post-list">
        <ul>
          {this.state.posts.map(post => 
          <Post 
          key={post.id}
          author={post.author.name}
          avatar={post.author.avatar}
          date={post.date}
          content={post.content}
          comments={post.comments}
          />)}
        </ul>
      </div>
    );
  }
}

export default PostList;