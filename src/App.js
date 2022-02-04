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

  return (
    <Router>
      <div className="App">
        <LateralMenu />
        <div id='main'>
          <Header setSearchValue={setSearchValue}/>
          <Routes>
            <Route path='/' element={
              <HomePage />
            }/>
            <Route path='movies' element={
              <MoviesPage>
                <MainMoviesContent searchValue={searchValue}/>
              </MoviesPage>
            }/>
            <Route path='series' element={
              <SeriesPage>
                <MainSeriesContent searchValue={searchValue}/>
              </SeriesPage>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
