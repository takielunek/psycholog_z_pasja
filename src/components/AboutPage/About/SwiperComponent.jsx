import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const SwiperComponent = () => {
  return (
    <div className="relative wrapper ">
      <div className="absolute flex inset-0 items-center justify-between">
        <div className="custom-swiper-button-prev">
          <FaChevronLeft className="text-blue600 h-[25px] ml-[10px] ss:ml-[20px] sm:ml-[30px] md:ml-[50px] xxl:ml-[100px] cursor-pointer" />
        </div>
        <div className="custom-swiper-button-next">
          <FaChevronRight className="text-blue600 h-[25px] mr-[10px] ss:mr-[20px] sm:mr-[30px] md:mr-[50px] xxl:mr-[100px] cursor-pointer" />
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          580: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          993: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>6</SwiperSlide>
        <SwiperSlide>7</SwiperSlide>
        <SwiperSlide>8</SwiperSlide>
        <SwiperSlide>9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
