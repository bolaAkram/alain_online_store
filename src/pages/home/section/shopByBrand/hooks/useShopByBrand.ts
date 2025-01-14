import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ApiService from "../../../../../core/utils/api";
import { Brand } from "../../../../../core/types/types";




const useShopByBrand = () => {
    const [brandList, setBrandList] = useState<Brand[]>([])

    const [isLoaded, setIsLoaded] = useState(false);

    const { i18n } = useTranslation()

    const getBrandList = async () => {
        setIsLoaded(true)
        try {
            setIsLoaded(true)

            const response: AxiosResponse = await new ApiService().get('/Brand/Home')
            if (response.data.Success) {
                console.log(response.data.Data);

                setBrandList(response.data.Data||[])
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
            getBrandList()
            onceCall = false
        }

    }, [])
    return {
        brandList,
        i18n,
        isLoaded
    }
}

export default useShopByBrand