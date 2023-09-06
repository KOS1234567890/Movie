import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Detail() {
  let { id } = useParams();
  const [detailData, setDetailData] = useState();
  console.log(detailData, id);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
      .then((response) => {
        setDetailData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching detail data:', error);
      });
  }, [id]);

  return (
    <>
      <div className='detailcontent'>
        <h2>상세 정보</h2>
        {detailData ? (
        <div className='detailall' style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${detailData.backdrop_path}")`,
        }}>
          <div className='detailimg'>
            <img src={`https://image.tmdb.org/t/p/w200/${detailData.poster_path}`}></img>
          </div>
          <div className='detailtxt'>
            <h3>{detailData.title}</h3>
            <b>{detailData.overview}</b>
            <p>평점: {detailData.vote_average}</p>
            <span>개봉일: {detailData.release_date}</span>
          </div>
          </div>
        ) : (
          <p>로딩 중...</p>
          )}
      </div>
    </>
  );
}

export default Detail;