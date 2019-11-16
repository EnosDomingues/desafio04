import React from 'react';
import './Feed.css';
import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';

function Feed() {
  return (
    <div id="feed">
        <ul>
          <li>
            <div className="feed-component">
              <div className="feed-header">
              <img src={avatar} /> 
              <div className="content">
                <strong>Júlio Alcantara</strong>
                <small>04 Jun 2019</small>
              </div>
              </div>
             <div className="feed-text">
              <span>Pessoal, alguém sabe se a Rocketseat está contratando?</span>
             </div>
             <hr />
             <div className="feed-header">
             <img src={avatar2} /> 
              <div className="feed-comments">
                <div className="comment">
                  <span className="comment-text">
                  <strong>Diego Fernandes</strong> A Rocketseat está 
                  sempre em busca de novos membros 
                  para o time, e geralmente ficamos 
                  de olho em quem se destaca no Bootcamp, 
                  inclusive 80% do nosso time de devs é composto 
                  por alunos do Bootcamp. Além disso, se você tem 
                  vontade de ensinar gravando vídeos e criando posts, 
                  pode me chamar no Discord! (Sério, me chamem mesmo, 
                  esse comentário é real)
                  </span>
                </div>
              </div>
            </div>
            </div>
          </li>
          <li>
            <div className="feed-component">
              <div className="feed-header">
              <img src={avatar} /> 
              <div className="content">
                <strong>Júlio Alcantara</strong>
                <small>04 Jun 2019</small>
              </div>
              </div>
             <div className="feed-text">
              <span>Pessoal, alguém sabe se a Rocketseat está contratando?</span>
             </div>
             <hr />
             <div className="feed-header">
             <img src={avatar2} /> 
              <div className="feed-comments">
                <div className="comment">
                  <span className="comment-text">
                  <strong>Diego Fernandes</strong> A Rocketseat está 
                  sempre em busca de novos membros 
                  para o time, e geralmente ficamos 
                  de olho em quem se destaca no Bootcamp, 
                  inclusive 80% do nosso time de devs é composto 
                  por alunos do Bootcamp. Além disso, se você tem 
                  vontade de ensinar gravando vídeos e criando posts, 
                  pode me chamar no Discord! (Sério, me chamem mesmo, 
                  esse comentário é real)
                  </span>
                </div>
              </div>
            </div>
            </div>
          </li>
          <li>
            <div className="feed-component">
              <div className="feed-header">
              <img src={avatar} /> 
              <div className="content">
                <strong>Júlio Alcantara</strong>
                <small>04 Jun 2019</small>
              </div>
              </div>
             <div className="feed-text">
              <span>Pessoal, alguém sabe se a Rocketseat está contratando?</span>
             </div>
             <hr />
             <div className="feed-header">
             <img src={avatar2} /> 
              <div className="feed-comments">
                <div className="comment">
                  <span className="comment-text">
                  <strong>Diego Fernandes</strong> A Rocketseat está 
                  sempre em busca de novos membros 
                  para o time, e geralmente ficamos 
                  de olho em quem se destaca no Bootcamp, 
                  inclusive 80% do nosso time de devs é composto 
                  por alunos do Bootcamp. Além disso, se você tem 
                  vontade de ensinar gravando vídeos e criando posts, 
                  pode me chamar no Discord! (Sério, me chamem mesmo, 
                  esse comentário é real)
                  </span>
                </div>
              </div>
            </div>
            </div>
          </li>
          <li>
            <div className="feed-component">
              <div className="feed-header">
              <img src={avatar} /> 
              <div className="content">
                <strong>Júlio Alcantara</strong>
                <small>04 Jun 2019</small>
              </div>
              </div>
             <div className="feed-text">
              <span>Pessoal, alguém sabe se a Rocketseat está contratando?</span>
             </div>
             <hr />
             <div className="feed-header">
             <img src={avatar2} /> 
              <div className="feed-comments">
                <div className="comment">
                  <span className="comment-text">
                  <strong>Diego Fernandes</strong> A Rocketseat está 
                  sempre em busca de novos membros 
                  para o time, e geralmente ficamos 
                  de olho em quem se destaca no Bootcamp, 
                  inclusive 80% do nosso time de devs é composto 
                  por alunos do Bootcamp. Além disso, se você tem 
                  vontade de ensinar gravando vídeos e criando posts, 
                  pode me chamar no Discord! (Sério, me chamem mesmo, 
                  esse comentário é real)
                  </span>
                </div>
              </div>
            </div>
            </div>
          </li>
        </ul>
    </div>
  );
}

export default Feed;