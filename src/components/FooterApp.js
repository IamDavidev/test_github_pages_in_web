import linkedin from '../assets/footer/socials/likedin.svg';
import github from '../assets/footer/socials/github.svg';
import twitter from '../assets/footer/socials/twitter.svg';
import instagram from '../assets/footer/socials/instagram.svg';

class FooterApp extends HTMLElement {
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
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
}
.renderFooter{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:1rem;
    margin: auto;
    margin-top:3rem;
    backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(58, 80, 107, 0.75);
            border-radius: 1rem;
}
img{
  width:3rem;
  margin:1rem;
}
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${FooterApp.styles}</style>
 <div class='container'>
     <div class='renderFooter'>
        <footer class='socials'>    
          <a href="https://www.linkedin.com/in/david-lezama-t/">
            <img src="${linkedin}" alt="likedin"  />
          </a>
          <a href="https://www.instagram.com/itsdavidev/">
            <img src="${instagram}" alt="instagram"  />
          </a>
          <a href="https://twitter.com/itsDavidev">
            <img src="${twitter}" alt="twiter"  />
          </a>
          <a href="https://github.com/itsDavidev">
            <img src="${github}" alt="github"  />
          </a>
        </footer>
     </div>
        <slot></slot>
</div>
    `;
  }
}
customElements.define('footer-app', FooterApp);
