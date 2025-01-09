import { Heart, Minus, Plus, Star } from "lucide-react";




import { Chip } from "@nextui-org/chip";

import { useState } from "react";
import { Button } from "@nextui-org/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ShoppingCardIcon from "../../../assets/svg/components/ShoppingCardIcon";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/Routes";
import { useTranslation } from "react-i18next";





const adjustStringLength = (input: string, length: number): string => {


  if (input.length > length) {
    // Truncate the string if it's longer
    return input.slice(0, length);
  } else if (input.length < length) {
    // Pad the string with spaces if it's shorter
    return input.padEnd(length, ' ');
  }

 
  return input;
};

interface ProductCardProps {
  brandImage: string;
  productEvaluation: string;
  price: number;
  productImages:string[];
  description:string
  productID:number
}




const ProductCard = ({
  brandImage,
  productEvaluation,
  price,
  productImages,
  description,
  productID
}: ProductCardProps) => {

  

  const [liked, setLiked] = useState(false);

  const [productCount, setProductCount] = useState(0);

          const {i18n}=useTranslation()
  return (
    <div className="border-1 border-gray-200 rounded-3xl flex flex-col justify-between">
      <Link to={ROUTES.PRODUCT_DETAILS} state={productID}>
      <div className=" px-5 my-3">
        <div className="flex justify-between ">
          <img src={brandImage} className=" w-12" alt="" />
          <div className="flex items-center">
            <Star className="me-1" color="#FF9500" />
            <span className="text-gray-400 text-[16px] font-medium">
              {productEvaluation}
            </span>
          </div>
        </div>

        <div className="border border- rounded-2xl overflow-hidden relative">
          <div className="flex justify-between items-center absolute z-10 inset-x-3 top-3">
            <div className="flex">
              <Chip size="sm" color="secondary">
                New
              </Chip>
              <Chip size="sm" className="ms-2" color="danger">
                25% OFF
              </Chip>
            </div>
            <button
              className={` ${liked ? "bg-danger" : "bg-white"}  shadow-lg rounded-full px-3 py-3 flex justify-center items-center`}
              onClick={() => {
                setLiked(!liked);
              }}
            >
              <Heart color={liked ? "white" : "black"} />
            </button>
          </div>
          <Swiper
           dir={i18n.language !=="en" ? "rtl" : "ltr"}
           key={i18n?.dir()}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {productImages.map((image, i) => (
          <SwiperSlide key={i}> <img src={image} className="w-fit object-cover" alt="" /></SwiperSlide>
              
            ))}
        
      
      </Swiper>
         
        </div>

        <div className="mt-4 mb-6">
          <div className="text-center mb-7">
            <p className="mb-0">
           
             {adjustStringLength(description, 50)} ...
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#6D59A6]">
              <span className="text-[#79747E]">AED</span> {price}
            </p>
          </div>
        </div>
      </div>
      </Link>
   

      <div className="bg-black rounded-b-3xl p-2">
        {productCount > 0 ? (
          <div className="flex justify-between items-center w-full">
            <Button
              variant="light"
              className="text-white font-bold"
              onPress={() => {
                setProductCount((perv) => --perv);
              }}
            >
              <Minus />
            </Button>
            <p className="text-white font-bold"> {productCount}</p>

            <Button
              variant="light"
              className="text-white font-bold "
              onPress={() => {
                setProductCount((perv) => ++perv);
              }}
            >
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            variant="light"
            className="text-white font-bold w-full"
            startContent={<ShoppingCardIcon color="#ffff" />}
            onPress={() => {
              setProductCount((perv) => ++perv);
            }}
          >
            Add to Basket
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
