import React from 'react'
import { BiSearch } from 'react-icons/bi';
import './formBuscador.css'

const Buscador = () => {
    return (
        <>
            <div className='container-buscador'>

                <form className='form-buscador'>
                    <label htmlFor="buscador"></label>
                    <div className="search-container">
                        <BiSearch className="search-icon" />
                        <input className="forms-busca-tu-bici"
                            type="text"
                            placeholder="Buscá tu bicicleta favorita"
                            id="nombre"
                        />
                    </div>
                    <h1 className='titulo-slogan'>Encontrá la bicicleta ideal para cada viaje.</h1>
                </form>
                
            </div>
        </>
    )
}

export default Buscador