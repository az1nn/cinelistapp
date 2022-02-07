import React from 'react';

import { IoPersonOutline, IoChevronDown, IoSearch } from "react-icons/io5";

const Header = ({ setSearchValue, showSearch }) => {
  
  const inputRef = React.createRef();

  return (
    <div id='header'>
      <div id='header-items'>
        <div id='search-bar'>
        { showSearch ? (
          <><input type='search' ref={inputRef} placeholder='Search...' id='search-input' onChange={() => setSearchValue(inputRef.current.value)}/>
          <IoSearch id='search-logo'/></>
        ) : null}
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
