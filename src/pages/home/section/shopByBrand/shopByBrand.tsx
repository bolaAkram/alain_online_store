
import { Swiper, SwiperSlide } from "swiper/react";
import vichy from "../../../../assets/svg/brands/vichy.svg";
import filorga from "../../../../assets/svg/brands/filorga.svg";
import larocheposay from "../../../../assets/svg/brands/larocheposay.svg";
import is_clinical from "../../../../assets/svg/brands/is_clinical.svg";
import skinceuticals from "../../../../assets/svg/brands/skinceuticals.svg";

import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const ShopByBrand = () => {
  const data = [
    {
      id: 1,
      image: vichy,
    },
    {
      id: 2,
      image: filorga,
    },
    {
      id: 3,
      image: larocheposay,
    },
    {
      id: 4,
      image: is_clinical,
    },
    {
      id: 5,
      image: skinceuticals,
    },
    {
      id: 6,
      image: larocheposay,
    },
    {
      id: 7,
      image: is_clinical,
    },

    {
      id: 8,
      image: vichy,
    },
  ];

   const {i18n}=useTranslation()
  return (
    <Swiper
    dir={i18n.language !=="en" ? "rtl" : "ltr"}
    key={i18n?.dir()}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      slidesPerView={5}
      spaceBetween={10}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="top-seller-swiper"
    >
      {data.map((brand) => (
        <SwiperSlide key={brand.id}>
          <Button isIconOnly aria-label="Like" className="bg-transparent w-[139px] py-9">
            <img src={brand.image} className="w-full" alt="" />
          </Button>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopByBrand;
