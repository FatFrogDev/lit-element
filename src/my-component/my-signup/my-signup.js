import { LitElement, html } from 'lit-element';
import stylesCss from "./my-signupStyle";

export class MySignUp extends LitElement{
    constructor(){
        super()
        this.nombres=""
        this.apellidos=""
        this.tipoDocumento=""
        this.numeroDocumento=""
        this.correo="sisi@gmail.com"
        this.contrasena=""
    }   

    static get properties(){
        return {
            nombres:{ type:String },
            apellidos:{ type:String  },
            tipoDocumento:{ type:String  },
            numeroDocumento:{ type:Number},
            correo:{ type:String  },
            contrasena:{ type:String  }
        };
    }
    register(){
        this.nombres = this.shadowRoot.getElementById("nombres").value;
        this.apellidos = this.shadowRoot.getElementById("apellidos").value;
        this.tipoDocumento = this.shadowRoot.getElementById("tipoDocumento").value;
        this.numeroDocumento = this.shadowRoot.getElementById("numeroDocumento").value;
        this.correo = this.shadowRoot.getElementById("correo").value;
        this.contrasena = this.shadowRoot.getElementById("contrasena").value;
        console.log(this.nombres);
    }
    
    static get styles(){
        return [stylesCss]
    }
    render(){
        return html`
        <div class="signup">
            <h2><strong>Lit element registro</strong></h2><br>
            <label class="labelf" for="nombre">Nombre:</label>
                <input class="inputtext" type="text" name="nombre" id="nombre" placeholder="Juan Alberto" @input="${this.updateNombres}"/><br>
            <label class="labelf" for="apellido">Apellido:</label>
                <input class="inputtext" type="text" name="tipoDocumento" id="tipoDocumento" placeholder="Casas" /><br>
            <label class="labelf" for="numeroDocumento">Numero de documento:</label>
                <input class="inputtext" type="number" name="numeroDocumento" id="numeroDocumento" placeholder="645641"><br>
            <label class="labelf" for="correo">correo</label>
                <input class="inputtext" type="email" name="correo" id="correo"  placeholder="junalb12@gmail.com"><br>
            <label class="labelf" for="contrsena">Contrseña</label>
                <input class="inputtext" type="password" name="contrsena" id="contrsena" placeholder="*****"><br>
            <button class="btn" type="button">Registrarse</button><br>
        </div>`
    }
}

customElements.define('my-element-sign-up', MySignUp);