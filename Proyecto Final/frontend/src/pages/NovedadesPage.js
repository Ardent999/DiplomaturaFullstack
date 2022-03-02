import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';


import '../styles/components/pages/NovedadesPage.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false); //loading is to connect to Database, start false
    const [novedades, setNovedades] = useState([]); // starts empty

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        
        cargarNovedades();
    }, []);


    return (
        <main className="holder">
        <h1 className='nov'>Novedades</h1>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            novedades.map(item => <NovedadItem key={item.id}
                titleist={item.title} imagen99={item.imageneep} body={item.content} />)
        )}
        
        {/* above example, id, title and content need to match sql names, image only needs to match the variable set in api. Labels need to match the variables in NovedadItem*/}


    </main>
    );
}

export default NovedadesPage;