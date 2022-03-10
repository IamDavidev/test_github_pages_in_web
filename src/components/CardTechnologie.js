import js from '../assets/technologies/js.svg';
import css from '../assets/technologies/css.svg';
import html from '../assets/technologies/html.svg';
import react from '../assets/technologies/react.svg';
import nodejs from '../assets/technologies/nodejs.svg';
import webcomponents from '../assets/technologies/webcomponents.svg';
import ts from '../assets/technologies/ts.svg';
import sass from '../assets/technologies/sass.svg';
import tailwind from '../assets/technologies/tailwind.svg';
import postcss from '../assets/technologies/postcss.svg';
import axios from '../assets/technologies/axios.svg';
import graphql from '../assets/technologies/graphql.svg';
import cssmodules from '../assets/technologies/cssmodules.png';
import figma from '../assets/technologies/figma.svg';
import firebase from '../assets/technologies/firebase.svg';
import mongodb from '../assets/technologies/mongodb.svg';
import git from '../assets/technologies/git.svg';
import github from '../assets/technologies/github.svg';
import mysql from '../assets/technologies/mysql.svg';
import strapi from '../assets/technologies/strapi.svg';
import vue from '../assets/technologies/vue.svg';

const technologiesIcons = {
  js,
  html,
  css,
  react,
  webcomponents,
  nodejs,
  ts,
  sass,
  tailwind,
  postcss,
  axios,
  graphql,
  cssmodules,
  figma,
  firebase,
  mongodb,
  git,
  github,
  mysql,
  strapi,
  vue,
};

class CardTechnologie extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{
          --box-shadow--technologies: 0px 0px 10px 0px rgba(0,0,0,0.75);
        }
        * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        }
        .card{
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(58, 80, 107, 0.75);
            border-radius: 1rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:8rem;
            max-width:8rem;
            box-shadow: var(--box-shadow--technologies);
            margin:1rem;
            min-height:200px;
            overflow: hidden;
        }
       
        .card 
        .card__header
        .card__header--img{
            width: 100%;
            max-width:6rem;
            border-radius: 1rem;
            margin:1rem;
        }
        .card 
        .card__footer{
            margin-bottom:.5rem;
        }
        .card 
        .card__footer
        .card__foooter--span{
            text-transform:uppercase;
            font-size:1rem;
            color:var(--color--span)
        }
        @media (min-width:300px) and (max-width:600px){
          .container{
                        .card{
              width:300px;
              
            }
          }
      }
    `;
  }

  connectedCallback() {
    this.tec = this.getAttribute('tec');
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${CardTechnologie.styles}</style>
    <div class='container'>
        <article class='card'>
            <header class='card__header'>
                <img src="${technologiesIcons[this.tec]}" alt="" class="card__header--img" />
            </header>
            <footer class='card__footer'>
                <span class='card__foooter--span'>
                ${this.tec}
                </span>
            </footer>
        </article>
    </div>
    `;
  }
}
customElements.define('card-technologie', CardTechnologie);
