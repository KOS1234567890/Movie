import React, { useContext, useEffect ,useState} from 'react'
import {MovieContext} from '../Context'
function Top(item) {
    const {topMovies}=useContext(MovieContext);
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    /* const lengthArray = []; // 길이를 저장할 배열

    topMovies.type.forEach(movie => {
    const movieLength = movie.length; // 데이터 내의 length 값 추출
    lengthArray.push(movieLength); // 배열에 추가
    }); */

    console.log(topMovies.type?.length); // 결과 확인

  if(!topMovies.type?.length) return <>loading....</>   
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
        <h2>TOP 영화 </h2>
        <div className='poster_contents'>
            {topMovies.type.map((movie, index) => (
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

export default Top