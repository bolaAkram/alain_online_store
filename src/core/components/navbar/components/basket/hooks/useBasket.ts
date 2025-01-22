import { useEffect, useState } from "react";
import product1 from "../../../../../../assets/images/products/product1.png";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import ApiService from "../../../../../utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
interface Product {
  id: number;
  rate: number;
  brand_id: number;
  brand_name: string;
  brand_photo_url: string;
  name_arabic: null;
  name_english: string;
  description_english: null;
  description_arabic: null;
  short_description_arabic: null;
  short_description_english: string;
  price: number;
  weight_kg: number;
  length_cm: number;
  width_cm: number;
  height_cm: number;
  sold_individually: boolean;
  allow_customer_reviews: boolean;
  tags: null;
  gender: number;
  is_wish_list: boolean;
  quantity: number;
  have_discount: number;
  is_new: boolean;
  photos: null;
  photo_url: string;
  created_on: null;
  created_by: number;
  updated_on: null;
  updated_by: number;
  deleted_on: null;
  deleted_by: number;
  deleted: boolean;
}


const useBasket = () => {
  const [isOpenShoppingCard, setIsOpenShoppingCard] = useState(false);
  const numberOfItems = [
    {
      id: 1,
      productImg: product1,
      disc: "Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
      price: "160.00",
    },
    {
      id: 2,
      productImg: product1,
      disc: "Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
      price: "160.00",
    },
    {
      id: 3,
      productImg: product1,
      disc: "Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
      price: "160.00",
    },
  ];

  const [productCount, setProductCount] = useState(0);

 
  const [productList, setProductList] = useState<Product[]>([]);
  const [numberOfProducts,setNumberOfProducts]=useState(0)

  const [isLoaded, setIsLoaded] = useState(false);
  const numberOfProductsIsChange = useSelector((state:RootState)=>state.cart.itemIsAdded)
  const getCart = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().get(
        "/api/Cart/Get"
      );
      if (response.data.Success) {
  

        setProductList(response.data.Data.products || []);
        setNumberOfProducts(response.data.Data.count || 0)
        setIsLoaded(false);
      } else {
        toast.error("This didn't work.");
        setIsLoaded(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoaded(false);
    }
  };

  const token = useSelector((state:RootState)=>state.auth.token)
// let onceCall = true
//   useEffect(()=>{
//     if(onceCall){
//         getCart()
//         onceCall = false
//     }

//   },[numberOfProductsIsChange,token])

  return {
    numberOfItems,
    productCount,
    setProductCount,
    isOpenShoppingCard,
    setIsOpenShoppingCard,
    productList,
numberOfProducts,
isLoaded
  };
};

export default useBasket;
