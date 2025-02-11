import { useEffect, useState } from "react";
import { CityEntity, EmirateEntity, Response } from "../../../core/types/types";
import { useDispatch, useSelector } from "react-redux";
import { setCities, setEmirates } from "../../../core/store/slices/lookupSlice";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { RootState } from "../../../core/store/store";
import { useTranslation } from "react-i18next";

interface AddressPayload {
  building: string;
  apartment: string;
  floor: string;
  street: string;
  landmark: string;
  city: number;
  emirate: number;
}

const useAddAddress = () => {
  const [isLoadedEmirate, setIsLoadedEmirate] = useState(false);
  const [isLoadedCity, setIsLoadedCity] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const emirates = useSelector((state: RootState) => state.lookup.emirates);
  const cities = useSelector((state: RootState) => state.lookup.Cities);
  const getEmirate = async () => {
    setIsLoadedEmirate(true);
    try {
      setIsLoadedEmirate(true);

      const response: Response<EmirateEntity[]> = await new ApiService().get(
        "/Emirate/All"
      );
      if (response.Success) {
        dispatch(setEmirates(response.Data));
        setIsLoadedEmirate(false);
      } else {
        toast.error("This didn't work.");
        setIsLoadedEmirate(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoadedEmirate(false);
    }
  };

  const getCity = async (emirateId: string) => {
    setIsLoadedCity(true);
    try {
      setIsLoadedCity(true);

      const response: Response<CityEntity[]> = await new ApiService().get(
        `City/GetCities?emirateId=${emirateId}`
      );
      if (response.Success) {
        dispatch(setCities(response.Data));
        setIsLoadedCity(false);
      } else {
        toast.error("This didn't work.");
        setIsLoadedCity(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoadedCity(false);
    }
  };

  useEffect(() => {
    if (token !== "") {
      if (emirates.length === 0) getEmirate();
    }
  }, [token]);

  const { i18n } = useTranslation();

  const addAddress = async (addressBody: AddressPayload) => {
    const Payload = {
      apartment:addressBody.apartment,
      building: addressBody.building,
      city_id: +addressBody.city,
      emirate_id: +addressBody.emirate,
      floor: addressBody.floor,
      landmark: addressBody.landmark,
      street: addressBody.street,
    };
    try {
      const response: Response<any> = await new ApiService().post(
        `/Address/Add`,
        Payload
      );
      if (response.Success) {
        console.log(response.Data);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as unknown as AddressPayload;

    const addressDetails = {
      apartment: data.apartment,
      building: data.building,
      city:data.city,
      emirate:data.emirate,
      floor: data.floor,
      landmark: data.landmark,
      street: data.street,
    };
    addAddress(addressDetails);
    console.log(data);
  };
  return {
    isLoadedEmirate,
    emirates,
    onSubmit,
    i18n,
    isLoadedCity,
    getCity,
    cities,
  };
};

export default useAddAddress;
