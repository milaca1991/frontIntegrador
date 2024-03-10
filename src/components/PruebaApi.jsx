import React from 'react'

const PruebaApi = () => {

        const url = "http://localhost:8080/productos/listar";

        function obtenerDatos(settings) {
            return fetch(url, settings)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error en la solicitud');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    return data;
                })
                .catch(error => {
                    console.error('Error al obtener datos:', error);
                    throw error;
                });
        }

        return (
            <>
                <button onClick={obtenerDatos}>
                    hacerclick
                </button>
            </>
        )
    }

export default PruebaApi

/* 
{productos.map(producto => (
    <div key={producto.id}>
        <p>{producto.nombre}</p>
        <p>{producto.descripcion}</p>
    </div>
))}

*/