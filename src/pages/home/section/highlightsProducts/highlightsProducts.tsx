
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from '../../../../assets/svg/brands/larocheposay.svg'


import ProductCard from "../../../../core/components/productCard/productCard";

import useHighlightProduct from "./hooks/usehighlightProduct";
import {  Spinner } from "@nextui-org/react";



const HighlightsProducts = () => {

    const { highlightProductList,
      i18n,
      isLoaded}=useHighlightProduct()
    return (
      <>
        
        {isLoaded ?
         <div className="flex justify-center">
         <Spinner/>
            </div> :
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
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                  },
                }}
                slidesPerView={4.5}
                spaceBetween={10}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="top-seller-swiper"
              >
                {highlightProductList.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                       productID={product.id}
                       brandImage={product.brand_photo_url}
                       price={product.price}
                       productEvaluation={product.rate}
                       // productImages={product.photos}
                       productImage={product.photo_url}
                       isNew={product.is_new}
                       description={product.short_description_english}
                       discount={product.have_discount}
                       isFavorite={product.is_wish_list}
                    />
                  </SwiperSlide>
                ))}
               
              </Swiper>
          }
   
  
      
      </>
    );
  };


  export default HighlightsProducts;