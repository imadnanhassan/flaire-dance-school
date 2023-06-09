// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import "react-awesome-slider/dist/styles.css";

// import Swiper core and required modules
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
  // const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div >
      {/* <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AutoplaySlider> */}

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img className="w-full h-[800px]" src={img1} alt="" />
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
