import React, { useContext, useEffect, useState } from 'react'

function Detail() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  function handlePosterClick(movie) {
    setSelectedMovie(movie);
  }
  return (
    <>
      <article>
      {selectedMovie && (
          <div className='background'>
            <div className='modal'>
              <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt='' />
              <div className='txtContents'>
                  <h2>{selectedMovie.title}</h2>
                  <p>{selectedMovie.overview}</p>
                  <button className='close-modal' onClick={() => setSelectedMovie(null)}>Close</button>
              </div>
            </div>
          </div>
        )}
        </article>
    </>
  )
}

export default Detail

/* 각 페이지에서 뿌린데이터를 받아서 상세페이지를 보여줌 */