

import { Grid, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


import "./style/top-seller.css";


import ProductCard from '../../../../core/components/productCard/productCard';

import useTopSeller from './hooks/useTopSeller';
import {  Spinner } from '@nextui-org/react';





const TopSeller = () => {
  const { topSellerProductList,
    i18n,
    isLoaded } = useTopSeller()

  return (
    <>
      {
        isLoaded ?
        <div className="flex justify-center">
        <Spinner/>
           </div>:
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
            {topSellerProductList?.map((product) => (
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
                  numberOfProducts={product.quantity}
                />

              </SwiperSlide>
            ))}
          </Swiper>
      }
    </>


  )
}

export default TopSeller