import  { useState } from 'react'
import { FreeMode,Navigation ,Pagination,Thumbs} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



import { Chip } from '@nextui-org/react';

import '../productSection/style/product_section.css';
import { Swiper as SwiperType } from 'swiper';
import { useTranslation } from 'react-i18next';

interface ProductSectionProps{
  productsImages:string[]
  isNew: boolean;
  discount: number | null;
}
const ProductSection = ({productsImages,isNew,discount}:ProductSectionProps) => {
 
 const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
       const {i18n}=useTranslation()
    
  return (
    <div className='h-full w-full'>
         <div className='border-1 border-[#F2F2F7]  rounded-3xl relative overflow-hidden'>
         <div className="flex justify-between items-center absolute z-10 inset-x-3 top-3">
            <div className="flex">
            {isNew ? (
                    <Chip size="sm" color="secondary">
                      New
                    </Chip>
                  ) : (
                    ""
                  )}
                  {discount ? (
                    <Chip size="sm" className="ms-2" color="danger">
                      {discount}% OFF
                    </Chip>
                  ) : (
                    ""
                  )}
            </div>
           
          </div>
              <Swiper
                  dir={i18n.language !=="en" ? "rtl" : "ltr"}
                  key={i18n?.dir()}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="product-section "
      >
        {
            productsImages.map((photo,index)=>(
                <SwiperSlide key={index}>
                <img src={photo} alt={''}  />
              </SwiperSlide>
            ))
        }
       
      
       
      </Swiper>
         </div>
   
     
         <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {
            productsImages.map((photo,index)=>(
               
                <SwiperSlide key={index} className='border-1 border-[#F2F2F7] rounded-3xl overflow-hidden'>
                <img src={photo} alt={''}  />
              </SwiperSlide>
             
            ))
        }
      </Swiper>
     
     
    </div>
  )
}

export default ProductSection