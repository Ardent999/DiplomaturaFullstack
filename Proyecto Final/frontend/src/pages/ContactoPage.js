import { Link } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        dni: '',
        provincia: '',
        email: '',
        telefono: '',
        comentario: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contactoPac', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
        <div className="contactoalign">
            <h1>Contactanos</h1>
            <h3>Para turnos, accede a nuestro <Link to="/Pacientes/Portal" style={{textDecoration: 'none'}}>portal
                    de turnos.</Link></h3>
                <h2>Para otras consultas, puede comunicarse a nuestros numeros o completar el formulario a continuacion
                </h2>
                <ul className="contactlist">
                    <li>Telefono - 1234-5678</li>
                    <li>Email - contacto@Researchlab.com</li>
                    <li>Whatsapp - 8765-4321</li>
                </ul>

                <div className="contactform">
                <form action='/contactoPac' method='post' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre" name='nombre' value={formData.nombre} onChange={handleChange} />
                    <input type="text" placeholder="Apellido" name='apellido' value={formData.apellido} onChange={handleChange} />
                    <br/>
                    <input type="number" placeholder="DNI" name='dni' value={formData.dni} onChange={handleChange} />
                    <input type="text" placeholder="Provincia" name='provincia' value={formData.provincia} onChange={handleChange} />
                    <br/>
                    <input type="email" placeholder="Email de Contacto" name='email' value={formData.email} onChange={handleChange} />
                    <input type="number" placeholder="Telefono de Contacto" name='telefono' value={formData.telefono} onChange={handleChange} />
                    <p><label for="Comentario">Comentarios</label></p>
                    <br/>
                    <p><textarea id="Comentario" name='comentario' value={formData.comentario} onChange={handleChange} ></textarea></p>

                    <div><input type="submit" value="Enviar" /></div>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
        </div>
    </main>
        );
}

export default ContactoPage;