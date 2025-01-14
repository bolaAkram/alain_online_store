
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShopByCategoryCard from './components/ShopByCategoryCard/shopByCategoryCard';

import useShopByCategory from './hooks/useShopByCategory';
import {Spinner } from '@nextui-org/react';





const shopByCategory = () => {
   const {   shopByCategoryList,
    isLoaded,
    i18n}=useShopByCategory()
  
    
  return (
    <>
     {
      isLoaded?
      <div className="flex justify-center">
      <Spinner/>
         </div>
      :
      <Swiper
  
      dir={i18n.language !=="en" ? "rtl" : "ltr"}
      key={i18n?.dir()}
      breakpoints={{
        200: {
          slidesPerView: 1.2,
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
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }}
      slidesPerView={4.5}
      spaceBetween={20}
      grabCursor={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {shopByCategoryList?.map((mainCategory) => (
        <SwiperSlide key={mainCategory.id} className='px-1 py-3'>
          <ShopByCategoryCard
            isloading={false}
            image={mainCategory.photo_url}
            footerTitLe={mainCategory.name_english}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    }
    </>
   
   
  )
}

export default shopByCategory