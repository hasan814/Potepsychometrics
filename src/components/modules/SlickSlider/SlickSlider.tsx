"use client";

import { testimonialsData } from "@/utils/content";
import { v4 as uuidv4 } from "uuid";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";

const SlickSlider = () => {
  // ============= Slide =============
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  // ============= Rendering =============
  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonialsData.map((item) => (
          <div key={uuidv4()} className="testimonial">
            <div className="comment">
              <div className="c-content">
                <Image src={"/apos.svg"} alt="comment" width={40} height={30} />
                <span>{item.comment}</span>
              </div>
              <div className="c-info">
                <div className="c-avatar">{item.name[0]}</div>
                <div className="c-person">
                  <span>{item.name}</span>
                  <span>{item.profession}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
