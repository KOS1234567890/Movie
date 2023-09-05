import React, { useContext, useEffect,useState } from 'react'
import {MovieContext} from '../Context'
function Upcoming() {
    const {upcomingMovies}=useContext(MovieContext);
    const [selectedMovie,setSelectedMovie]=useState(null);
    if(!upcomingMovies.type?.length) return <>loading....</>
    function handlePosterClick(movie){
        setSelectedMovie(movie);
    } 
  return (
    <>
    <article>
        {selectedMovie && (
            <div className='background'>
                <div className='modal'>
                    <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt=''/>
                    <div className='txtContents'>
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.overview}</p>
                        <button className='close-modal' onClick={()=>setSelectedMovie(null)}>Close</button>
                    </div>
                </div>
            </div>
        )}
        <h2>개봉예정 </h2>
        <div className='poster_contents'>
            {upcomingMovies.type.map((movie, index) => (
            <div className='poster' key={index} onClick={()=>handlePosterClick(movie)}>
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

export default Upcoming