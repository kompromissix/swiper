import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube]} spaceBetween={50} slidesPerView={3} navigation scrollbar = {{draggable:true}} direction='horizontal' pagination = {{clickable:true}} mousewheel = {{clickable:true}} effect='cube' grabCursor={true} cubeEffect={{shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94,}}>
        <SwiperSlide>
          <p>shopa</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>shopa</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>shopa</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>shopa</p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
