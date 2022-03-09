import dblog from '../assets/projects/dblog.png';
import megithub from '../assets/projects/megithub.jpeg';
import galleryPage from '../assets/projects/gallerypage.png'
import davword from '../assets/projects/davword.png';
import davtion from '../assets/projects/davtion.png'
import web3login from '../assets/projects/web3login.png'
import davsock from '../assets/projects/davsock.png'

const projects = {
  dblog,
  megithub,
  galleryPage,
  davword,
  davtion,
  web3login,
  davsock
};

class CardProject extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{

        }
        img{
            width:100%;
            object-fit:cover;
            height:auto;
        }
        a{
            text-decoration:none;
            color:(--color--white);
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .container{
            margin:.5rem;
        }
        .renderCardProject{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
        }
        .card {
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(58, 80, 107, 0.75);
            width:400px;
            position: relative;
            display: block;
            min-height: 300px;
            height: 100%;  
            border-radius:2rem;
            overflow: hidden;
            color:white;
            text-decoration: none;
          }
          
          .card__picture---img {      
            width: 100%;
            height: auto;
            object-fit: cover;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .card__information {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            transform: translateY(100%);
            transition: .5s ease-in-out;
          }
          
          .card:hover .card__information {
            transform: translateY(0);
          }
          
          .card__information--header {
            position: relative;
            display: flex;
            align-items: center;
            gap: 2em;
            padding: 2em;
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(58, 80, 107, 0.75);
            border-radius: 1rem 1rem 0rem 0rem ;
            transform: translateY(-100%);
            transition: .5s ease-in-out;
          }
          
          .card__arc {
            width: 80px;
            height: 80px;
            position: absolute;
            bottom: 100%;
            right: 0;      
            z-index: 1;
          }
          
          .card:hover .card__information--header {
            transform: translateY(0);
          }
          
          .card__information--img {
            flex-shrink: 0;
            width: 50px;
            height: 50px;      
            border-radius: 50%;      
          }
          
          .card__information--name {
            font-size: 1em;
            margin:0.5 0;
            color: var(--color--span)
          }

          .card__description {
            padding: 0 2em 2em;
            margin: 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
          .btn__demo{
            background-color: var(--color--span);
            color: var(--color--white);
            padding: 0.5em 1em;
            border-radius: 0.5em;
            text-decoration: none;
            margin: 0.5em;
            text-align:center;
            font-size:1em;
            font-weight:bold;

          }

    `;
  }

  async getRepoGithub() {
    const response = await fetch(
      `https://api.github.com/repos/itsdavidev/${this.name}`
    )
      .then((res) => res.json())
      .then(async (data) => {
        const { description, homepage, svn_url, name, language, html_url } = data;
        return {
          description,
          homepage,
          svn_url,
          name,
          html_url,
          language,
        };
      });
    return response;
  }

  connectedCallback() {
    this.name = this.getAttribute('name');
    this.getRepoGithub().then((data) => {
      this.infoRepo = data;
      this.render();
    });
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${CardProject.styles}</style>
    <div class='container'>
     <section class='renderCardProject'>
        <article >
        <a href="${this.infoRepo?.homepage}" class="card">
        <picture class='card__picture'>
            <img 
            src="${projects[this.name]}" 
            class="card__picture---img" 
            alt="${this.name}" />
        </picture>
        <div class="card__information">
          <header class="card__information--header">                
            <img class="card__information--img" src="${megithub}" alt="itsDavidev" />
            <div class="card__information--text">
              <h3 class="card__information--name">${this.infoRepo?.name}</h3>
             <span>
             ${this.infoRepo?.language}
             </span>
            </div>
          </header>
          <footer>
            <p class="card__description">${this.infoRepo?.description}</p>
          </footer>
        </div>
      </a>    
        </article>   
        <a href="${this.infoRepo?.svn_url}" target="_blank" class='btn__demo'>
         demo    
        </a>
    </section>
        <slot></slot>
    </div>
    `;
  }
}
customElements.define('card-project', CardProject);
