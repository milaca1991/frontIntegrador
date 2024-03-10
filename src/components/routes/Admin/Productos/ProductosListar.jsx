import React, { useEffect, useContext } from 'react'
import './ProductosListar.css'
import { useState } from 'react';
import axios from 'axios';
import { ContextGlobal, urlBackend } from '../../../utils/global.context';
import { pathIcons } from '../../../utils/global.context';
import FormActualizar from './FormActualizar';




const ProductosListar = () => {
    const {contexto, setContexto} = useContext(ContextGlobal);
    const [showAddForm, setShowAddForm] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null); // Nuevo estado para mantener el producto actual
    const [productos, setProductos] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [categoria, setCategoria] = useState(null); 
    
    


    // /*Se crea este array de prueba solo para probar el renderizado, por favor reemplazar por el 
    // consumo del back, creo que ya estaba, no lo borré, solo lo comentarie por que no tuve tiempo de
    // bajarlo y montarlo */
     /*
    useEffect(()=>{
        const ciclas = [{
            nombreBici: 'Haibike Bicicleta Eléctrica Adventr FS 9',
            imgBici: 'https://i.imgur.com/OFuVyJt.png'
          },{
            nombreBici: 'Wilier Bicicleta Eléctrica Triestina Hybrid GRX812',
            imgBici: 'https://i.imgur.com/oO2sILV.png'
          }100vw;
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
        const newProductos = ciclas.map(
            (item, idx) =>{
                return {
                    id: idx + 1, 
                    nombre: item.nombreBici, 
                    descripcion: 'Alguna descripción',
                    imagenes: [{
                        id: 1,
                        urlImg: item.imgBici
                    }]
                }
            }
        );
        setProductos(newProductos);
    }
    ,[]);
     */
    // este metodo Reinicia el producto actual al abrir el formulario
    const handleAddClick = () => {
        setShowAddForm(!showAddForm);
        setCurrentProduct(null);
        console.log('showAddForm después de handleListClick:', showAddForm);
    };


      // este metodo lista los productos guardados cuando se hace click en listar
    const handleListClick = async () => {
        try {
        const response = await axios.get('http://localhost:8080/productos/listar');
        console.log('Productos obtenidos:', response.data);
        setProductos(response.data);
        } catch (error) {
        console.error('Error al obtener productos:', error);
        }
    };

       //este permite mostrar el listado de productos
    useEffect(() => {
        const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/productos/listar');
            console.log('Productos obtenidos:', response.data);
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
        };

        fetchProductos();
    }, []); 
    

        // este es para eliminar el producto del listado

        const handleDeleteClick = async (productoId) => {
            try {
                const response = await axios.delete(`http://localhost:8080/productos/eliminar/${productoId}`);
                
                if (response.status === 204) {

                    const updatedProducts = productos.filter(producto => producto.id !== productoId);
                    setProductos(updatedProducts);
                    alert('Producto eliminado correctamente.');

                    handleListClick();
                } else {
                    alert('Error al intentar eliminar el producto. Estado: ' + response.status);
                }
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Error al intentar eliminar el producto. Detalles: ' + error.message);
            }
        };


        
        // este prepara el form actualizar cuando se hace clic en icono editar

const handleModifyClick = (productoId, updatedData) => {
  if (productoId) {
    const productoActualizado = productos.find(producto => producto.id === productoId);
    console.log('ID de producto:', productoId);
    setCurrentProduct(productoActualizado);
    setEditingProductId(productoId);
    obtenerCategoria(productoId);
    setShowAddForm(true);
  } else {
    console.error('ID de producto no definido');
  }
};

//este me trae los datos del producto por id, le puse categoria pero en realidad es de los productos
const obtenerCategoria = async (categoriaId) => {
  try {
    const response = await axios.get(`http://localhost:8080/categorias/buscarPorId/${categoriaId}`);
    
    if (!response.status !== 200) {
      throw new Error(`Error al obtener la categoría: ${response.statusText}`);
    }

    const categoria = response.data;
    const categoriaValor = categoria.titulo;

    setNombre(categoria.nombre);
    setDescripcion(categoria.descripcion);
    setCategoria({ titulo: categoriaValor });

 
  } 
  catch (error) {
    console.error("Error al obtener la categoría:", error);
  }

};


    return (
        <div className="productos-container">
            <h1>Listado de Productos</h1>

            <div className="producto-item">
              <div className="producto-id">ID Producto</div>
               <div className="producto-nombre">Nombre Producto</div>
               <div className="producto-nombre">Categoria</div>
               <div className="producto-acciones">Acciones</div>
             </div>


            <ul className="">
                {productos.map(producto => (

                <li key={producto.id} className="producto-item">

      
                  <div>  <p className="producto-id"> {producto.id}</p></div>
                  <div> <h2 className="producto-nombre"> {producto.nombre}</h2></div>
                    {/* <p className="producto-descripcion">DESCRIPCION: {producto.descripcion}</p>*/}
                    <div> <p className="producto-categoria"> {producto.categoria.titulo}</p> </div>
               
               <div>  <img
                      src={pathIcons.delete}
                      alt="Eliminar"
                      className="delete-icon"
                      onClick={() => handleDeleteClick(producto.id)}
                    />
                              <img
                      src={pathIcons.edit}
                      alt="Modificar"
                      className="delete-icon"
                      onClick={() => handleModifyClick(producto.id)}
                    />
                    </div>
                


            {/* quite las imagenes porque asi no esta en el figma      */}
              {/* <ul className="imagenes-list">
                    {producto.imagenes.map(imagen => (
                        <li key={imagen.id} className="imagen-item">
                        <img src={imagen.urlImg} alt={imagen.titulo} className="imagen" />
                        </li>
                    ))}
                    </ul> */}
                </li>
                ))}
            </ul>

                    {/*este muestra el form*/ }

            {showAddForm && (
  <FormActualizar
    producto={currentProduct}
    onActualizar={(productoId, updatedData) => {
      handleListClick();
      setShowAddForm(false);
    }}
    onClose={() => setShowAddForm(false)}
  />
)}


        </div>
    )
}

export default ProductosListar;