import React, { useState } from "react";
import Image from "./Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
function Banner() {
  let [active, setActive] = useState(0);
  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "3%",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
        },
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "9%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === active
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "2px #262626 solid",
                padding: "6px 0",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "2px #ffff solid",
                fontSize: "0px",
                padding: "6px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <section>
      <Slider {...settings}>
        
          <Image
            className=" w-full "
            src="images/banner.png"
            alt="banner"
          />
       
    
          <Image
            className=" w-full"
            src="images/banner.png"
            alt="banner"
          />
        
       
          <Image
            className=" w-full"
            src="images/banner.png"
            alt="banner"
          />
       
          <Image
            className=" w-full"
            src="images/banner.png"
            alt="banner"
          />
      
          <Image
            className=" w-full"
            src="images/banner.png"
            alt="banner"
          />
      
      </Slider>
    </section>
  );
}

export default Banner;
