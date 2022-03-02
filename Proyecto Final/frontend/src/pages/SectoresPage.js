import '../styles/components/pages/SectoresPage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
        <h2 style={{fontSize:'2.5em', marginBottom:'2em', marginTop:'1em'}}>Sectores de Investigacion</h2>
        <div className="sector">
            <img src="img/Labs/lab3.jpg" alt="Microlab" />
            <div className="info">
                <h4>Investigacion Microbiologica</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/lab4.jpg" alt="Oncolab" />
            <div className="info">
                <h4>Investigacion Oncologica</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/lab5.jpg" alt="Infect Lab" />
            <div className="info">
                <h4>Investigacion Infectologia</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/lab1.jpg" alt="Lab hemo" />
            <div className="info">
                <h4>Investigacion Hematologica</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/lab2.jpg" alt="Lab Genetica" />
            <div className="info">
                <h4>Investigacion Genetica</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/alien_lab.jpg" alt="Spacelab" />
            <div className="info">
                <h4>Investigacion Extraplanetaria</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/magic_lab.jpg" alt="Inv.Magica" />
            <div className="info">
                <h4>Investigacion Sobrenatural</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
        <div className="sector">
            <img src="img/Labs/mask_lab.png" alt="Epidemiologia" />
            <div className="info">
                <h4>Investigacion Epidemiologica</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt, doloremque dolore soluta
                    quas nihil harum quidem adipisci corporis atque, quod exercitationem mollitia voluptas hic optio
                    tempore saepe. Molestiae, vel.</p>
            </div>
        </div>
    </main>
        );
}

export default HomePage;