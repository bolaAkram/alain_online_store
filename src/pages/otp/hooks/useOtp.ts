import { AxiosResponse } from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import {
 
  setIsloggedIn,
  setUserData,
  setUserToken,
} from "../../../core/store/slices/authSlice";
import ApiService from "../../../core/utils/api";
import { useDispatch } from "react-redux";
import { LoginResponse, Response } from "../../../core/types/types";

const useOtp = (onOpenChange:Dispatch<SetStateAction<boolean>>) => {
  const [isLoading, setIsLoaded] = useState(false);
  const dispatch =useDispatch()

  const [otp, setOtp] = React.useState("");
const [error, setError] = React.useState("");
  const VerifyOtp = async (data: { mobile: string; otp: FormDataEntryValue | null }) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<LoginResponse> = await new ApiService().put(
        "/Authentication/VerifyMobile",
        data
      );
      if (response.Success) {
        const userData ={
          email:response.Data?.email,
          mobile:response.Data?.mobile,
          mobile_verified:response.Data?.mobile_verified,
          role:response.Data?.role,
        } 
           dispatch(setUserData(userData));
        dispatch(setUserToken(response.Data.token))
        dispatch(setIsloggedIn(true))
        setIsLoaded(false);
        onOpenChange(false)
      } else {
        setError("Invalid OTP. Please check the code and try again.");
        setIsLoaded(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoaded(false);
    }
  };
  return { otp, setOtp, isLoading ,VerifyOtp,error};
};

export default useOtp;
