import React , { useState, useEffect } from 'react';

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=d7f2b7f08d529ee3e6269aa5f1ec187c&sort_by=popularity.desc&year=2020,2021,2022"

const MainContent = () => {
  
  const [moviesList, setMoviesList] = useState([]);
  const [whatPageIs, setNewPage] = useState(1)
  const [apiPageNumber, setApiPageNumber] = useState(`&page=` + whatPageIs)

  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
  
  const pageChangePlus = () => {
    let currentPage = whatPageIs
    let nextPage = ++currentPage
    
    setNewPage(nextPage)
    setApiPageNumber(`&page=` + nextPage)
  }

  const pageChangeLess = () => {
    let currentPage = whatPageIs
    let nextPage = ''
    if(whatPageIs > 1) {
      nextPage = --currentPage
    }
    else{
      nextPage = currentPage
    }
    
    setNewPage(nextPage)
    setApiPageNumber(`&page=` + nextPage)
  }

  useEffect(() => {
    fetch(API_URL + apiPageNumber)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setMoviesList(data.results)
      })
  }, [apiPageNumber])
  
  return (
    <div id='content-container'>
      <h2>Popular Recent Movies</h2>
      <span className='page-title'></span>
      <div id='all-movies-container'>
  
        {moviesList.map((info, index) => {
          return (
            <div key={index} className='movie-container'>
              <h3>{info.title}</h3>
              <img src={IMAGE_URL + info.poster_path} className='movie-poster' alt={info.title}/>
              <p>{info.vote_average}</p>
              <p>{info.vote_count}</p>
            </div>
          )
        })}
      </div>
      <button onClick={pageChangeLess}>BACK</button>
      <button onClick={pageChangePlus}>NEXT</button>
    </div>
  )
};

export default MainContent;
