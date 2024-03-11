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
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    },{
      nombreBici: 'Wilier Bicicleta Eléctrica Triestina Hybrid GRX812',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }
    ,
    {
      nombreBici: 'Bianchi Bicicleta Eléctrica E-Spillo Classic G Altus',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }
    ,
    {
      nombreBici: 'Haibike Bicicleta Eléctrica MTB Alltrail',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }
    ,
    {
      nombreBici: 'Youin Bicicleta Eléctrica Plegable Dakar',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }
    ,
    {
      nombreBici: 'Winora Bicicleta Eléctrica Tria X9 Wave',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }
    ,
    {
      nombreBici: 'Bianchi Bicicleta Eléctrica Gravel E-Impulso Ultegra RD-R8000 2021',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }
    ,
    {
      nombreBici: 'Montana Bikes Bicicleta Eléctrica Carretera Gavia',
      imgBici: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
    }];

    const ciclasConNuevosProductos = [...ciclas, ...nuevaBici];

    const shuffledCiclas = ciclasConNuevosProductos.slice().sort(() => Math.random() - 0.5);
    setCiclaleatoria(shuffledCiclas);
    setContexto({...contexto, arrayCiclas: shuffledCiclas});
  }, [nuevosProductos]);

  const handleClick = (cicla) => {

    //esto lo inclui para que abra en ventana nueva
    // const index = contexto.arrayCiclas.indexOf(cicla);
    //const newWindow = window.open(`/productos/${index + 1}`, '_blank'); //hasta aca
    console.log('click handleClick CardBicicleta')
 
  };
  
  return (
    <div>
      <h3 className='titulos'>Recomendaciones</h3>
      <div className='div-card-producto'>
        {ciclaleatoria.map((cicla, index) => (
           <Link to={'/productos/' + (+index + 1)} key={index}>
            {/*esta es la nueva ruta que estoy trabajando para que se abra en ventana nueva*/ }
            {/* <Link to={`/detalle2/${index + 1}`} key={index}> */}
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