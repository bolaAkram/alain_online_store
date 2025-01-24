import { Swiper, SwiperSlide } from "swiper/react";

import { Button, Spinner } from "@nextui-org/react";

import useShopByBrand from "./hooks/useShopByBrand";
import { Dispatch, SetStateAction } from "react";
import { Brand } from "../../../../core/types/types";


interface ShopByBrandProps{
  setBrand:Dispatch<SetStateAction<Brand[]>>
}
const ShopByBrand = ({setBrand}:ShopByBrandProps) => {
  const { brandList, i18n, isLoaded } = useShopByBrand(setBrand);
  return (
    <>
      {isLoaded ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <Swiper
          dir={i18n.language !== "en" ? "rtl" : "ltr"}
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
          className="top-seller-swiper"
        >
          {brandList.map((brand) => (
            <SwiperSlide key={brand.id}>
              <Button
                isIconOnly
                aria-label="Like"
                className="bg-transparent w-32 h-10"
              >
                <img
                  src={brand.photo_url}
                  className="object-contain w-32 h-10"
                  alt=""
                />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default ShopByBrand;
