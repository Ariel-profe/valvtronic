// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const ProductImages = ({images}:{images:string[]}) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
    {
      images.map(img => (
        <SwiperSlide key={img}>
          <img src={img} alt="imagen" className='object-contain'  />
        </SwiperSlide>
      ))
    }
  </Swiper>
  )
}
