import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { pathIcons } from '../../../utils/global.context';

// Lista las características
const CaracteristicaLista = () => {
  const [caracteristicas, setCaracteristicas] = useState([]);

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
      <h1>Lista de Características</h1>

      <div className="producto-item">
        <div className="producto-id">ID Característica</div>
        <div className="producto-nombre">Nombre Característica</div>
        <div className="producto-acciones">Icono</div>
        <div className="producto-acciones">Acciones</div>
      </div>

      <ul>
        {caracteristicas.map(caracteristica => (
          <li key={caracteristica.id} className="producto-item">
            <div> <p>{caracteristica.id}</p></div>
            <div><p> {caracteristica.nombre}</p></div>
            <div><img src={caracteristica.icono} alt="Icono" className="caracteristica-icon" /></div>
            <div>               
              <img
                src={pathIcons.delete}
                alt="Eliminar"
                className="delete-icon"
              />
              <img
                src={pathIcons.edit}
                alt="Modificar"
                className="delete-icon"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaracteristicaLista;
