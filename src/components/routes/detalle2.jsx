import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from '../utils/global.context';
import './detalleProducto.css';

const Detalle2 = () => {
  const { contexto } = useContext(ContextGlobal);
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [caracteristicas, setCaracteristicas] = useState([]);

  useEffect(() => {
    const fetchProductoById = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/productos/buscarPorId/${id}`);
        console.log('Producto obtenido:', response.data);
        setProducto(response.data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProductoById();
  }, [id]);

  

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
    <div>
    <h2>Detalle del Producto</h2>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <div>
        {producto.imagenes && producto.imagenes.map((imagen, i) => (
          <img key={i} src={imagen.url} alt={`Imagen ${i + 1}`} />
        ))}
      </div>

      {/* Mostrar las características */}
      <p>Características</p>
      <div className="caracteristicas-container">
        {caracteristicas.map(caracteristica => (
          <div key={caracteristica.id} className="caracteristica-item">
            <img src={caracteristica.icono} alt="Icono" className="caracteristica-icon" />
            <p>{caracteristica.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detalle2;
