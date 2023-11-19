import { LitElement, html } from 'lit-element';
import stylesCss from "./my-componentStyle";
import { MyLogin } from "./my-login/my-login";
import { MySignUp } from "./my-signup/my-signup"


export class MyElement extends LitElement {
    constructor(){
        super()
        this.saludo="Hola mundo"
        this.componentesHtml = html`<my-element-sign-up></my-element-sign-up>`;
        this.botonCambiar = html`<button @click="${(e) => this.mostrarComponent(2)}">Registrarme</button>`
        this.paramComponent=0;
    }   

    static get properties(){
        return {
            saludo: { type: String },
            botonCambiar: { type: String },
            paramComponent: { type: Number }
        };
    }

    static get styles(){
        return [stylesCss]
    }

    cambio(){
        this.saludo="Adiós mundo";
    }

    rederAll(){
        if(this.paramComponent==1){
            this.componentesHtml  = html `<my-element-sign-up></my-element-sign-up>`;
        }else {
            this.componentesHtml = html `<my-element-sign-in></my-element-sign-in>`;
        }
    }

    mostrarRegistro(){
        return html`<my-element-sign-up></my-element-sign-up>`;
    }

     mostrarComponent(key){    
        this.paramComponent = key;
        if (key === 2) {
            this.botonCambiar = html`<button @click="${(e) => this.mostrarComponent(1)}">Cambiar</button>`          
        } else  {
            this.botonCambiar = html`<button @click="${(e) => this.mostrarComponent(2)}">Cambiar</button>`          
        }    
        this.rederAll()
}

render() {
    this.paramComponent=1;
    return html`
                ${this.componentesHtml}
                ${this.botonCambiar}`;
}

}

customElements.define('my-element', MyElement);