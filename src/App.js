import React, { useState } from 'react';

import MainContent from './components/MainContent/MainContent';
import LateralMenu from './components/LateralMenu/LateralMenu';
import Header from './components/Header/Header';

function App() {

  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue)

  return (
    <div className="App">
      <LateralMenu />
      <div id='main'>
        <Header setSearchValue={setSearchValue}/>
        <MainContent searchValue={searchValue}/>
      </div>
    </div>
  );
}

export default App;
