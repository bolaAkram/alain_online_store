import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store/store';
import { CartDetails, Product, Response } from '../../../core/types/types';
import ApiService from '../../../core/utils/api';

const useSummary = () => {
    const [isLoaded, setIsLoaded] = useState(false);
       const[cartDetails,setCartDetails]=useState<CartDetails>()
  const [numberOfProducts,setNumberOfProducts]=useState(0)
       const [productList, setProductList] = useState<Product[]>([]);
     
    const getCart = async () => {
        setIsLoaded(true);
        try {
          setIsLoaded(true);
    
          const response: Response<CartDetails> = await new ApiService().get(
            "/Cart/Get"
          );
          if (response.Success) {
      
            setCartDetails({
              total:response.Data.total,
              subtotal:response.Data.subtotal,
              shippingFee:response.Data.shippingFee
            })
            setProductList(response.Data.products || []);
            setNumberOfProducts(response.Data.count || 0)
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
      const numberOfProductsIsChange = useSelector((state:RootState)=>state.cart.itemIsAdded)

      const token = useSelector((state:RootState)=>state.auth.token)
      const itemIsAdded = useSelector((state:RootState)=>state.cart.itemIsAdded)
let onceCall = true
  useEffect(()=>{
    if(onceCall && token !==""){
        getCart()
        onceCall = false
    }

  },[numberOfProductsIsChange,token,itemIsAdded])
  return {
    numberOfProducts,
    isLoaded,
    cartDetails,
    productList
  }
}

export default useSummary