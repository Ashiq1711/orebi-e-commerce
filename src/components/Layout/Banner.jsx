import React, { useEffect, useState } from "react";
import Image from "./Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
function Banner() {
  let [active, setActive] = useState(0);
  let [getbanner, setGetbanner] = useState([]);
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
  useEffect(()=>{
axios.get("http://localhost:3000/api/v1/banner/getbanner").then((data)=>{
  setGetbanner(data.data.images)
}).catch((err)=>{
  console.log(err)
})
  },[])
  console.log(getbanner)
  return (
    <section>
      <Slider {...settings}>
        {getbanner.map((item)=>(

          <Image
            className=" w-full "
            src={item.image}
            alt="banner"
          />
       
        ))}

      </Slider>
    </section>
  );
}

export default Banner;
