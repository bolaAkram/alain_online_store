import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import { useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../core/routing/Routes";
import { setItemIsAdd } from "../../../core/store/slices/cartSlice";
import { RootState } from "../../../core/store/store";
import { Product, Response } from "../../../core/types/types";
import ApiService from "../../../core/utils/api";

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

      const response: Response<Product> = await new ApiService().get(
        `/Product/GetProductById?id=${id}`
      );
      if (response.Success) {
    
        setProductDetails(response.Data)
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

        const response: Response<boolean> = await new ApiService().put('/WishList/Update',payload)
        if (response.Success) {
        

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

const dispatch = useDispatch();
const navigate=useNavigate()
const updateCart = async (id: number, add: boolean) => {
  const payload = {
    productId: id,
    add,
  };

  try {
    const response: Response<boolean> = await new ApiService().put(
      "/Cart/Update",
      payload
    );
    if (response.Success) {
      dispatch(setItemIsAdd(true));
      navigate(ROUTES.SUMMARY)
    } else {
      toast.error("This didn't work.");
    }
  } catch (error: any) {
    console.log("===========error========");
    toast.error("This didn't work.");
    console.log(error.message);
  }
};

const handleBuyNow = (id: number, add: boolean)=>{
  updateCart(id, add);
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
    isOpen, onOpen,onOpenChange,
    handleBuyNow,
    navigate
  };
};

export default useProductDetails;
