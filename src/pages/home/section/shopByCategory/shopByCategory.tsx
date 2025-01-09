
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShopByCategoryCard from './components/ShopByCategoryCard/shopByCategoryCard';
import { data } from '../../../../assets/data/products';
import { useTranslation } from 'react-i18next';



interface MainCategories {
    id: number;
    name_arabic: string;
    name_english: string;
    photo_url: string;
    show_home: boolean;
    photo: null;
    created_on: Date;
    created_by: number;
    updated_on: Date;
    updated_by: number;
    deleted_on: Date|null;
    deleted_by: number|null;
    deleted: boolean;
  }

const shopByCategory = () => {
    const ShopByCategoryData:MainCategories[] = data
    const {i18n}=useTranslation()
  
    
  return (
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
    {ShopByCategoryData.map((mainCategory: MainCategories) => (
      <SwiperSlide key={mainCategory.id} className='px-1 py-3'>
        <ShopByCategoryCard
          isloading={false}
          image={mainCategory.photo_url}
          footerTitLe={mainCategory.name_english}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default shopByCategory