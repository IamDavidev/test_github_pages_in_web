import './CardTechnologie'

class TechnologieApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
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
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${TechnologieApp.styles}</style>
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
    `;
    }
}
customElements.define('technologie-app', TechnologieApp);