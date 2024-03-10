import React, { useContext } from 'react' 
import './ButtonRightIcon.css';
import { Link } from 'react-router-dom';
import { FaUserCheck } from 'react-icons/fa';

const ButtonRightIcon = ({ title, text, icon }) => {
  return (
    <span className="ButtonRightIcon-main" title={title} >
      {text}
      <img src={icon} alt={title} />
    </span>
  );
};

export default ButtonRightIcon;