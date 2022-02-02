import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

import MainContent from './components/MainContent/MainContent';
import LateralMenu from './components/LateralMenu/LateralMenu';
import Header from './components/Header/Header';
import MoviesPage from './components/MoviesPage/MoviesPage';
import SeriesPage from './components/SeriesPage/SeriesPage';

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <Router>
      <div className="App">
        <LateralMenu />
        <div id='main'>
          <Header setSearchValue={setSearchValue}/>
          <Routes>
            <Route path='movies' element={
              <MoviesPage>
                <MainContent searchValue={searchValue}/>
              </MoviesPage>
            }/>
            <Route path='series' element={
              <SeriesPage>
                <div>aaaa</div>
              </SeriesPage>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
