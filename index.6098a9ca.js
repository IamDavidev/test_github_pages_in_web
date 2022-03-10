const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};x();var _="/portfolioweb/AboutMe.200f71e4.jpeg";class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
        @media (min-width:300px) and (max-width:768px){
          .img{
            width:100%;
          }
          .renderAbout{
            flex-direction:column;
          }
          .about__text{
            margin:0;
            padding:1rem;
            right:0;
            left:0;
            bottom:0;
            width:100%;
          }
          .about__text
          .about__text--sobre{
            width:100%;
            padding:0;
            margin:0;
          }
        }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${n.styles}</style>
 <div class='container'>
  <title-app section='Sobre Mi'></title-app>
     <div class='renderAbout'>
            <picture class='about__picture'>
                <img src="${_}" alt="aboutMe" class='about__picture--img' />
            </picture>
            <div class="about__text">
                <p class='about__text--sobre'>
                Soy un un desarollador y
                programador autodidacta
                apasionado por la tecnolog\xEDa.
                Me gusta aprender nuevas
                tecnologias y aprender
                de los demas.
                </p>
                <p class='about__text--sobre'>
                  Estoy en la b\xFAsqueda de
                  una empresa que me permita
                  desarrollar y mejorar mis
                  habilidades.

                </p>
            </div>
     </div>
        <slot></slot>
</div>
    `}}customElements.define("about-app",n);var w="/portfolioweb/Header.f1c750a9.jpeg",y="/portfolioweb/ME.93d4ef3a.jpeg";class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${s.styles}</style>
    <div class='container'>
        <div class='renderHeader'>
           <header class='header'>
                <picture class='header__picture'>
                    <img src="${w}" alt="headerItsDavidev" class='header__picture--img shadow__img'/>
                </picture>
           </header>
           <section class='mainMe'>
                <header class='me'>
                    <picture class='me__picture'>
                        <img src='${y}' alt="David Lezama" class='me__picture--img shadow__img' />
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
    `}}customElements.define("header-app",s);var k="/portfolioweb/dblog.be74899b.png",u="/portfolioweb/megithub.440af420.jpeg",j="/portfolioweb/gallerypage.9d4a250d.png",M="/portfolioweb/davword.d66818ee.png",$="/portfolioweb/davtion.70e04cc9.png",L="/portfolioweb/web3login.4976be80.png",z="/portfolioweb/davsock.2f1c1383.png",E="/portfolioweb/agencypage.08a9e29a.png",T="/portfolioweb/ecomercefrontend.7de3ff66.png";const H={dblog:k,megithub:u,galleryPage:j,davword:M,davtion:$,web3login:L,davsock:z,agencypage:E,ecomercefrontend:T};class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
          .JavaScript{
            color:var(--color--js)
          }
          .TypeScript{
            color:var(--color--ts);
          }
          .CSS{
            color:var(--color--css);
          }
          @media (min-width:300px) and (max-width:768px) {
            .card{
              width:250px
            }
          }

    `}async getRepoGithub(){return await fetch(`https://api.github.com/repos/itsdavidev/${this.name}`).then(o=>o.json()).then(async o=>{const{description:i,homepage:e,svn_url:t,name:a,language:f,html_url:v}=o;return{description:i,homepage:e,svn_url:t,name:a,html_url:v,language:f}})}connectedCallback(){this.name=this.getAttribute("name"),this.getRepoGithub().then(r=>{this.infoRepo=r,this.render()})}render(){var r,o,i,e,t,a;this.shadowRoot.innerHTML=`
        <style>${c.styles}</style>
    <div class='container'>
     <section class='renderCardProject'>
        <article >
        <a href="${(r=this.infoRepo)==null?void 0:r.homepage}" class="card" target="_blank">
        <picture class='card__picture'>
            <img 
            src="${H[this.name]}" 
            class="card__picture---img" 
            alt="${this.name}" />
        </picture>
        <div class="card__information">
          <header class="card__information--header">                
            <img class="card__information--img" src="${u}" alt="itsDavidev" />
            <div class="card__information--text">
              <h3 class="card__information--name">${(o=this.infoRepo)==null?void 0:o.name}</h3>
             <span class="${(i=this.infoRepo)==null?void 0:i.language}">
             ${(e=this.infoRepo)==null?void 0:e.language}
             </span>
            </div>
          </header>
          <footer>
            <p class="card__description">${(t=this.infoRepo)==null?void 0:t.description}</p>
          </footer>
        </div>
      </a>    
        </article>   
        <a 
        href="${(a=this.infoRepo)==null?void 0:a.svn_url}" t
        arget="_blank" 
        class='btn__demo'
        >
         demo    
        </a>
    </section>
        <slot></slot>
    </div>
    `}}customElements.define("card-project",c);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
        :host{

         }
         * {
         box-sizing: border-box;
          margin: 0;
         padding: 0;
        }
        
        .renderProjects{
            display:grid;
            grid-template-columns:repeat(2,1fr);
        }
        @media (min-width:300px) and (max-width:768px){
            .renderProjects{
                display:flex;
                flex-wrap:wrap;
                justify-content:center;
                align-items:center;
            }
        }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${d.styles}</style>
    <div class='container'>
        <title-app section='proyectos'></title-app>
        <div class='renderProjects'>
            <card-project name='dblog'></card-project>
            <card-project name='galleryPage'></card-project>
            <card-project name='davword'></card-project>
            <card-project name='davsock'></card-project>
            <card-project name='web3login'></card-project>
            <card-project name='davtion'></card-project>
            <card-project name='ecomercefrontend'></card-project>
            <card-project name='agencypage'></card-project>
        </div>
        <slot></slot>
    </div>
    `}}customElements.define("projects-app",d);var R="/portfolioweb/js.3691c274.svg",S="/portfolioweb/css.1d9e56c8.svg",C="/portfolioweb/html.d4dc8538.svg",q="/portfolioweb/react.5e92e61d.svg",A="/portfolioweb/nodejs.e3af091e.svg",P="/portfolioweb/webcomponents.0a021d74.svg",D="/portfolioweb/ts.f2ca562b.svg",I="/portfolioweb/sass.4741bb38.svg",F="/portfolioweb/tailwind.da161fa0.svg",O="/portfolioweb/postcss.78b716d3.svg",N="/portfolioweb/axios.73077a8f.svg",Y="/portfolioweb/graphql.ae7c19c7.svg",G="/portfolioweb/cssmodules.b2b27378.png",B="/portfolioweb/figma.88f097f3.svg",J="/portfolioweb/firebase.75e8d3bc.svg",K="/portfolioweb/mongodb.ef34064c.svg",W="/portfolioweb/git.d59a2cfd.svg",Q="/portfolioweb/github.e89b5769.svg",U="/portfolioweb/mysql.4498ab27.svg",V="/portfolioweb/strapi.fcf8205f.svg",X="/portfolioweb/vue.2cbec2c1.svg";const Z={js:R,html:C,css:S,react:q,webcomponents:P,nodejs:A,ts:D,sass:I,tailwind:F,postcss:O,axios:N,graphql:Y,cssmodules:G,figma:B,firebase:J,mongodb:K,git:W,github:Q,mysql:U,strapi:V,vue:X};class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.tec=this.getAttribute("tec"),this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${l.styles}</style>
    <div class='container'>
        <article class='card'>
            <header class='card__header'>
                <img src="${Z[this.tec]}" alt="" class="card__header--img" />
            </header>
            <footer class='card__footer'>
                <span class='card__foooter--span'>
                ${this.tec}
                </span>
            </footer>
        </article>
    </div>
    `}}customElements.define("card-technologie",l);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
        :host{

    }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
    } 
    .container{
        margin: 3rem 12rem;
    }

    .container
    .renderTechnologiesApp{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:2rem;
        flex-wrap:wrap;
    }
    @media (min-width:300px) and (max-width:600px){
        .container{
            margin: 1rem .3rem;
        }
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${p.styles}</style>
 <div class='container'>
        <title-app section='Tecnologias '>
        </title-app>
     <div class='renderTechnologiesApp'>
        <card-technologie tec='js'></card-technologie>
        <card-technologie tec='html'></card-technologie>
        <card-technologie tec='css'></card-technologie>
        <card-technologie tec='react'></card-technologie>
        <card-technologies tec='ts'></card-technologies>
        <card-technologie tec='postcss'></card-technologie>
        <card-technologie tec='sass'></card-technologie>
        <card-technologie tec='tailwind'></card-technologie>
        <card-technologie tec='mongodb'></card-technologie>
        <card-technologie tec='firebase'></card-technologie>
        <card-technologie tec='strapi'></card-technologie>
        <card-technologie tec='mysql'></card-technologie>
        <card-technologie tec='graphql'></card-technologie>
        <card-technologie tec='axios'></card-technologie>
        <card-technologie tec='vue'></card-technologie>
        <card-technologie tec='figma'></card-technologie>
        <card-technologie tec='git'></card-technologie>
        <card-technologie tec='github'></card-technologie>
        <card-technologie tec='webcomponents'></card-technologie>
        <card-technologie tec='nodejs'></card-technologie>
     </div>
        <slot></slot>
</div>
    `}}customElements.define("technologie-app",p);class m extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
        font-size:2rem;
        margin:2rem;
        }
        .container--title{
            background: none;
            font-weight:bold;
            color:#5bc0be;
            letter-spacing:10px;
            border-bottom:1px solid #5bc0be;
        }
        @media(min-width:300px) and (max-width:768px) {
            .container--title{
                letter-spacing:1px;
            }
            .container{
                font-size:1.2rem;
                text-align:center;
                margin:0;
            }
        }
    `}connectedCallback(){this.section=this.getAttribute("section"),this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${m.styles}</style>
     <div class='container'>
       <h1 class='container--title'>
           ${this.section}
       </h1> 
    </div>
    `}}customElements.define("title-app",m);class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
        :host{

        }
        
        *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        }
        .container{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(58, 80, 107, 0.75);
            border-radius: 1rem;
            padding:3rem;
            margin:3rem 10rem;
        }
        .form{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        .form__content{ 
          display:flex;
          align-items:flex-start;
          justify-content:center;
          width:100%;
        }

        .form__name--text,
        .form__email--text,
        .form__message--text{
          width:30ch;
          display:block;
          margin:1rem;
          padding:1rem;
          border-radius: .5rem;
         background:transparent; 
         border:1px solid var(--color--text);
         letter-spacing:2px;
        }
        .form__name--text:focus,
        .form__email--text:focus,
        .form__message--text:focus{
          outline:none;
          border:1px solid var(--color--span);
        }
        .form__message--text{
          min-width: 300px ;
          max-width: 300px ;
          min-height:150px;
          max-height:150px;
        }
        .form__btn{
          background-color: var(--color--span);
          color: var(--color--white);
          border:none;
          padding: 1rem 3rem;
          border-radius: 0.5em;
          text-decoration: none;
          margin: 0.5em;
          text-align:center;
          font-size:1em;
          font-weight:bold;
          cursor:pointer;
        }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${g.styles}</style>
     <div class='container'>
     <title-app section='Enviar Mensaje'></title-app>
        <div class='renderForm'>
            <form 
            class='form' 
            id='formContact'
            method="POST"
            data-netlify="true"   
            >
            <div class="form__content">
              <div class="inputs">
              <label class='form__name'>
              Nombre :
              <input 
              type="text" 
              class='form__name--text' 
              required  
              name='name'
                    />
                </label>
                <label class='form__email'>
                    Email : 
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    class='form__name--text' 
                    required 
                    /> 
                    </label>
                    </div>
                    <label class='form__message'>
                Mensaje : 
                <textarea 
                name="message" 
                    id="message" 
                    cols="30" 
                    rows="10" 
                    class='form__message--text'
                    ></textarea> 
                    </label>
                  </div>
                    <button class='form__btn'>
                        <span class='form__btn--span'>
                            Enviar
                         </span>
                    </button>
            </form>
        </div>
    </div>
        `}}customElements.define("form-app",g);var ee="/portfolioweb/likedin.e14ad9c4.svg",te="/portfolioweb/github.291011cc.svg",re="/portfolioweb/twitter.331ec364.svg",oe="/portfolioweb/instagram.24d0b589.svg";class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${h.styles}</style>
 <div class='container'>
     <div class='renderFooter'>
        <footer class='socials'>    
          <a href="https://www.linkedin.com/in/david-lezama-t/">
            <img src="${ee}" alt="likedin"  />
          </a>
          <a href="https://www.instagram.com/itsdavidev/">
            <img src="${oe}" alt="instagram"  />
          </a>
          <a href="https://twitter.com/itsDavidev">
            <img src="${re}" alt="twiter"  />
          </a>
          <a href="https://github.com/itsDavidev">
            <img src="${te}" alt="github"  />
          </a>
        </footer>
     </div>
        <slot></slot>
</div>
    `}}customElements.define("footer-app",h);class b extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
        :host{  

    }
    span{
        color:#5bc0be;
    }
    .container{
        padding:3rem;
    }
    @media(min-width:300px) and (max-width:768px) {
        .container{
          padding:0;
        }
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${b.styles}</style>
     <div class='container'>
         <div class='renderApp'>     
            <header-app></header-app>
            <technologie-app></technologie-app>
            <projects-app></projects-app>
            <footer-app></footer-app>
         </div>
    </div>
    `}}customElements.define("portfolio-web",b);
