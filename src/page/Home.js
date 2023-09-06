import React, { useRef, useState } from 'react';
import Popular from '../page/Popular';
import Top from '../page/Top';
import Upcoming from '../page/Upcoming';
import Searchmv from './Searchmv';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules

function Home() {
  return (
    <>
      <main>
        <div className='mainContents'>
          <Searchmv/>
        </div>
        <ul className='HomeSlide'>
          <li className='SlidePP'>
            <Popular/>
          </li>
          <li className='SlideTop'>
            <Top/>
          </li>
          <li className='SlideUP'>
            <Upcoming/>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Home