import axios from 'axios'
import React, { createContext, useEffect,useState } from 'react';
export const MovieContext = createContext();
function Context({children}) { //데이터를 저장할 페이지

    //
    const [topMovies, setTopMovies] = useState([]); 
    const [upcomingMovies, setUpcomingMovies] = useState([]); 
    const [popularMovies, setPopularMovies] = useState([]); 
    const [SearchMovies,setSearchMV]=useState([]);
    useEffect(()=>{ //3개의 데이터를 가져옴
        function getTopMovie(){
            return axios.get ('https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        }
        function getUpcomingMovie(){
            return axios.get ('https://api.themoviedb.org/3/movie/upcoming?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        }
        function getPopularMovie(){
            return axios.get ('https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        }
        function getSearchMovie(){
            return axios.get('https://api.themoviedb.org/3/search/movie?query=아바타&api_key=f89a6c1f22aca3858a4ae7aef10de967')
        }
        function getDetailMovie(){
            return axios.get('https://api.themoviedb.org/3/movie/76600?api_key=f89a6c1f22aca3858a4ae7aef10de967')
        }
        axios.all([getTopMovie(), getUpcomingMovie(),getPopularMovie(),getSearchMovie()])
        .then(function (results) {
            const top = results[0];
            const upcoming = results[1];
            const popular = results[2];
            const SearchMV= results[3];
            setTopMovies({type:top.data.results})
            setUpcomingMovies({type:upcoming.data.results})
            setPopularMovies({type:popular.data.results})
            setSearchMV({type:SearchMV.data.results})
        });

    },[]);
    console.log(topMovies);
  return (
    <>
        <MovieContext.Provider value={{topMovies,upcomingMovies,popularMovies,SearchMovies}}>
            {children}
            
        </MovieContext.Provider>
    </>
  )
}

export default Context