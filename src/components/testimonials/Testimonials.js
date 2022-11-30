import React from 'react'
import Slider from "react-slick";
import testimonialsData from './testimonialsData'


const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
    <h4>testimonials </h4>
    <p>What our customer say</p>
     <Slider {...settings}>
    
    {
      testimonialsData.map((data,index)=>{
        return(
        <>
        <img src={data.logo} height='60px' width='100px'/>
        <h5>{data.heading}</h5>
        <p>{data.text}</p>
        <p>{data.name}</p>
        <p>{data.position}</p>
        </>)
      })

    }
        </Slider>
    </>
  )
}

export default Testimonials
