import aboutMe from '../assets/pages/AboutMe.jpeg';

class AboutApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{

        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .container{
          margin:5rem 0; 
        }
        .renderAbout{
            display:flex;
            justify-content:center;
            align-items:center;
            margin:2rem;
            position:relative;
        }

        .about__text{
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(58, 80, 107, 0.75);
            border-radius: 1rem;
            margin:1rem;
            position:absolute;
            right:10rem;
            box-shadow:var(--box--shadow)
        }


        .about__text 
        .about__text--sobre{
            width:30ch;
            padding:1rem;
        }
        img{
            width: 350px;
            border-radius: 1rem;

        }
        .about__picture 
        .about__picture--img{
            box-shadow:var(--box--shadow);
        }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${AboutApp.styles}</style>
 <div class='container'>
  <title-app section='Sobre Mi'></title-app>
     <div class='renderAbout'>
            <picture class='about__picture'>
                <img src="${aboutMe}" alt="aboutMe" class='about__picture--img' />
            </picture>
            <div class="about__text">
                <p class='about__text--sobre'>
                Soy un un desarollador y
                programador autodidacta
                apasionado por la tecnología.
                Me gusta aprender nuevas
                tecnologias y aprender
                de los demas.
                </p>
                <p class='about__text--sobre'>
                  Estoy en la búsqueda de
                  una empresa que me permita
                  desarrollar y mejorar mis
                  habilidades.

                </p>
            </div>
     </div>
        <slot></slot>
</div>
    `;
  }
}
customElements.define('about-app', AboutApp);
