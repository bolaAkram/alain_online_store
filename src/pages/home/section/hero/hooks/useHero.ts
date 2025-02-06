import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import ApiService from "../../../../../core/utils/api";
import toast from "react-hot-toast";
import { Swiper as SwiperType } from "swiper";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../core/store/store";
import { Banner, Response } from "../../../../../core/types/types";
import { setBanners } from "../../../../../core/store/slices/bannerSlice";

const useHero = () => {
  // const [banners, setBanners] = useState<Banner[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const banners = useSelector((state: RootState) => state.banners.heroBanner);
  const getBanners = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<Banner[]> = await new ApiService().get(
        "/Home/Banners"
      );
      if (response.Success) {
        dispatch(setBanners(response.Data));
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

  useEffect(() => {
    if (token !== "") {
      if (banners.length === 0) {
        getBanners();
      }
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
