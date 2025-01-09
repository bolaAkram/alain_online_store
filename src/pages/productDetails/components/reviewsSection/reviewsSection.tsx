
import { Button, Card, CardHeader, Avatar, CardBody } from '@nextui-org/react'
import { Plus, Star } from 'lucide-react'

import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './style/review-section.css'
import Section from '../../../../core/components/section/section'
import { useTranslation } from 'react-i18next'
const ReviewsSection = () => {
  const {i18n}=useTranslation()
    const reviewList =[
        {
            id: 1,
            clientName: "Alice Johnson",
            clientImage: "https://nextui.org/avatars/avatar-1.png",
            commint: `Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus. Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus.`
          },
          {
            id: 2,
            clientName: "John Smith",
            clientImage: "https://nextui.org/avatars/avatar-2.png",
            commint:`Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus. Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus.`
          },
          {
            id: 3,
            clientName: "Sophia Martinez",
            clientImage: "https://nextui.org/avatars/avatar-3.png",
            commint: `Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus. Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus.`
          },
          {
            id: 4,
            clientName: "Michael Brown",
            clientImage: "https://nextui.org/avatars/avatar-4.png",
            commint: `Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus. Lorem ipsum dolor sit amet consectetur. Interdum aliquet tincidunt quam aenean neque sit sit in. Quis mi mauris vitae tortor egestas lacus.`
          }
    ]

    
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow pt-10">
    <div className="mt-10">
     
      <Section title={'Reviews'} titleButton={
        <Button
        variant="light"
        className=" text-[#6D59A6]"
        startContent={<Plus size={25} />}
      >
        <span className=" font-bold text-xl  ">Add Your Review</span>
      </Button>
      }  >
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="reviews-section-carousel"
      >
        {
            reviewList.map((review,index)=>(
                <SwiperSlide key={index}>
                     <Card className="w-full shadow-md shadow-[#6D59A680]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src={review.clientImage}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {review.clientName}
                </h4>
                <h5 className="text-small tracking-tight text-default-400 flex">
                  <Star size={14} fill="#FF9500" stroke="none" />
                  <Star
                    size={14}
                    className="ms-1"
                    fill="#FF9500"
                    stroke="none"
                  />
                  <Star
                    size={14}
                    className="ms-1"
                    fill="#FF9500"
                    stroke="none"
                  />
                  <Star
                    size={14}
                    className="ms-1"
                    fill="#FF9500"
                    stroke="none"
                  />
                  <Star
                    size={14}
                    className="ms-1"
                    fill="#FF9500"
                    stroke="none"
                  />
                </h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-3 text-small text-default-400">
            <p>
             {review.commint}
            </p>
          </CardBody>
        </Card>
                </SwiperSlide>
            ))
        }
       
   
      </Swiper>
       
    
      </Section>
      
    </div>

   
  </div>
  )
}

export default ReviewsSection