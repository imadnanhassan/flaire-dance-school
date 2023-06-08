import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/Banner/banner1.jpg";
import img2 from "../../../assets/Banner/banner2.jpg";
import img3 from "../../../assets/Banner/banner3.jpg";
// import img4 from '../../../assets/home/04.jpg';
// import img5 from '../../../assets/home/05.png';
// import img6 from '../../../assets/home/06.png';

const Banner = () => {
  return (
    <div className="h-80">
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
