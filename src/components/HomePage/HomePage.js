import React from 'react';

import "../../css/HomePageContent.css"

import { IoChevronBack, IoChevronForward} from "react-icons/io5";

const HomePage = () => {

  const API_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=d7f2b7f08d529ee3e6269aa5f1ec187c&sort_by=popularity.desc&year=2020,2021,2022"

  return (
    <div id='home-content-container'>
      <h2>Home Page</h2>
      <div id='title-line-container'><span className='page-title'></span></div>
      <div id='all-home-container'>
        <div id='hp-movies-section'>
          <h3>Top 10 Movies</h3>
          <div id='hp-movies-container'>
            <IoChevronBack className='carroussel-icon'/>
            <div className='carroussel-items-container'>
              <div className='carroussel-item'>
                <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg'/>
                <p className='carroussel-item-title'>Nome do Filme</p>
              </div>
              <div className='carroussel-item'>
                <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg'/>
                <p className='carroussel-item-title'>Nome do Filme</p>
              </div>
              <div className='carroussel-item'>
                <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg'/>
                <p className='carroussel-item-title'>Nome do Filme</p>
              </div>
            </div>
            
            <IoChevronForward className='carroussel-icon'/>
          </div>
        </div>
        
        


      </div>
    </div>
  );
};

export default HomePage;
