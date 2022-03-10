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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${FormApp.styles}</style>
     <div class='container'>
        <div class='renderForm'>
            <form 
            class='form' 
            id='formContact'
            method="POST"
            data-netlify="true"   
            >
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
                <label class='form__message'>
                    Mensaje : 
                    <textarea 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10" 
                    class='form__name--text'
                    >
                    </textarea> 
                </label>
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
