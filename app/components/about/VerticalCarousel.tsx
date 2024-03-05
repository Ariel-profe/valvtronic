// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation  } from 'swiper/modules';
import { departments } from '@/utils/departments';

export const VerticalCarousel = () => {

  const screenWidth = window.screen.width;

  return (
      <Swiper
        navigation={true}
        pagination={{clickable: true}}
        modules={[Pagination, Navigation]}
        slidesPerView={screenWidth < 768 ? 1 : 3}
        spaceBetween={10}
        loop
        className="mySwiper w-2/3"
        >
        {
            departments.map( ({description, id, title}) => (
              <SwiperSlide key={id}>
                <h3>{title}</h3>
                <div className='swiper-content'>
                  <p>{description}</p>
                  {/* <img src={`/assets/about/${src}`} alt={title} /> */}
                </div>
              </SwiperSlide>
            ))
        }
      </Swiper>
  );
}
