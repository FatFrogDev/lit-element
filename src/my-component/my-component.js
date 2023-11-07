import { LitElement, html } from 'lit-element';
import stylesCss from "./my-componentStyle";


export class MyElement extends LitElement {
    constructor(){
        super()
        this.saludo="Hola mundo"
        this.paramComponent=0;
    }   

    static get properties(){
        return {
            saludo:{ type:String  }
        };
    }

    static get styles(){
        return [stylesCss]
    }
    cambio(){
        this.saludo="Adiós mundo";
    }

  render() {
    this.componentesHtml=1;

    return html`
    <div class="myComponent">
      <p> ${this.saludo}</p>
      <button class="btn" @click=${
                    e=>(this.cambio())
                }>Cambiar saludo</button>
    </div>
    ${this.componentesHtml}
    ${this.rederAll()}

    <button @click="${(e)=> this.mostrarComponent()}">Registrarse</button>`;
  }
  rederAll(valor){
    if(this.paramComponent==0){
        this.componentesHtml  = html `<my-login></my-login>`;
    }if(this.paramComponent==1){
        this.componentesHtml = html `<my-login></my-login>`;
    }else{
        this.componentesHtml = html `<my-register></my-register>`;
    }
}


}

customElements.define('my-element', MyElement);