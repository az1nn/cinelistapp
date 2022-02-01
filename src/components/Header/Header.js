import React from 'react';

import { IoPersonOutline, IoChevronDown, IoSearch } from "react-icons/io5";

const Header = ({ setSearchValue }) => {
  
  const inputRef = React.createRef();

  return (
    <div id='header'>
      <div id='header-items'>
        <div id='search-bar'>
          <input type='search' ref={inputRef} placeholder='Search...' id='search-input' onChange={() => setSearchValue(inputRef.current.value)}/>
          <IoSearch id='search-logo'/>
        </div>
        <div id='user-items'>
          <IoPersonOutline className='user-icon'/>
          <span>Olá, USER</span>
          <IoChevronDown className='user-icon'/>
        </div>
      </div>
    </div>
  )
};

export default Header;
