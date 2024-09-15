import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.cnn.com/api/v1/images/stellar/prod/140630124917-12-canada-most-beautiful-places.jpg?q=w_2000,h_1363,x_0,y_0,c_fill)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <a className=" mb-5 text-[85px] font-bold">
              Journey with Confidence <br />
              <span className="text-[#ee4036]">Migrate</span> with Us
            </a>
            <p className="mb-10 text-lg font-Jakarta mt-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center bg-[#ee4036] p-5 gap-2 text-white font-Jakarta ">
                Learn More <FaArrowRight />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
