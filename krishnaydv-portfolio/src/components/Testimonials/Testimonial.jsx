import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Devslane from "../../img/devslaneT.jfif";
import CodingNinja from "../../img/codingninjaT.jfif";
import Aakar from "../../img/aakarT.jfif";
import Citius from "../../img/citiustechT.jfif";

const Testimonial = () => {
  const clients = [
    {
      img: Devslane,
      review:
        "During his internship with us, he was working under the guidance of Kunwar Ashutosh Singh on Angular. He was punctual, hardworking and inquiaitive. - Prashant Chaudhary",
    },
    {
      img: CodingNinja,
      review:
        "During TAship with us, his responsibility were to taking doubt sessions, dubugging codes and helping students in their assignments & various projects so during TAship we have found Krishna to be a self starter who is motivated, duty bound and hard working. ",
    },
    {
      img: Aakar,
      review:
        "During this period, he has undertaken various tasks and has successfully completed them to the best of his abilities. ",
    },
    {
      img: Citius,
      review:
        "I appreciate your efforts, hard work, passion about learning new technologies and your curiosity for implementing some new functionalities in your projects as well as in assignments. After seeing your efforts and implementation I felt so happy that I got fruitful output from my training. - Bhushan Paradkar",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Always get Exceptional Work from me...</span>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
