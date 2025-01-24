import { Avatar, Button, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import { CircleCheck, Eye, FlagTriangleRight, Heart, Star } from "lucide-react";
import DOMPurify from "dompurify";

import product1 from "../../assets/images/products/product1.png";
import ProductSection from "./components/productSection/productSection";

import ShoppingCardIcon from "../../assets/svg/components/ShoppingCardIcon";
import AddProductButton from "./components/addProductButton/addProductButton";
import DescriptionSection from "./components/descriptionSection/descriptionSection";
import ReviewsSection from "./components/reviewsSection/reviewsSection";
import RelatedProductsSection from "./components/relatedProductsSection/relatedProductsSection";
import useProductDetails from "./hooks/useProductDetails";
import { Product } from "../../core/types/types";
import Login from "../login/login";

interface CustomRadioProps {
  children: React.ReactNode;
  description: string;
  imageSrc: string;
  value: string;
  [key: string]: any; // To allow other props
}

export const CustomRadio: React.FC<CustomRadioProps> = (props) => {
  const { children, description, imageSrc, ...otherProps } = props;

  function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-white border-1 border-[#F2F2F7] rounded-md hover:shadow-md items-center justify-start ",
          "flex-row  max-w-[300px] cursor-pointer rounded-lg gap-2 p-4 border-1 border-[#F2F2F7] rounded-md ",
          "data-[selected=true]:border-secondary-500 data-[selected=true]:border-2 "
        ),
        wrapper: "hidden",
      }}
    >
      <div className="flex w-full justify-between items-start">
        <div className=" overflow-hidden p-1 border-1 rounded-xl border-[#F2F2F7]">
          <img src={imageSrc} alt={""} className="w-16 h-16 object-contain" />
        </div>
        <div className="text-start ms-3">
          <div className="font-bold text-small">{children}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </Radio>
  );
};

const ProductDetails = () => {
  // const {state} = useLocation()
  // const getProductById = (id: number) => {
  //     return topSellerProducts.filter((product) => product.id === id)[0]
  //   }

  // const selectedProduct = getProductById(parseInt(state))

  const { loaded, productDetails, isLoggedIn, liked, setLiked,addInWishList,productID,isOpen, onOpen ,onOpenChange} =
    useProductDetails();
  return (
    <>
      {loaded ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <ProductSection productsImages={productDetails?.photos || []} />
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="my-4 w-full">
              <div className="my-4 md:my-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                {productDetails?.brand_photo_url === "" ? (
                  <h1>{productDetails?.brand_name}</h1>
                ) : (
                  <img
                    src={productDetails?.brand_photo_url}
                    alt=""
                    className="mb-4 md:mb-0"
                  />
                )}

                <div className="border border-[#F2F2F7] flex justify-between items-center p-2 rounded-full">
                  <Avatar fallback={<Eye />} className="bg-[#0101010A]" />
                  <p className="ms-2 text-sm md:text-base">
                    +25 People Watching
                  </p>
                  <hr className="h-10 w-[1px] bg-[#E5E5EA] mx-2" />
                  <Button
                    isIconOnly
                    aria-label="Like"
                     color={liked ? "danger" : "default"}
                    className={`  p-2`}
                    onPress={() => {
                      if (isLoggedIn) {
                        addInWishList(productID, !liked);
                        setLiked(!liked);
                      } else {
                        onOpen();
                      }
                    }}
                  >
                    <Heart />
                  </Button>
                
                </div>
              </div>
              <div
                className="text-gray-600 mt-2 mb-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    productDetails?.short_description_english || ""
                  ),
                }}
              ></div>
              {/* <p className='my-8 font-bold text-2xl'>{productDetails?.description_english}</p> */}
              <div className="flex justify-between items-center">
                <p className="font-normal text-3xl text-[#79747E]">
                  AED{" "}
                  <span className="font-bold text-3xl text-secondary-500">
                    {productDetails?.price}
                  </span>{" "}
                </p>
                <div className="flex items-center">
                  <Star fill="#FF9500" stroke="none" />
                  <span className=" underline ms-2 text-[#01010180] font-normal text-lg">
                    +1099 Review
                  </span>
                </div>
              </div>

              <p className="my-9 text-danger font-normal text-xl flex items-center">
                <FlagTriangleRight className="text-danger" />
                Only 2 left on Stock
              </p>

              <hr />

              <div className="mt-7">
                <RadioGroup
                  size="sm"
                  orientation="horizontal"
                  description="Select a product category."
                  label={
                    <p className="font-bold text-black text-xl">
                      Category Name:
                    </p>
                  }
                >
                  <CustomRadio
                    imageSrc={product1} // Update with actual image path
                    description="Different Title"
                    value="product1"
                  >
                    Product Name
                  </CustomRadio>
                  <CustomRadio
                    imageSrc={product1}
                    description="Different Title"
                    value="product2"
                  >
                    Product Name
                  </CustomRadio>
                  <CustomRadio
                    imageSrc={product1}
                    description="Different Title"
                    value="product3"
                  >
                    Product Name
                  </CustomRadio>
                </RadioGroup>
              </div>

              <div className="mt-7">
                <div className="grid grid-cols-9 gap-4"></div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-5">
              <AddProductButton
                textColor={"dark"}
                iconColor={"#6D59A6"}
                numberOfProduct={productDetails?.quantity || 0}
                containerBtnClass={"border-1 border-gray-300 rounded-full"}
              />
              {/* <Button
                radius="full"
                className="w-full my-4 text-lg border-1"
                color="secondary"
                variant="bordered"
                startContent={<ShoppingCardIcon color="#6D59A6" />}
              >
                Add to Basket
              </Button> */}
              <Button
                radius="full"
                className="w-full my-4 text-lg"
                color="secondary"
                variant="solid"
                startContent={<CircleCheck size={20} />}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      )}
 <Login isOpen={isOpen} onOpenChange={onOpenChange} />
      <DescriptionSection productDetails={productDetails as Product} />
      <ReviewsSection />
      <RelatedProductsSection />
    </>
  );
};

export default ProductDetails;
