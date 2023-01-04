import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import GymEcom1 from "../../img/gymEcom1.png";
import GymEcom2 from "../../img/gymEcom2.png";
import GymEcom3 from "../../img/gymEcom3.png";
import GymEcom4 from "../../img/gymEcom4.png";
import GymEcom5 from "../../img/gymEcom5.png";
import GymEcom6 from "../../img/gymEcom6.png";
import GymEcom7 from "../../img/gymEcom7.png";
import GymEcom8 from "../../img/gymEcom8.png";
import GymEcom9 from "../../img/gymEcom9.png";
import Gym1 from "../../img/gym1.png";
import Gym2 from "../../img/gym2.png";
import Gym3 from "../../img/gym3.png";
import Gym4 from "../../img/gym4.png";
import Gym5 from "../../img/gym5.png";
import Gym6 from "../../img/gym6.png";
import Exam1 from "../../img/exam1.png";
import Exam2 from "../../img/exam2.png";
import Exam3 from "../../img/exam3.png";
import Exam4 from "../../img/exam4.png";
import Exam5 from "../../img/exam5.png";
import Tm1 from "../../img/tm1.png";
import Tm2 from "../../img/tm2.png";
import Ctit1 from "../../img/ctit1.png";
import Ctit2 from "../../img/ctit2.png";
import Ctit3 from "../../img/ctit3.png";
import Ctit4 from "../../img/ctit4.png";
import Ctit5 from "../../img/ctit5.png";
import Ctit6 from "../../img/ctit6.png";
import Ctit7 from "../../img/ctit7.png";
import Ecom1 from "../../img/ecom1.png";
import Ecom2 from "../../img/ecom2.png";
import Ecom3 from "../../img/ecom3.png";
import Ecom4 from "../../img/ecom4.png";
import Fc from "../../img/fc.png";


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://quartsoft-fit-store.netlify.app/"><img src={GymEcom1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GymEcom9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://exam-management-quizup.netlify.app/"><img src={Gym1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gym6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Exam1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Exam2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Exam3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Exam4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Exam5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tourist-management.netlify.app/"><img src={Tm1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tm2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://krishna10798.github.io/coding-training-institute/"><img src={Ctit1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ctit2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ctit3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ctit4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ctit5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ctit6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ctit7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://food-ecommerce-shop.netlify.app/"><img src={Ecom1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
