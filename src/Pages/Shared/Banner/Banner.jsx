import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaArrowRight } from "react-icons/fa";

import img1 from "../../../assets/Banner/canada.jpg";
import img2 from "../../../assets/Banner/australia.jpg";
import img3 from "../../../assets/Banner/denmark.jpg";
import img4 from "../../../assets/Banner/sweden.jpg";
import img5 from "../../../assets/Banner/usa.jpg";
import img6 from "../../../assets/Banner/uk.jpg";
import img7 from "../../../assets/Banner/new-zealand.jpg";
import img8 from "../../../assets/Banner/malaysia.jpg";
import img9 from "../../../assets/Banner/malta.jpg";
import img10 from "../../../assets/Banner/Spain.jpg";
import img11 from "../../../assets/Banner/france.jpg";
import img12 from "../../../assets/Banner/Netharlands.jpg";

const Banner = () => {
  return (
    <div className="lg:max-w-screen-2xl sm:max-w-xs mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="carousel lg:w-full">
          <Carousel
            className="max-w-screen-2xl mx-auto  border-4 border-red-700"
            autoPlay
            interval="3000"
            transitionTime="2000"
            infiniteLoop
          >
            <div id="slide1" className="carousel-item relative w-full ">
              <img src={img1} className="w-full " />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide11" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={img2} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={img3} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={img4} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
              <img src={img5} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 5 */}
            <div id="slide6" className="carousel-item relative w-full">
              <img src={img6} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide7" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 6 */}
            <div id="slide7" className="carousel-item relative w-full">
              <img src={img7} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide8" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 7 */}
            <div id="slide8" className="carousel-item relative w-full">
              <img src={img8} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide7" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide9" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 8 */}
            <div id="slide9" className="carousel-item relative w-full">
              <img src={img9} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide8" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide10" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 9 */}
            <div id="slide10" className="carousel-item relative w-full">
              <img src={img10} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide9" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide11" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 10  */}
            <div id="slide11" className="carousel-item relative w-full">
              <img src={img11} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide10" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide12" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 11 */}
            <div id="slide11" className="carousel-item relative w-full">
              <img src={img12} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide10" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide12" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slider 12 */}
            <div id="slide12" className="carousel-item relative w-full">
              <img src={img12} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide11" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="hero-content text-neutral-content text-center ">
          <div className="">
            <a className="mb-5 text-[85px] font-bold font-Montserrat">
              Journey with Confidence <br />
              Study <span className="text-[#ee4036]">Abroad</span> with Us
            </a>{" "}
            <p className="mb-10 text-lg font-Jakarta mt-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className=" flex items-center justify-center bg-[#ee4036] p-5 gap-2 text-white font-Jakarta ">
                Learn More
                <FaArrowRight className="motion-safe:animate-spin"></FaArrowRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
