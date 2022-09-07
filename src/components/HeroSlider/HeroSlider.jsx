import React from 'react'
import { useRef } from 'react'

import Button from '../Button/Button'
import HeroSliderData from './HeroSliderData'

import styles from './HeroSlider.module.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';

const HeroSlider = () => {
  const sliderNavPrevRef = useRef(null);
  const sliderNavNextRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={15}
      slidesPerView={1.5}
      centeredSlides={true}
      loop={true}
      navigation={{
        prevEl: sliderNavPrevRef.current,
        nextEl: sliderNavNextRef.current
      }}
      onInit={(slider) => {
        slider.params.navigation.prevEl = sliderNavPrevRef.current;
        slider.params.navigation.nextEl = sliderNavNextRef.current;
        slider.navigation.init();
        slider.navigation.update();
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.slider}
    >
      {HeroSliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
            {({ isActive=true }) => (
                <HeroSlideItem item={slide} className={`${isActive ? `${styles.active}` : ''}`}/>
            )}
        </SwiperSlide>
      ))}

      <div className={styles.sliderNavPrev} ref={sliderNavPrevRef}>
        <img src="/assets/icon/Arrow.svg" alt="Arrow" />
      </div>
      <div className={styles.sliderNavNext} ref={sliderNavNextRef}>
        <img src="/assets/icon/Arrow.svg" alt="Arrow" />
      </div>
    </Swiper>
  )
}

const HeroSlideItem = props => {
    const item = props.item;

    return (
        <div style={{background: `${item.backgroundColor}`}} className={`${styles.sliderItem} ${props.className}`}>
            <h2 className={styles.sliderTitle}>{item.title} <span>{item.boldTitle}</span></h2>
            <span className={styles.sliderDesc}>{item.desc}</span>
            <Button className={styles.sliderButton}>
              Discover
            </Button>
        </div>
    )
}



export default HeroSlider