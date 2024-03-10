import React from 'react';

import{ useState } from 'react';

const ProductRegistration = () => {

  const [registeredProducts, setRegisteredProducts] = useState([]);



  const handleProductSubmit = (productData) => {
    fetch("http://localhost:3001/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          console.log(data);
          alert(data.error);
        } else {
          console.log(data);
          setRegisteredProducts([...registeredProducts, data]); // Utiliza spread para agregar el nuevo producto al array existente
          alert("Producto registrado con éxito.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al registrar el producto.");
      });
  };

  return (
 
    <div>
    <h1>Registro de Producto</h1>
   
  </div>
  );
};

export default ProductRegistration;
