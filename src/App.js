import React from 'react';

import MainContent from './components/MainContent/MainContent';
import LateralMenu from './components/LateralMenu/LateralMenu';

import { IoPersonOutline, IoChevronDown, IoSearch } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <LateralMenu />
      <div>
        <div id='header'>
          <div id='header-items'>
            <div id='search-bar'>
              <input type='search' placeholder='Search...' id='search-input'/>
              <IoSearch id='search-logo'/>
            </div>
            <div id='user-items'>
              <IoPersonOutline />
              <span>Olá, USER</span>
              <IoChevronDown />
            </div>
          </div>
        </div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
