import { createContext, useMemo, useState } from "react";
import pathLogoEmpresa from '../../images/e_bikernt_logo.png';
import pathIcoHamburgerUser from '../../images/hamburg-user-icon.svg';
import pathIcoBtnAddUser from '../../images/ico-btn-add-user.png';
import pathIcoBtnAdd from '../../images/ico-btn-add.png';
import pathIcoBtnGoLogginUser from '../../images/ico-btn-go-loggin-user.png';
import pathIcoBtnList from '../../images/ico-btn-list.png';
import pathIcoSave from '../../images/ico-save.png';
import pathLogoFooter from '../../images/logo-footer.png';
import pathLogoDelete from '../../images/delete.png';
import pathLogoEdit from '../../images/edit.png';



export const initialState = {theme: "light", arrayCiclas: []};
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => { 
  const [contexto, setContexto] = useState(initialState);
  
  const providerValue = useMemo(() => ({contexto, setContexto}), [contexto]);
  
  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

/*Global values*/ 
export const urlLogoEmpresa = pathLogoEmpresa;
export const urlLogoFooter = pathLogoFooter;
export const pathIcons = {
  addUser: pathIcoBtnAddUser,
  goLogginUser: pathIcoBtnGoLogginUser,
  hamburgUser: pathIcoHamburgerUser,
  add: pathIcoBtnAdd,
  list: pathIcoBtnList,
  save: pathIcoSave,
  delete: pathLogoDelete,
  edit:pathLogoEdit
};

export const urlBackend = 'http://localhost:8080/';