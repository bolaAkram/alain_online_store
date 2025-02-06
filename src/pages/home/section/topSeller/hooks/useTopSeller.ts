import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ApiService from "../../../../../core/utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../core/store/store";
import { Response } from "../../../../../core/types/types";



interface TopSellerProduct {
    brand_name:string;
    id: number,
    brand_photo_url: string ,
    rate: number
    name_arabic: string,
    name_english: string,
    description_english: string,
    description_arabic: string,
    short_description_arabic: string,
    short_description_english: string,
    price: number,
    weight_kg: number,
    length_cm: number,
    width_cm: number,
    height_cm: number,
    sold_individually: boolean,
    allow_customer_reviews: boolean,
    tags: string,
    gender: number,
    photos: string[],
    photo_url:string
    created_on: Date,
    created_by: number,
    updated_on: Date,
    updated_by: number,
    deleted_on: Date,
    deleted_by: number,
    deleted: boolean,
    is_new:boolean,
    have_discount:number;
    is_wish_list:boolean;
    quantity:number

}
const useTopSeller = () => {
    const [topSellerProductList, setTopSellerProductList] = useState<TopSellerProduct[]>([])

    const [isLoaded, setIsLoaded] = useState(false);

    const { i18n } = useTranslation()
    const token = useSelector((state:RootState)=>state.auth.token)

    const getTopSellerProductList = async () => {
        setIsLoaded(true)
        try {
            setIsLoaded(true)

            const response: Response<TopSellerProduct[]> = await new ApiService().get('/Home/TopSeller')
            if (response.Success) {
          

                setTopSellerProductList(response.Data||[])
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
    let onceCall = true
    useEffect(() => {
        if (onceCall) {
            if(token!==""){
                getTopSellerProductList()

            }
            onceCall = false
        }

    }, [token])
    return {
        topSellerProductList,
        i18n,
        isLoaded
    }
}

export default useTopSeller