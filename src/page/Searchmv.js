import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MovieContext } from '../Context';
import { Link} from 'react-router-dom';
function Searchmv() {
  const { SearchMovies } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=f89a6c1f22aca3858a4ae7aef10de967`)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error('Error searching movies:', error);
      });
  };
  return (
    <>
      <div className='search'>
        <div>
          <input
            type='text'
            placeholder='영화 검색'
            value={searchTerm}
            onChange={handleInputChange}
            className='search_mv'
          />
          <button className='search_button' onClick={handleSearch}>
            검색하기
          </button>
        </div>
        <ul>
          {searchResults.map((movie, index) => (
            
            <li key={movie.id}>
              <Link to={`./detail/${movie.id}`}> {/* Detail  */}
                <div
                  className='search_contents'
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w200/${movie.poster_path}")`,
                  }}
                >
                  <span>
                    {movie.title}
                    <br />
                    평균 별점: {movie.vote_average}
                    <br />
                    추천 수: {movie.vote_count}
                  </span>
                </div>
              </Link>
              {/* <Routes>
                <Route path="/detail/:id" component={Detail} />
              </Routes> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Searchmv;