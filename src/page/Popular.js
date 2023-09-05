import React, { useContext, useEffect, useState } from 'react'
import {MovieContext} from '../Context' //데이터의 내용이 담긴 MovieContext를 받아주기
function Popular() {
    const {popularMovies}=useContext(MovieContext);
    const [selectedMovie, setSelectedMovie] = useState(null);
    if(!popularMovies.type?.length) return <>loading....</> 
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
        <h2>Popular 영화</h2>
        <div className='poster_contents'>
            {popularMovies.type.map((movie, index) => (
            <div className='poster'  key={index} onClick={()=>handlePosterClick(movie)}>
                <div className='poster_img'>
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}></img>
                    <p>{movie.title}</p>
                </div>
                
                <div className='poster_txtbox'>
                    <h2>{movie.title}</h2>{/* title */}
                    <b>{movie.overview}</b>{/* overview */}
                    <p>{movie.release_date}</p> {/* release_date */}
                </div>
                
            </div>
             ))}
        </div>
    </article>
    
    </>
  )
}

export default Popular