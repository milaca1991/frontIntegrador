import React, { useContext, useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import VerMasFotos from './VerMasFotos';
import { Link, useParams } from 'react-router-dom';
import { ContextGlobal, urlBackend } from '../utils/global.context';
import './detalleProducto.css'
import CaracteristicaLista from './Admin/Productos/CaracteristicaLista';
import axios from 'axios';

const DetalleProducto = () => {



  const {contexto} = useContext(ContextGlobal);

  const {id} = useParams();
  const url =  urlBackend + 'productos/' + id;
  console.log(url);

  /*En las pruebas con backend, se pueden habilitar y probar estas lineas o cambiar por axios a gusto*/
  /*const {data, error} = useFetchEffect(url);*/
  /*mientra se consume el back, nos traemos el array con la info para probar*/ 
  /*Posteriormente data será lo que devuelva el llamado al back, mientras se emula con el array*/
  const data = contexto.arrayCiclas[+id - 1];

  const [mostrarFotos, setMostrarFotos] = useState(false);
//se inlcuye
  const [caracteristicas, setCaracteristicas] = useState([]);




  const handleMostrarFotos = () => {
    setMostrarFotos(true)
  };

  const handleCerrarFotos = () => {
    console.log("Cerrando fotos...");
    setMostrarFotos(false);
  };



      // Realiza la solicitud para obtener características para el container
  useEffect(() => {

    const fetchCaracteristicas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/caracteristicas/listar');
        console.log('Características obtenidas:', response.data);
        setCaracteristicas(response.data);
      } catch (error) {
        console.error('Error al obtener características:', error);
      }
    };
  
    fetchCaracteristicas();
  }, []); 





  return (

    <>
      <div className='background-overlay mostrar container-middle'>
        <div className="detalle-producto-overlay mostrar">
          <article className="detalle-producto-card">
            <div className='detalle-izquierda-card'>
              <Link to='/'>
                <button className='button button-detalle'> {<IoIosArrowBack />}  Volver Atras</button>
              </Link>
              <span className='detalle-de-la-bici'>Detalles de la bicicleta</span>
              <span className='titulo-nombre-bici border-radius'>{data.nombreBici}</span>
              <img className='imagen-Detalle-Producto' src={data.imgBici} alt="" />
              <Link to="/masfotos">
                <button className='button button-detalle'
                  onClick={handleMostrarFotos}>
                  Ver mas fotos +
                </button>
              </Link>
            </div>

            <div className='detalle-descripcion-producto'>
              <h2>Descripcion de producto</h2>
              <p>Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon
                <br />  Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon
                <br />  Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon
                <br />  Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon</p>
              <p>Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon</p>
              <p>Cuadro: Monoscocca Carbon <br /> Horquilla: Monoscocca Carbon</p>
            </div>
          

              {/* Mostrar las características */}
              <div className="caracteristicas-container">
              {caracteristicas.map(caracteristica => (
                <div key={caracteristica.id} className="caracteristica-item">
                  <img src={caracteristica.icono} alt="Icono" className="caracteristica-icon" />
                  <p>{caracteristica.nombre}</p>
                </div>
              ))}
            </div>


          </article>
        </div>
        {mostrarFotos && <VerMasFotos srcImagen={data.imgBici} nombreBici={data.nombreBici} onClose={handleCerrarFotos} />}
      </div>
    </>
  )
}

export default DetalleProducto