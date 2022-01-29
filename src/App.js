import React from 'react';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <div id='lateral-menu'>
        <img src='../assets/logo.png' alt='logo' id='menu-logo'/>
      </div>
      <MainContent />
    </div>
  );
}

export default App;
