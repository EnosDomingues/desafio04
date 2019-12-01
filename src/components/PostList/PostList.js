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
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
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