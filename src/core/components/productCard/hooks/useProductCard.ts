import { AxiosResponse } from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import ApiService from "../../../utils/api"


const useProductCard = () => {
    const [isLoading,setIsLoaded]=useState(false)
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
                console.log(response);

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
  return{
    addInWishList,
    isLoading
  }
}

export default useProductCard