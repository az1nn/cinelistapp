import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainMoviesContent from './components/MainMoviesContent/MainMoviesContent';
import MainSeriesContent from './components/MainSeriesContent/MainSeriesContent';
import LateralMenu from './components/LateralMenu/LateralMenu';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import SeriesPage from './components/SeriesPage/SeriesPage';

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [showSearch, setShowSearch] = useState('')

  return (
    <Router>
      <div className="App">
        <LateralMenu />
        <div id='main'>
          <Header setSearchValue={setSearchValue} showSearch={showSearch}/>
          <Routes>
            <Route path='/' element={
              <HomePage setShowSearch={setShowSearch} />
            }/>
            <Route path='movies' element={
              <MoviesPage>
                <MainMoviesContent searchValue={searchValue} setShowSearch={setShowSearch} />
              </MoviesPage>
            }/>
            <Route path='series' element={
              <SeriesPage>
                <MainSeriesContent searchValue={searchValue} setShowSearch={setShowSearch} />
              </SeriesPage>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
