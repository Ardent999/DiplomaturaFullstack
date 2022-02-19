import { Link } from "react-router-dom"
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder">
        <div className="contactoalign">
            <h1>Contactanos</h1>
            <h3>Para turnos, accede a nuestro <Link to="/Pacientes/PacientesTurnosPage" style={{textDecoration: 'none'}}>portal
                    de turnos.</Link></h3>
                <h2>Para otras consultas, puede comunicarse a nuestros numeros o completar el formulario a continuacion
                </h2>
                <ul className="contactlist">
                    <li>Telefono - 1234-5678</li>
                    <li>Email - contacto@Researchlab.com</li>
                    <li>Whatsapp - 8765-4321</li>
                </ul>

                <div className="contactform">
                <form>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                    <br/>
                    <input type="text" placeholder="DNI" />
                    <input type="text" placeholder="Provincia" />
                    <br/>
                    <input type="text" placeholder="Email de Contacto" />
                    <input type="text" placeholder="Telefono de Contacto" />
                    <p><label for="Comentario">Comentarios</label></p>
                    <br/>
                    <p><textarea id="Comentario"></textarea></p>

                    <div><input type="submit" value="Enviar" /></div>
                </form>
            </div>
        </div>
    </main>
        );
}

export default ContactoPage;