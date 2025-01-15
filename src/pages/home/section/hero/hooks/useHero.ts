import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import ApiService from "../../../../../core/utils/api";
import toast from "react-hot-toast";
import { Swiper as SwiperType } from "swiper";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../core/store/store";

interface Banner {
  id: number;
  photo_url: string;
  photo: null | string;
  created_on: Date;
  created_by: number;
  updated_on: Date;
  updated_by: number;
  deleted_on: Date;
  deleted_by: number;
  deleted: boolean;
}
const useHero = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);

  const { i18n } = useTranslation();

  const getBanners = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().get(
        "/api/Home/Banners"
      );
      if (response.data.Success) {
        console.log(response.data.Data);

        setBanners(response.data.Data || []);
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
    if (onceCall) {
      if (token !== "") {
        getBanners();
      }

      onceCall = false;
    }
  }, [token]);
  return {
    banners,
    i18n,
    swiperRef,
    isLoaded,
  };
};

export default useHero;
