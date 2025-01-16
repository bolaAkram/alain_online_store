import { Heart, Minus, Plus, Star } from "lucide-react";

import { Chip } from "@nextui-org/chip";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import ShoppingCardIcon from "../../../assets/svg/components/ShoppingCardIcon";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/Routes";

import DOMPurify from "dompurify";
import useProductCard from "./hooks/useProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Login from "../../../pages/login/login";
import { useDisclosure } from "@nextui-org/react";
import { setItemIsAdd } from "../../store/slices/cartSlice";

interface ProductCardProps {
  brandImage: string;
  productEvaluation: number;
  price: number;
  productImages?: string[];
  productImage: string;
  description: string;
  productID: number;
  isNew: boolean;
  discount: number | null;
  isFavorite: boolean;
  numberOfProducts: number;
}

const ProductCard = ({
  brandImage,
  productEvaluation,
  price,
  // productImages,
  productImage,
  description,
  productID,
  isNew,
  discount,
  isFavorite,
  numberOfProducts,
}: ProductCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isloggedIn);

  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(isFavorite);
  }, [isFavorite]);

  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    setProductCount(numberOfProducts);
  }, [numberOfProducts]);

  const { addInWishList, updateCart } = useProductCard();
  // const isLoggedIn = useSelector((state:RootState)=>state.auth.isLoggedIn)
  const dispatch = useDispatch();

  return (
    <>
      <div className="border-1 border-gray-200 rounded-3xl flex flex-col justify-between relative">
        <button
          className={`absolute top-[10%] right-[10%] ${
            liked ? "bg-danger" : "bg-white"
          } shadow-lg rounded-full px-3 py-3 flex justify-center items-center z-20`}
          onClick={() => {
            if (isLoggedIn) {
              addInWishList(productID, !liked);
              setLiked(!liked);
            } else {
              onOpen();
            }
          }}
        >
          <Heart color={liked ? "white" : "black"} />
        </button>
        <Link to={ROUTES.PRODUCT_DETAILS} state={productID}>
          <div className=" px-5 my-3">
            <div className="flex justify-between w-full">
              <div className="">
                {brandImage ? (
                  <img
                    src={brandImage}
                    className=" w-24 h-8 object-cover"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>

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
                {/* <button
                className={` ${liked ? "bg-danger" : "bg-white"}  shadow-lg rounded-full px-3 py-3 flex justify-center items-center `}
                onClick={() => {
                  setLiked(!liked);
                }}
              >
                <Heart color={liked ? "white" : "black"} />
              </button> */}
              </div>
              {/* <Swiper
              dir={i18n.language !== "en" ? "rtl" : "ltr"}
              key={i18n?.dir()}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {productImages.map((image, i) => (
                <SwiperSlide key={i}> <img src={image} className=" object-cover w-64 h-64" alt="" /></SwiperSlide>

              ))}


            </Swiper> */}
              <img
                src={productImage}
                className="object-contain w-full h-64"
                alt=""
              />
            </div>

            <div className="mt-4 mb-6">
              <div className="text-center mb-7">
                <div
                  className="text-gray-600 mt-2 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(description),
                  }}
                ></div>
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
                  dispatch(setItemIsAdd(false));
                  updateCart(productID, false);
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
                  dispatch(setItemIsAdd(false));
                  updateCart(productID, true);
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
                if (isLoggedIn) {
                  setProductCount((perv) => ++perv);
                  dispatch(setItemIsAdd(false));
                  updateCart(productID, true);
                } else {
                  onOpen();
                }
              }}
            >
              Add to Basket
            </Button>
          )}
        </div>
      </div>

      <Login isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default ProductCard;
