

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css";

import img1 from "../../../assets/Banner/banner1.jpg";
import img2 from "../../../assets/Banner/banner2.jpg";
import img3 from "../../../assets/Banner/banner3.jpg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
