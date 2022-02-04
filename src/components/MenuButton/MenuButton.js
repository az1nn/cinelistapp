import React from 'react';
import { Link } from "react-router-dom"; 

const MenuButton = (props) => {
  return (
    <Link to={props.link_to}>
      <button className='menu-button'>{props.title}</button>
    </Link>
  );
};

export default MenuButton;
