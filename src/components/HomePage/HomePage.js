import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import * as Scroll from 'react-scroll';
import { Element, scroller} from 'react-scroll'

import 'react-multi-carousel/lib/styles.css';

import "../../css/HomePageContent.css"

import { IoChevronBack, IoChevronForward, IoChevronUp } from "react-icons/io5";

const HomePage = () => {

  const scroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;

  const [topMoviesList, setTopMoviesList] = useState('')
  const [movieMoreCard, setMovieMoreCard] = useState('')
  const [showMovieModal, setShowMovieModal] = useState(false)
  const [topSeriesList, setTopSeriesList] = useState('')
  const [seriesMoreCard, setSeriesMoreCard] = useState('')
  const [showSeriesModal, setShowSeriesModal] = useState(false)

  const API_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=d7f2b7f08d529ee3e6269aa5f1ec187c&sort_by=popularity.desc&year=2020,2021,2022&page=1"
  const API_SERIES = "https://api.themoviedb.org/3/tv/popular?api_key=d7f2b7f08d529ee3e6269aa5f1ec187c&language=en-US"
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    fetch(API_MOVIES)
      .then((res) => res.json())
      .then((data) => {
        setTopMoviesList(data.results)
        console.log(data.results)
      })
    fetch(API_SERIES)
    .then((res) => res.json())
    .then((data) => {
      setTopSeriesList(data.results)
      console.log(data.results)
    })
  }, [])
  
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick}>
      <IoChevronForward style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick}>
      <IoChevronBack style={{ fontSize: "50px" }} />
    </button>
  );

  const TopNumberHandler = (props) => {
    const topTagValue = props + 1 + "º"
    return topTagValue
  }
  
  const HandleMovieSelect = (props) => {
    if(props.itsAMovie === "movie") {
      setMovieMoreCard(props.item)
      setShowMovieModal(true)
      setInterval(
        (scroller.scrollTo('MovieModalContainer', { containerId: "home-content-container", smooth: true,}))
        , 2000)
      }
    
    else if (props.itsASerie === "serie") {
      setSeriesMoreCard(props.item)
      setShowSeriesModal(true)
      setInterval((scroller.scrollTo('SeriesModalContainer', { containerId: "home-content-container", smooth: true}))
      , 2000)
    }
    console.log(props.item) 
  }

  const closeMovieModal = () => {
    setShowMovieModal(false)
  }
  const closeSeriesModal = () => {
    setShowSeriesModal(false)
  }

  const setClassNameRate = (val) => {
    if(val >= 7) 
      return 'note-plus7 note-txt'
    else if (val >= 5)
      return 'note-plus5 note-txt'
    else
      return 'note-minus5 note-txt'
  }
  const itsAMovie = "movie"
  const itsASerie = "serie"

  return (
    <div id='home-content-container'>
      <h2>Home Page</h2>
      <div id='title-line-container'><span className='page-title'></span></div>
      <div id='all-home-container'>
        <div id='hp-movies-section'>
          <h5>Top 10 Movies</h5>
          <div id='hp-movies-container'>

          { topMoviesList ? <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            className=""
            containerClass="container-carr"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={50}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customLeftArrow={<CustomLeft />}
            customRightArrow={<CustomRight />}
          >
            {
              topMoviesList.slice('0', '10').map((item, index) => { return (
                <div className='carroussel-item' onClick={()=> (HandleMovieSelect({item, itsAMovie}))}>
                  <img src={IMAGE_URL + item.poster_path} className='movie-poster' alt={item.title}/>
                  <p className='carroussel-item-title'>{item.original_title}</p>
                  <span className='top-number'>{TopNumberHandler(index)}</span>
                </div>
              )})
            } 
          </Carousel> : null} 
            
          </div>
          <Element name='MovieModalContainer' style={{ width: '100%', display: 'flex', justifyContent: 'center', Height: '100%'}}>
            {showMovieModal ? (<div className='movie-card-info'>
              <div className='movie-card-info-img'>
                <img src={IMAGE_URL +movieMoreCard.poster_path}/>
              </div>
              <div className="movie-card-info-rightside">
                <div className='movie-card-info-title'>
                  <p>{movieMoreCard.original_title}</p>
                </div>
                <div className='movie-card-info-rate'>
                  <p className={setClassNameRate(movieMoreCard.vote_average)}>{movieMoreCard.vote_average}</p>
                </div>
                <div className='movie-card-info-release'>
                  <p>Release Date: {movieMoreCard.release_date}</p>
                </div>
                <div className='movie-card-info-votecount'>
                  <p>Votes: {movieMoreCard.vote_count}</p>
                </div>
                <div className='movie-card-info-infos'>
                  <p>Overview: {movieMoreCard.overview}</p>
                </div>
              </div>
              <div className='close-icon' onClick={closeMovieModal}>
                <IoChevronUp className='close-icon-i' />
              </div>
            </div>) : null}
          </Element>
          <div className='more-link'>
              <a href='/movies'>See More...</a>
          </div>
        </div>
        <div id='hp-movies-section'>
          <h5>Top 10 TV Series</h5>
          <div id='hp-movies-container'>

          { topSeriesList ? <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            className=""
            containerClass="container-carr"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={50}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customLeftArrow={<CustomLeft />}
            customRightArrow={<CustomRight />}
          >
            {
              topSeriesList.slice('0', '10').map((item, index) => { return (
                <div className='carroussel-item' onClick={()=> (HandleMovieSelect({item, itsASerie}))}>
                  <img src={IMAGE_URL + item.poster_path} className='movie-poster' alt={item.name}/>
                  <p className='carroussel-item-title'>{item.name}</p>
                  <span className='top-number'>{TopNumberHandler(index)}</span>
                </div>
              )})
            } 
          </Carousel> : null} 
            
          </div>
          <Element name='SeriesModalContainer' style={{ width: '100%', display: 'flex', justifyContent: 'center', Height: '100%'}}>
            {showSeriesModal ? (<div className='movie-card-info'>
              <div className='movie-card-info-img'>
                <img src={IMAGE_URL + seriesMoreCard.poster_path}/>
              </div>
              <div className="movie-card-info-rightside">
                <div className='movie-card-info-title'>
                  <p>{seriesMoreCard.name}</p>
                </div>
                <div className='movie-card-info-rate'>
                  <p className={setClassNameRate(seriesMoreCard.vote_average)}>{seriesMoreCard.vote_average}</p>
                </div>
                <div className='movie-card-info-release'>
                  <p>Release Date: {seriesMoreCard.release_date}</p>
                </div>
                <div className='movie-card-info-votecount'>
                  <p>Votes: {seriesMoreCard.vote_count}</p>
                </div>
                <div className='movie-card-info-infos'>
                  <p>Overview: {seriesMoreCard.overview}</p>
                </div>
              </div>
              <div className='close-icon' onClick={closeSeriesModal}>
                <IoChevronUp className='close-icon-i' />
              </div>
            </div>) : null}
          </Element>
          <div className='more-link'>
              <a href='/series'>See More...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
