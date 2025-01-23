import { AxiosResponse } from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import {
  setGuestToken,
  setIsloggedIn,
} from "../../../core/store/slices/authSlice";
import ApiService from "../../../core/utils/api";
import { useDispatch } from "react-redux";

const useOtp = (onOpenChange:Dispatch<SetStateAction<boolean>>) => {
  const [isLoading, setIsLoaded] = useState(false);
  const dispatch =useDispatch()

  const [otp, setOtp] = React.useState("");

  const VerifyOtp = async (data: { mobile: string; otp: FormDataEntryValue | null }) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().put(
        "/api/Authentication/VerifyMobile",
        data
      );
      if (response.data.Success) {
    
        dispatch(setGuestToken(response.data.Data.token))
        dispatch(setIsloggedIn(true))
        setIsLoaded(false);
        onOpenChange(false)
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
  return { otp, setOtp, isLoading ,VerifyOtp};
};

export default useOtp;
