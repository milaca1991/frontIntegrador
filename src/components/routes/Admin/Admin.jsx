import React from 'react'
import ProductoManejador from '../../componentsCm/button/ProductoManejador'
import ButtonRightIcon from '../../Buttons/ButtonRightIcon'
import { Link, Outlet } from 'react-router-dom'
import { pathIcons } from '../../utils/global.context'
import './Admin.css'

const Admin = () => {
  return (
    <div className='container-middle Admin-parent-center'>
      <div className='Admin-container'>
        {/* Grupo de productos*/}
        <div className='Admin-group'>
          <Link to='productos/registrar'>
            <ButtonRightIcon title='Registrar producto' text='Agregar productos' icon={pathIcons.add} />
          </Link>
          <Link to='productos'>
            <ButtonRightIcon title='Listar productos' text='Lista de productos' icon={pathIcons.list} />
          </Link>
        </div>

        {/* Grupo de categorías*/}
        <div className='Admin-group'>
          <Link to='categorias/registrar'>
            <ButtonRightIcon title='Registrar categoría' text='Crear categoría' icon={pathIcons.add} />
          </Link>
          <Link to='categorias'>
            <ButtonRightIcon title='Listar categorías' text='Lista de categorías' icon={pathIcons.list} />
          </Link>
        </div>

        {/* Grupo de Ccracterísticas*/}
        <div className='Admin-group'>
          <Link to='caracteristicas/registrar'>
            <ButtonRightIcon title='Registrar carcacterística' text='Crear característica' icon={pathIcons.add} />
          </Link>
          <Link to='caracteristicas'>
            <ButtonRightIcon title='Listar carcacterísticas' text='Lista de carácteristicas' icon={pathIcons.list} />
          </Link>
        </div>
      </div>
      
      <Outlet />
      {/*<ProductoManejador/>*/}
    </div>
  )
}

export default Admin