
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Grid } from "swiper/modules";


import brand1 from '../../../../assets/svg/brands/vichy.svg'
import { highlightsProducts } from "../../../../assets/data/products";
import ProductCard from "../../../../core/components/productCard/productCard";
import { useTranslation } from "react-i18next";




// interface HighlightsProduct {
//   id: number,
//   brand_id: number,
//   rate: number
//   name_arabic: string,
//   name_english: string,
//   description_english: string,
//   description_arabic: string,
//   short_description_arabic: string,
//   short_description_english: string,
//   price: number,
//   weight_kg: number,
//   length_cm: number,
//   width_cm: number,
//   height_cm: number,
//   sold_individually: boolean,
//   allow_customer_reviews: boolean,
//   tags: string,
//   gender: number,
//   photos: string[],
//   photo_url:string
//   created_on: Date,
//   created_by: number,
//   updated_on: Date,
//   updated_by: number,
//   deleted_on: Date,
//   deleted_by: number,
//   deleted: boolean,
//   is_new:boolean,
//   have_discount:number;
//   is_wish_list:boolean
//   }
const BeautyCareProducts = () => {
    
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
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }}
    grid={{
      rows: 2,
      fill: "row",
    }}
    slidesPerView={4}
    spaceBetween={30}
    modules={[Grid, Pagination]}
    pagination={{ clickable: true }}
    className="top-seller-swiper"
  >
    {highlightsProducts.map((product) => (
      <SwiperSlide key={product.id}>
         <ProductCard
              productID={product.id}
              brandImage={brand1}
              price={product.price}
              productEvaluation={product.rate}
              // productImages={product.photos}
              productImage={product.photo_url}
              isNew={product.is_new}
              description={product.short_description_english}
              discount={product.have_discount}
              isFavorite={product.is_wish_list}
              numberOfProducts={product.quantity}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default BeautyCareProducts
