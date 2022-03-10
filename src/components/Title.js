class Title extends HTMLElement {
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
    `;
    }

    connectedCallback() {
        this.section = this.getAttribute('section');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Title.styles}</style>
     <div class='container'>
       <h1 class='container--title'>
           ${this.section}
       </h1> 
    </div>
    `;
    }
}
customElements.define('title-app', Title);