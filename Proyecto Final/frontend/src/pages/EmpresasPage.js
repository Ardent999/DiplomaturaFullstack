import React, { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/EmpresasPage.css';

const EmpresasPage = (props) => {

    const initialForm = {
        empresa: '',
        emailEmp: '',
        telefonoEmp: '',
        comentarioEmp: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contactoEmp', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <section className="sectpad">
                <div className="confia">
                    <h2>Confia en nosotros</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab omnis tempora doloribus ipsam. Quisquam,
                        quasi? Reprehenderit accusantium perferendis sed asperiores quod mollitia nihil qui nostrum cumque,
                        voluptas veritatis, debitis aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                        sunt praesentium aspernatur? Minus eaque delectus asperiores vel aperiam sapiente fugit dolore illum
                        necessitatibus doloribus perspiciatis quia iure dolorum, ab quo!</p>
                </div>

                <div className='carousel'>
                    <img className="mySlides" src="img/promo/meeting.jpg" alt="1" />
                    <img style={{ display: 'none'}} className="mySlides" src="img/promo/pr1.jpg" alt="2" />
                    <img style={{ display: 'none'}} className="mySlides" src="img/promo/pr2.jpg" alt="3" />
                    <img style={{ display: 'none'}} className="mySlides" src="img/promo/pr3.jpg" alt="4" />
                </div>
            </section>

            <section className="sectpad">
                <h2>Proveemos servicios para tu empresa a los mejores costos</h2>
                <p>Para mas informacion, mandenos sus datos y los contactaremos.</p>
                <div>
                    <form action="/contactoEmp" method='post' onSubmit={handleSubmit}>
                        <input type="text" placeholder="Empresa" name='empresa' value={formData.empresa} onChange={handleChange}/>
                        <input type="text" placeholder="Telefono de Contacto" name='telefonoEmp' value={formData.telefonoEmp} onChange={handleChange}/>
                        <input type="text" placeholder="Email de Contacto" name='emailEmp' value={formData.emailEmp} onChange={handleChange}/>
                        <p><textarea id="Comentario" name='comentarioEmp' placeholder='agregue aqui sus necesidades si esta buscando servicios especificos.' value={formData.comentarioEmp} onChange={handleChange} ></textarea></p>

                        <div><input type="submit" value="Enviar" /></div>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
                </div>
            </section>


        </main>
    );
}

var myIndex = 0;
setTimeout(carousel, 100)
setInterval(carousel, 6000)


        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) { myIndex = 1 }
            x[myIndex - 1].style.display = "block";
        }

export default EmpresasPage;