import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  AddressEntity,
  CityEntity,
  EmirateEntity,
  Response,
} from "../../../core/types/types";
import { useDispatch, useSelector } from "react-redux";
import {  setEmirates } from "../../../core/store/slices/lookupSlice";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { RootState } from "../../../core/store/store";
import { useTranslation } from "react-i18next";
import { setAddresses } from "../../../core/store/slices/addressSlice";

interface AddressPayload {
  building: string;
  apartment: string;
  floor: string;
  street: string;
  landmark: string;
  city: number;
  emirate: number;
  default: boolean;
}


const useAddAddress = (handleClose: () => void, mode: "add" | "edit",addressId:number,setAdressDetails:Dispatch<SetStateAction<AddressEntity>>) => {
  const [isLoadedEmirate, setIsLoadedEmirate] = useState(false);
  const [isLoadedCity, setIsLoadedCity] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const emirates = useSelector((state: RootState) => state.lookup.emirates);
  const [isDefault, setIsDefault] = useState(false);
  const [isLoadedAddAddress, setIsLoadedAddAddress] = useState(false);
  const [CityList, setCityList] = useState<CityEntity[]>([]);
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
      setCityList([]);
      setIsLoadedCity(true);

      const response: Response<CityEntity[]> = await new ApiService().get(
        `City/GetCities?emirateId=${emirateId}`
      );
      if (response.Success) {
        setCityList(response.Data);
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

  const getAllAddresses = async () => {
    try {
      const response: Response<AddressEntity[]> = await new ApiService().get(
        "/Address/GetAddress"
      );
      if (response.Success) {
        dispatch(setAddresses(response.Data));
      } else {
        toast.error("This didn't work.");
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
    }
  };

  const addAddress = async (addressBody: AddressPayload) => {
    const Payload = {
      apartment: addressBody.apartment,
      building: addressBody.building,
      city_id: +addressBody.city,
      emirate_id: +addressBody.emirate,
      floor: addressBody.floor,
      landmark: addressBody.landmark,
      street: addressBody.street,
      is_default: addressBody.default,
    };

    setIsLoadedAddAddress(true);

    try {
      setIsLoadedAddAddress(true);

      const response: Response<any> = await new ApiService().post(
        `/Address/Add`,
        Payload
      );
      if (response.Success) {
        getAllAddresses();
        handleClose();
        setCityList([]);
        setIsLoadedAddAddress(false);
        setIsDefault(false);
      } else {
        setIsLoadedAddAddress(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoadedAddAddress(false);
    }
  };

  const updateAddress = async (addressBody: AddressPayload) => {
    const Payload = {
      apartment: addressBody.apartment,
      building: addressBody.building,
      city_id: +addressBody.city,
      emirate_id: +addressBody.emirate,
      floor: addressBody.floor,
      landmark: addressBody.landmark,
      street: addressBody.street,
      is_default: addressBody.default,
      id:addressId
    };

    setIsLoadedAddAddress(true);

    try {
      setIsLoadedAddAddress(true);

      const response: Response<any> = await new ApiService().post(
        `Address/Update`,
        Payload
      );
      if (response.Success) {
        setAdressDetails({
          id: 0,
          building: "",
          apartment: "",
          floor: "",
          street: "",
          landmark: "",
          city_id: 0,
          emirate_id: 0,
          user_id: 0,
          is_default: false
        })
        getAllAddresses();
        handleClose();
        setCityList([]);
        setIsLoadedAddAddress(false);
        setIsDefault(false);
      } else {
        setIsLoadedAddAddress(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoadedAddAddress(false);
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
      city: data.city,
      emirate: data.emirate,
      floor: data.floor,
      landmark: data.landmark,
      street: data.street,
      default: isDefault,
    };
    if (mode == "add") {
      addAddress(addressDetails);
    } else {
      updateAddress(addressDetails);
    }
  };
  return {
    isLoadedEmirate,
    emirates,
    onSubmit,
    i18n,
    isLoadedCity,
    getCity,
    CityList,
    isLoadedAddAddress,
    setCityList,
    isDefault,
    setIsDefault,
  };
};

export default useAddAddress;
