import React , { useState, useEffect } from 'react';

import MovieModal from '../MovieModal/MovieModal';

import "../../css/Content.css"

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=d7f2b7f08d529ee3e6269aa5f1ec187c&sort_by=popularity.desc&year=2020,2021,2022"
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=d7f2b7f08d529ee3e6269aa5f1ec187c&language=en-US&page=1&include_adult=false&query="

const MainMovieContent = ({ searchValue }) => {
  
  const [moviesList, setMoviesList] = useState([]);
  const [whatPageIs, setNewPage] = useState(1)
  const [apiPageNumber, setApiPageNumber] = useState(`&page=` + whatPageIs)
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState('')
  const [resultsLength, setResultsLength] = useState(true)
  const [areSearching, setAreSearching] = useState({ state: false, title: "Popular Movies"})


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
        setMoviesList(data.results)
        setResultsLength(true)
      })
  }, [apiPageNumber])

  useEffect(() => {
    if(searchValue.length >= 1) {
    fetch(SEARCH_URL + searchValue)
      .then((res) => res.json())
      .then((data) => {
        if(data.results.length === 0) {
          setResultsLength(false)
        }
        else {
          setMoviesList(data.results)
          setResultsLength(true)
          setAreSearching({ state: true, title: "Search Results:"})
        }
      })}
      else {
        fetch(API_URL + apiPageNumber)
            .then((res) => res.json())
            .then((data) => {
              setMoviesList(data.results)
              setResultsLength(true)
              setAreSearching({ state: false, title: "Popular Movies"})
            })
      }
  }, [searchValue])
  
  return (
    <div id='content-container'>
      <h2>{areSearching.title}</h2>
      <div id='title-line-container'><span className='page-title'></span></div>
      <MovieModal showModal={showModal} setShowModal={setShowModal} info={modalInfo} IMAGE_URL={IMAGE_URL}/>
      <div id='all-movies-container'>
  
        {resultsLength ? (moviesList.map((info, index) => {

          const setClassNameRate = (val) => {
            if(val >= 7) 
              return 'note-plus7 note-txt'
            else if (val >= 5)
              return 'note-plus5 note-txt'
            else
              return 'note-minus5 note-txt'
          }

          const openModal = () => {
            setShowModal(prev => !prev)
            setModalInfo(info)
          }

          return (
            <div key={index} className='movie-container' onClick={openModal}>
              {info.poster_path === null ? (<img style={{ width : '100%'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAMFBMVEUAAAAyMjIxMTEuLi4rKysYGBgmJiYfHx8WFhYpKSkiIiIbGxsPDw8KCgoTExMGBgbQ8Kw5AAAD6UlEQVR4nO2c65KjIBCFR1S8Rt//bWcy2QANjRqzG6w95/ubpKpzCk5fQL++CCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDyl7n1nW2a0lFcnnVux8FUd+rSsVyZdels/dDpwa10RFelbUKZHiylg7oqdSJVVXWlg7oovaJVZUtHdQnS/ZXuQTr8Ove/uS5aM6u2CavKlAnyAtxErhNqLeq6+mEuFWxBlskmua6enp/OQ0aqqmpLRl2EMSfFME7tZPUd+GAsHfvHaTfU2GEoHfvHmc+LBejwOfs+QOnQP8+WK+2A1/DY82LhNTzdebHwGp7lvFh487/bebEA0+EbDo83/2vOi9WXjv3jZBueffAanum8WGx4QsxPO90vSz+NyhAe0uGzUtnQk9Y+LV/NWizoUmTSYWpIayIXG55fBrUsmKPUOWlf+q/RGp6sCvLLeA2PctC1MV4X38ZreNJ0uFmZi2byUzFeh7gq2Dm2CdcWXjqMXHv31CbwLfSG54Bpe3XR538HfuDHOuANz6G14kozvAsPa6BV0O61lc1ZvV9aeA4fNDxBk3O3srrT1XCuhXfhIbjPEPz5P4fVg5bx3EE2csMTepCzMjMm68ftXLz5n7/wIOqGoFhtpmg7PvchXsPj/VrkQjm7sWIe88yHyPM/4U/x7MZ0vml0Oxf4hEeYUzq78ZbmJvfA8z8hVnpY7e0cOB1OqljJYXUgjBMLb/7n1pCsqaLpfPihkxc4HcpNJWY3JuNnHw30EjxLKlljhrObqGX2mRI3HcpNFRxWx7MYv0Nxb3jLY1M/u4ltPPB+vPmfS27S4bOCBCUY8PxP/vVaUzD4QDEzAPz8T/j1w8bTmZUoV4Hnf8Kd7rutVtKdqCmQ53/hf+/1olOeYeM5vD7/W2u1m5GnsngNT//Cn4+eqsNreMITnp19FV9CRZ7/VTtjl3TKhefwIsFtrC3lcjPehQc5Q8751qrdmsdLh9ENb6MuF/0aOF46TGbITSJXm7mqC9jwpBfdje1dK3NTbnY7SsZdBvX5X1MPdhztsP00FF46zL/AYRe8Ex4+8PQC6quMjoHX8LzxSCteOnznDQ+4JzwnAL7w8Dp4DQ/f8PACb7zhAdDhz4sFOP97Ix2y4YmXz4aYuBceNKHG5bau8zLqHXWDJ1b2lXYm0KIX68s0tuvxjqS/8m94iFq/R/Fq6qFr8Sp3j25KSZtcN3aaIZdTiGpIgGXBIdSGB8+7j6E1PFxYGeKGx9zNqXRQV8XP/0z9UxIg57oD3NOhGcaWue4A3bRQJkIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHkH/ANFT4ZfXETGo0AAAAASUVORK5CYII=' className='movie-poster' alt={info.title}/>) : (<img src={IMAGE_URL + info.poster_path} className='movie-poster' alt={info.title}/>)}
              <div className='box-movie'>
                <div className='title-container'>
                  <h3>{info.title}</h3>
                </div>
                <div className='note-container'>
                  <p className={setClassNameRate(info.vote_average)}>{info.vote_average}</p>
                </div>
                <p className='note-count'>Total votes: {info.vote_count}</p>
              </div>
            </div>
          )
        })
          ) : (
            <div id='not-found-msg'>
              <p>--- NO RESULTS FOR '{searchValue}' ---</p>
            </div>
        )}
      </div>

      {areSearching.state ? null : (<div id='page-button-container'>
        <button onClick={pageChangeLess} className='page-button'>PREVIOUS</button>
        <button onClick={pageChangePlus} className='page-button'>NEXT</button>
      </div>)}

    </div>
  )
};

export default MainMovieContent;
