class FormApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${FormApp.styles}</style>
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
        `;
  }
}
customElements.define('form-app', FormApp);
