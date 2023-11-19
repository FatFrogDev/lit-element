import { LitElement, html } from 'lit-element';
import stylesCss from "./my-loginStyle";

export class MyLogin extends LitElement{
    constructor(){
        super();
    }   
    static get styles(){
        return [stylesCss]
    }
    static get root() {
        return this.shadowRoot || this
      }
    render(){
        return html`
    <div class="login">
        <br><h2><strong> Login Lit element</strong></h2><br>
        <label class="labelf" for="correo">correo</label>
             <input class="inputtext" type="email" name="correo" id="correo"  placeholder="junalb12@gmail.com"><br>
        <label class="labelf" for="contrsena">Contrseña</label>
             <input class="inputtext" type="password" name="contrsena" id="contrsena" placeholder="****"><br>
        <button class="btn" type="submit">Iniciar sesión</button><br>
        <p>¿Ya tienes cuenta?</p>
    </div>`
    }
}
customElements.define('my-element-sign-in', MyLogin);