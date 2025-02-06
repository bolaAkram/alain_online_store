
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "./style/hero-section.css";
import { Button, Spinner } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useHero from "./hooks/useHero";


const Hero = () => {

  const { banners, i18n,
    swiperRef,isLoaded } = useHero()


  return (
    <>
    {
      isLoaded?
      <div className="flex justify-center h-[200px] md:h-[370px] xl:h-[740px] ">
      <Spinner/>
         </div>
      :
      <div className="relative">
      <Swiper
        dir={i18n.language !== "en" ? "rtl" : "ltr"}
        key={i18n?.dir()}
        onSwiper={(swiper: any) => { swiperRef.current = swiper }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        rewind={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="hero-section-swiper"
      >
        {banners?.map((banner) => (
          <SwiperSlide key={banner.id} >
            <img src={banner.photo_url} className="w-full h-[200px] md:h-[370px] xl:h-[740px] rounded-3xl object-fill" alt="" />
          </SwiperSlide>
        ))}

      </Swiper>

      <div className="slider-btns absolute hidden md:flex justify-between inset-y-0 md:-inset-x-0 md:z-10 lg:z-0 xl:z-0 lg:inset-x-0   xl:-inset-x-14 items-center ">

        <Button
          isIconOnly
          aria-label="next"
          className="prev-btn xl:bg-[#6D59A614] xl:rounded-full xl:w-[156px] xl:h-[112px] flex xl:justify-start xl:ps-4 "
          onPress={() => { swiperRef.current?.slidePrev() }}
        //   disabled={prevBtnDisabled}
        >
          {
            i18n.language !== "en" ?
              <ChevronRight size={35} className="text-[#6D59A6]" />
              :
              <ChevronLeft size={35} className="text-[#6D59A6] " />
          }
        </Button>
        <Button
          isIconOnly
          aria-label="prev"
          className=" xl:bg-[#6D59A614] xl:rounded-full xl:w-[156px] xl:h-[112px] flex lg:justify-end xl:pe-4"
          onPress={() => { swiperRef.current?.slideNext() }}
        //   disabled={nextBtnDisabled}
        >
          {
            i18n.language !== "en" ?
              <ChevronLeft size={35} className="text-[#6D59A6] " />
              :
              <ChevronRight size={35} className="text-[#6D59A6]" />
          }

        </Button>
      </div>


    </div>
    }
  
   
    
    </>

  )
}

export default Hero