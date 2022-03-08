import headerImg from '../assets/Header.jpeg';
import ImgMe from '../assets/ME.jpeg';

class HeaderApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{

        }
		
		span{
            color: var(--color--span);
            font-weight: var(--text--bold);
            letter-spacing: var(--text--spacing);
        }

        .header 
        .header__picture 
        .header__picture--img {
            width: 100%;
            height:300px;
            object-fit: cover;
            font-size: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius:1rem;
        }

        .me{
            position:relative;
            width:100%;
            height:5rem;
        }

		.me
        .me__picture{
            position:absolute;
            top:-10rem;
            left:5rem
        }

        .me
        .me__picture 
        .me__picture--img{
            width: 15rem;
            height:15rem;
            object-fit: cover;
            border-radius:50%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            
        }

		.me 
		.me__button{
			background-color:transparent;
			border:none;
			position:absolute;
			right:0;
			margin:.5rem;
			transition: 1.5s ;
			border-radius:1rem;
			padding:1rem;
		}
		
		.me
		.me__button
		.me__button--contact{
			padding:.3rem;
		}

		.info 
		.info__name
		.info__name--dav{
			transition: 1.5s ;
			padding:1rem;
			border-radius:1rem;
		}

		.me
		.me__button:hover,
		.info__name--dav:hover {
			background-color: var(--background--section--secondary);
			border:none;
			border-radius:1rem;
			cursor:pointer;
		}
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${HeaderApp.styles}</style>
    <div class='container'>
        <div class='renderHeader'>
           <header class='header'>
                <picture class='header__picture'>
                    <img src="${headerImg}" alt="headerItsDavidev" class='header__picture--img'/>
                </picture>
           </header>
           <section class='mainMe'>
                <header class='me'>
                    <picture class='me__picture'>
                        <img src='${ImgMe}' alt="David Lezama" class='me__picture--img' />
                    </picture>
                    <button class='me__button'>
                        <span class='me__button--contact'>
                            contacta conmigo
                        </span>
                    </button>
                </header>
                <div class='info'>
                	<p class='info__name'>
                        Brayan David Lezama Trejo <span class='info__name--dav'>@ItsDavidev</span>
                	</p>
                	<p class='info__position'>
                        Desarrollador Web Frontend
                	</p>
                </div>
           </section>
        </div>
    </div>
    `;
  }
}
customElements.define('header-app', HeaderApp);
