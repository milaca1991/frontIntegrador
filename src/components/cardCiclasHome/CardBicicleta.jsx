import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from '../utils/global.context';
import './cardCiclasHome.css'


const CardBicicleta = (props) => {

  const {contexto, setContexto} = useContext(ContextGlobal);
  const [nuevosProductos, setNuevosProductos] = useState([]);
  const nuevaBici = nuevosProductos.map(producto => ({
    nombreBici: producto.nombre,
    imgBici: producto.imagenes[0].urlImg
}));

/*
useEffect(() => {
  const manejadorProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/productos/listar');
      console.log('Productos obtenidos:', response.data);
      setNuevosProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };
  

  manejadorProductos();
}, []);
*/

  const [ciclaleatoria, setCiclaleatoria] = useState([]);

  useEffect(() => {
    const nuevaBici = nuevosProductos.map(producto => ({
      nombreBici: producto.nombre,
      imgBici: producto.imagenes[0].urlImg
    }));

    const ciclas = [{
      nombreBici: 'Haibike Bicicleta Eléctrica Adventr FS 9',
      imgBici: 'https://i.imgur.com/OFuVyJt.png'
    },{
      nombreBici: 'Wilier Bicicleta Eléctrica Triestina Hybrid GRX812',
      imgBici: 'https://i.imgur.com/oO2sILV.png'
    }
    ,
    {
      nombreBici: 'Bianchi Bicicleta Eléctrica E-Spillo Classic G Altus',
      imgBici: 'https://i.imgur.com/370InV6.png'
    }
    ,
    {
      nombreBici: 'Haibike Bicicleta Eléctrica MTB Alltrail',
      imgBici: 'https://i.imgur.com/IccTsb0.png'
    }
    ,
    {
      nombreBici: 'Youin Bicicleta Eléctrica Plegable Dakar',
      imgBici: 'https://i.imgur.com/kSLWt3a.png'
    }
    ,
    {
      nombreBici: 'Winora Bicicleta Eléctrica Tria X9 Wave',
      imgBici: 'https://i.imgur.com/UfRt2hz.png'
    }
    ,
    {
      nombreBici: 'Bianchi Bicicleta Eléctrica Gravel E-Impulso Ultegra RD-R8000 2021',
      imgBici: 'https://i.imgur.com/Ou8g9TW.png'
    }
    ,
    {
      nombreBici: 'Montana Bikes Bicicleta Eléctrica Carretera Gavia',
      imgBici: 'https://i.imgur.com/fNgTMbJ.png'
    }];

    const ciclasConNuevosProductos = [...ciclas, ...nuevaBici];

    const shuffledCiclas = ciclasConNuevosProductos.slice().sort(() => Math.random() - 0.5);
    setCiclaleatoria(shuffledCiclas);
    setContexto({...contexto, arrayCiclas: shuffledCiclas});
  }, [nuevosProductos]);

  const handleClick = (cicla) => {
    
    console.log('click handleClick CardBicicleta')
  };
  
  return (
    <div>
      <h3 className='titulos'>Recomendaciones</h3>
      <div className='div-card-producto'>
        {ciclaleatoria.map((cicla, index) => (
          <Link to={'/productos/' + (+index + 1)} key={index}>
          <article className='card-producto-home'  onClick={() => handleClick(cicla)}>
            <img className='image-ciclas-home' src={cicla.imgBici} alt={cicla.nombreBici} />
            <span>{cicla.nombreBici}</span>
          </article>
          </Link>
        
        ))}
      </div>
    </div>
  )
}

export default CardBicicleta