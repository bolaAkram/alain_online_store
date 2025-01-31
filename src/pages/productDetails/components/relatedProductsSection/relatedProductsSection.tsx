

import { relatedProducts } from '../../../../assets/data/products'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../../../../core/components/productCard/productCard'
import Section from '../../../../core/components/section/section'
import useRelatedProductsSection from './hooks/useRelatedProductsSection'
const RelatedProductsSection = () => {
  const {i18n}=useRelatedProductsSection()
  return (
    <>
    <div className="mt-10">
        <Section title="Related Products" titleButton={""}>
    

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
                className="top-seller-swiper"
              >
                {relatedProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                      brandName={product.brand_name||""}

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
        {/* <div className="grid grid-cols-12 gap-3">
            {
                relatedProducts.map((product) => (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 '>
                    <ProductCard
                   key={product.id}
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
                    </div>
                ))
            }
       </div> */}
        </Section>
   
         
        </div>
    </>
  )
}

export default RelatedProductsSection