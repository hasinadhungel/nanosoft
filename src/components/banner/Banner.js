

import React from "react";
import Slider from "react-slick";
import bannerData from "./bannerData";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
    
      {
        bannerData.map((data,index)=>{
          return(
          <>
          <img src={data.img} height='400px' width='800px'/>
          <h5>{data.heading}</h5>
          <p>{data.text}</p>
          </>)
        })

      }
    
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
}