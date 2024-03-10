import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const FormActualizar = ({ onUpdate, producto }) => {


  const { id } = producto;
  console.log('ID en FormActualizar:', id);//lo puse para verificar un erro y ver si me tomaba el id

  const [nombre, setNombre] = useState(producto ? producto.nombre : "");
  const [descripcion, setDescripcion] = useState(producto ? producto.descripcion : "");
  const [categoria, setCategoria] = useState(producto ? producto.categoria.titulo : "");
  const [urlImagen, setUrlImagen] = useState("");
  const [tituloImagen, setTituloImagen] = useState("");
  const [imagenes, setImagenes] = useState([]);


//me imprime el id y se asegura de traerme la info actualizada
  useEffect(() => {
    console.log('ID en FormActualizar:', id);
    obtenerCategoria(id);
  }, [id]);

//hace la peticion get para traeer los datos por id

  const obtenerCategoria = async (categoriaId) => {
    try {
      const response = await axios.get(`http://localhost:8080/categorias/buscarPorId/${categoriaId}`);
      if (response.status !== 200) {
        throw new Error(`Error al obtener la categoría: ${response.statusText}`);
      }

      const categoria = response.data;

      setCategoria(categoria.titulo);
      setNombre(categoria.nombre);
      setDescripcion(categoria.descripcion);
    } catch (error) {
      console.error("Error al obtener la categoría:", error);
    }
  };

  //manejo de eventos

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleUrlImagenChange = (event) => {
    setUrlImagen(event.target.value);
  };

  const handleTituloImagenChange = (event) => {
    setTituloImagen(event.target.value);
  };

    
  const handleSubmit = async (event) => {
    event.preventDefault();
    await actualizarProducto();
  };
  


  //agrega nuevas imagenes

  const handleAgregarImagen = () => {
    if (urlImagen !== "" && tituloImagen !== "") {
      const nuevaImagen = { titulo: tituloImagen, urlImg: urlImagen };
      setImagenes([...imagenes, nuevaImagen]);
    } else {
      alert("Por favor, ingrese tanto la URL como el título de la imagen.");
    }
  };

  //en esta envioo solicitud apra modificar y es la que me falla 

  const actualizarProducto = async () => {
    const productoActualizado = {
      id: 1,     //id,
      nombre: "bici6",   //nombre,
      descripcion:  "prueba" ,  //descripcion,
      categoria: "cat2", //categoria.titulo,
    };
  
    try {
      const response = await axios.put(
        `http://localhost:8080/productos/modificar`,
        productoActualizado
      );
  
      console.log("Producto actualizado:", response.data);
      alert("PRODUCTO ACTUALIZADO CORRECTAMENTE");
  
      
      // onUpdate(id);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      console.log(error); 
      alert("ERROR AL ACTUALIZAR PRODUCTO" + error);
    }
  };


  return (
    <div>
      <h1>Actualizar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
          />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={categoria}
            onChange={handleCategoriaChange}
          />
        </div>

        {/* estos no los inclui en el form porque segun el back modifica sin imegnes y titulo*/}

        {/* <div className="form-group">
          <label>Titulo Imagen:</label>
          <input
            type="text"
            name="tituloImagen"
            value={tituloImagen}
            onChange={handleTituloImagenChange}
          />
        </div>
        <div className="form-group">
          <label>Url Imagen:</label>
          <input
            type="text"
            name="urlImagen"
            value={urlImagen}
            onChange={handleUrlImagenChange}
          />
        </div> */}
        <button type="submit" onClick={actualizarProducto}>
          Actualizar producto
        </button>
      </form>
    </div>
  );
};

export default FormActualizar;
