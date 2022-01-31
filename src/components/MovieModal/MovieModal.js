import React, { useRef } from 'react';

import { IoClose } from "react-icons/io5";

import "../../css/Modal.css"

const MovieModal = ({ showModal, setShowModal, info, IMAGE_URL }) => {
  const modalRef = useRef()

  const closeModal = () => {
    setShowModal(prev => !prev)
  }
  
  const closeModalBg = e => {
    if(modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <div>
      {showModal ? (
        <div id='modal-bg' ref={modalRef} onClick={closeModalBg}>
          <div id='modal'>
            <div id='modal-img'>
              <img src={IMAGE_URL + info.poster_path}/>
            </div>
            <div id='modal-infos'>
              <div id='title-votes'>
                <h4>{info.title}</h4>
                <p id='modal-note-txt'>{info.vote_average}</p>
              </div>
              <div id='more-infos'>
                <p>Release Date:  {info.release_date}</p>
                <p>Votes:  {info.vote_count}</p>
              </div>
              <div id='modal-overview'>
                <p><span style={{fontWeight: 700, textDecoration: 'underline'}}>Overview</span>: {info.overview}</p>
              </div>
            </div>
            <IoClose id='close-modal-button' onClick={closeModal}/>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieModal;
