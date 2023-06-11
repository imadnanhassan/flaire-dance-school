
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../../assets/Banner/banner1.jpg";
import img2 from "../../../assets/Banner/banner2.jpg";
import img3 from "../../../assets/Banner/banner3.jpg";

const Banner = () => {
  return (
    <div >
     

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => (swiper)}
        onSlideChange={() => ("slide change")}
      >
        <SwiperSlide>
          <img className="w-full h-[800px] " src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[800px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[800px]" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
