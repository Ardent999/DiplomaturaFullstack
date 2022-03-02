import '../../styles/components/pages/NovedadItem.css';

const NovedadItem = (props) => {
    const { titleist, imagen99, body } = props; //traer cosas como propiedades
    //these variables match the label ones in NovedadesPage

    return (
        <div className="novedades">
            <h2>{titleist}</h2>
            <div className='flex'>
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <img src={imagen99} alt="" />
            </div>
            <hr />
        </div>
    );
}



export default NovedadItem;