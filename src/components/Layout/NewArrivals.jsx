import React from "react";
import Container from "./Container";
import Title from "./Title";
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
function NewArrivals() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} !bg-transparent `}
        style={{
          ...style,
          display: "block",
          background: "#979797",
          width: "40px",
          height: "40px",
          borderRadius:"50%",

          position: "absolute",
          top: "50%",
          right: "0%",
          zIndex: "999",
          display:"flex",
          alignItems:'center',
          justifyContent:"center"
        }}
        onClick={onClick}
      ><FaArrowRightLong  className=" text-xl text-white"/></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !bg-transparent `}
        style={{
          ...style,
          display: "block",
          background: "#979797",
          width: "40px",
          height: "40px",
          borderRadius:"50%",
          position: "absolute",
          top: "50%",
          left: "-2%",
          zIndex: "999",
          display:"flex",
          alignItems:'center',
          justifyContent:"center"
        }}
        onClick={onClick}
      >
        <FaArrowLeftLong className=" text-xl text-white"/>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
      
        }
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          
        }
        
      },
      
    ]
  };
  return (
    <section className=" mt-10 md:mt-[108px]">
      <Container>
        <Title title="New Arrivals" />
        <Slider  {...settings}>
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={false} />
        </Slider>
      </Container>
    </section>
  );
}

export default NewArrivals;
