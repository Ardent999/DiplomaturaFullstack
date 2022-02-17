const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="Avion" />
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius nisi mollitia tempore, ipsum omnis sed
                    quos voluptas culpa temporibus ex, sit harum. Fuga, eaque magnam. Harum eveniet veritatis
                    repellendus neque!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, obcaecati illum! Voluptas fugit
                    et quos aliquam cumque eum officia eius numquam. Dolorem dolores, deleniti maxime laudantium sit
                    fuga facere esse.</p>
            </div>
            <div className="testimonios right">
                <h2>Testimonio</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Exelente</span>
                    <span className="autor">Juan Perez - Zapatos.com</span>
                </div>

            </div>

        </div>
    </main>
    );
}

export default HomePage;