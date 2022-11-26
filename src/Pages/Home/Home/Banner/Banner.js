import React from "react";
import banner from '../../../../assests/banner.gif'

const Banner = () => {
  return (
    <div className="hero lg:px-20 my-5 " >
        <img className="rounded-lg" src={banner} alt="" />    
    </div>
  );
};

export default Banner;
