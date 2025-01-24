import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

import ApiService from "../../../core/utils/api";
import { Product } from "../../../core/types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { useDisclosure } from "@nextui-org/react";

const useProductDetails = () => {
   
    const { state,pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  const [loaded, setIsLoaded] = useState(false);

  const [productDetails,setProductDetails]=useState<Product>()
  const getProductById = async (id: number) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().get(
        `/api/Product/GetProductById?id=${id}`
      );
      if (response.data.Success) {
    
        setProductDetails(response.data.Data)
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

  let onceCall = true;
  useEffect(() => {
    if (state && onceCall) {
      getProductById(state);
      onceCall = false;
    }
  }, [state]);


  const isLoggedIn = useSelector((state: RootState) => state.auth.isloggedIn);
  const [liked, setLiked] = useState(false);

  const addInWishList = async (id:number,add:boolean) => {
    const payload = {
        productId : id,
        add 
    }
    setIsLoaded(true)
    try {
        setIsLoaded(true)

        const response: AxiosResponse = await new ApiService().put('/api/WishList/Update',payload)
        if (response.data.Success) {
        

            setIsLoaded(false)

        } else {
            toast.error("This didn't work.")
            setIsLoaded(false)

        }

    } catch (error: any) {
        console.log('===========error========');
        toast.error("This didn't work.")
        console.log(error.message);
        setIsLoaded(false)

    }
}

const { isOpen, onOpen,onOpenChange } = useDisclosure();
  return {
    loaded,
    productDetails,
    isLoggedIn,
    liked,
    setLiked,
    addInWishList,
    productID:state,
    isOpen, onOpen,onOpenChange
  };
};

export default useProductDetails;
