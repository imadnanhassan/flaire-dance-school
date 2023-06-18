import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../assets/Banner/banner1.jpg";
import img2 from "../../../assets/Banner/banner2.webp";
import img3 from "../../../assets/Banner/banner3.jpg";

const Banner = () => {
  const bannerData = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() => "slide change"}
      >
        <div className="" style={{ height: "200px" }}>
          {bannerData.map((data, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-[600px] object-cover bg-cover bg-cente "
                src={data.img}
                alt=""
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
