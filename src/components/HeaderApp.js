import './AboutMe'
import headerImg from '../assets/pages/Header.jpeg';
import ImgMe from '../assets/pages/ME.jpeg';
class HeaderApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/ `
        :host{

        }
		
        *{
            padding:0;
            margin:0;
            box-sizing: border-box;
        }

        .container{
            min-height:100vh;
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            overflow: hidden;
        }
		.span__style{
            color: var(--color--span);
            font-weight: var(--text--bold);
            letter-spacing: var(--text--spacing);
        }

        .shadow__img{
            box-shadow: var(--box--shadow);
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
            border:2px solid var(--background--primary)
        }

		.me 
		.me__button{
			background-color:transparent;
			border:none;
			position:absolute;
			right:0;
            margin:.5rem 0;
			transition: 1.5s ;
			border-radius:1rem;
			padding:.5rem;
            text-decoration:none;
		}
		
		.me
		.me__button
		.me__button--contact{
			padding:.5rem;
		}

		.info 
		.info__name
		.info__name--dav{
            text-decoration:none;
            color:var(--color--span);
			transition: 1.5s ;
			padding:.5rem;
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
        @media (min-width:300px) and ( max-width:768px) {
            .me__picture--img{
                width: 100%;
                height:150px;
                margin:0;
                padding:0;
            }
            .me{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center; 
            }
            .me 
            .me__button{
                position: relative;
                top:50px;
            }
            .info{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top:3rem;
            }
            .info
            .info__name{
                font-size:1.2rem;
                text-align:center;
            }
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
                    <img src="${headerImg}" alt="headerItsDavidev" class='header__picture--img shadow__img'/>
                </picture>
           </header>
           <section class='mainMe'>
                <header class='me'>
                    <picture class='me__picture'>
                        <img src='${ImgMe}' alt="David Lezama" class='me__picture--img shadow__img' />
                    </picture>
                    <a 
                    href='https://www.linkedin.com/in/david-lezama-t/' 
                    target='_blank' 
                    class='me__button'
                    >
                        <h2 class='me__button--contact span__style'>
                            contacta conmigo
                        </h2>
                    </a>
                </header>
                <div class='info'>
                	<h1 class='info__name'>
                        Brayan David Lezama Trejo 
                        <a 
                        href='https://github.com/itsDavidev' 
                        target="_blank" 
                        class='info__name--dav span__style'
                        >
                        @ItsDavidev
                        </a>
                	</h1>
                	<p class='info__position'>
                        Desarrollador Web Frontend
                	</p>
                </div>
           </section>
           <about-app></about-app>
        </div>
    </div>
    `;
    }
}
customElements.define('header-app', HeaderApp);
