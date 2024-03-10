import React, { useContext, useState } from 'react'; 
import {pathIcons} from '../utils/global.context';
import './HamburgMenuUser.css';

const HamburgMenuUser = ({options}) => {
  const[isActiveMenu, setIsActiveMenu] = useState(false);
  const activateMenu = () =>{
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div className='HamburgMenuUser'>
      <div></div>
      <a className='HamburgMenuUser-button-a' onClick={activateMenu}>
        <img src={pathIcons.hamburgUser} alt='Opciones usuario' className={`HamburgMenuUser-icon ${isActiveMenu? 'HamburgMenuUser-isActive': ''}`} />
      </a>

      <nav className={`HamburgMenuUser-nav ${isActiveMenu? 'HamburgMenuUser-isActive': ''}`}>
        <ul className='HamburgMenuUser-ul'>
          {
            options.map((item, idx) =>(
              <li key={idx} className='HamburgMenuUser-li'>
                <a><img src={item.icon} alt={item.title} />{item.text}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default HamburgMenuUser