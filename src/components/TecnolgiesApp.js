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
        margin: 5rem 15rem;
    }

    .container
    .renderTechnologiesApp{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:3rem;
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
     <div class='renderTechnologiesApp'>
        <card-technologie tec='js'></card-technologie>
        <card-technologie tec='html'></card-technologie>
        <card-technologie tec='css'></card-technologie>
        <card-technologie tec='react'></card-technologie>
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('technologie-app', TechnologieApp);