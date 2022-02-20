import '../styles/components/pages/EmpresasPage.css'

const HomePage = (props) => {
    return (
        <main class="holder">
        <section class="sectpad">
            <div class="confia">
                <h2>Confia en nosotros</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab omnis tempora doloribus ipsam. Quisquam,
                    quasi? Reprehenderit accusantium perferendis sed asperiores quod mollitia nihil qui nostrum cumque,
                    voluptas veritatis, debitis aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                    sunt praesentium aspernatur? Minus eaque delectus asperiores vel aperiam sapiente fugit dolore illum
                    necessitatibus doloribus perspiciatis quia iure dolorum, ab quo!</p>
            </div>

            <div style={{maxWidth:612, boxShadow: '10 5 black'}}>
                <img className="mySlides" src="img/promo/meeting.jpg" alt="" style={{width:'100%'}} />
                <img className="mySlides" src="img/promo/pr1.jpg" alt="" style={{width:'100%'}} />
                <img className="mySlides" src="img/promo/pr2.jpg" alt="" style={{width:'100%'}} />
                <img className="mySlides" src="img/promo/pr3.jpg" alt="" style={{width:'100%'}} />
            </div>
        </section>

        <section className="sectpad">
            <h2>Proveemos servicios para tu empresa a los mejores costos</h2>
            <p>Para mas informacion, mandenos sus datos y los contactaremos.</p>
            <div>
                <form action="">
                    <input type="text" placeholder="Empresa" />
                    <input type="text" placeholder="Telefono de Contacto" />
                    <input type="text" placeholder="Email de Contacto" />

                    <div><input type="submit" value="Enviar" /></div>
                </form>
            </div>
        </section>

    </main>
        );
}

export default HomePage;