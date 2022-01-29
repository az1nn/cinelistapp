import React from 'react';

import MainContent from './components/MainContent/MainContent';
import LateralMenu from './components/LateralMenu/LateralMenu';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <LateralMenu />
      <div>
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
