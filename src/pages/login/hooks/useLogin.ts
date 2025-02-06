import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { useDispatch } from "react-redux";
import {
  setIsloggedIn,
  setUserData,
  setUserToken,
} from "../../../core/store/slices/authSlice";
import { LoginResponse, Response } from "../../../core/types/types";

const useLogin = (onOpenChange: Dispatch<SetStateAction<boolean>>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [mobileNumber, setMobileNumebr] = useState("");

  const login = async (data: { [k: string]: FormDataEntryValue }) => {
    setError("");
    setIsLoaded(true);
    try {
      setIsLoaded(true);
      const response: Response<LoginResponse> = await new ApiService().post(
        "/Authentication/SignIn",
        data
      );
      if (response.Success) {
        setEmail("")
        setPassword("")
        const userData ={
          email:response.Data?.email,
          mobile:response.Data?.mobile,
          mobile_verified:response.Data?.mobile_verified,
          role:response.Data?.role,
        } 
        setMobileNumebr(userData.mobile)
        setIsLoaded(false);
        onOpenChange(false);
        if(userData.mobile_verified === false || response.Data?.token ===""){
          setShowOtpModal(true);
        }else{
          dispatch(setUserToken(response.Data?.token));
          dispatch(setUserData(userData));
                 dispatch(setIsloggedIn(true));
        }
      } else {
        setError("Invalid Email/Mobile Number or password. Please try again.");

        setIsLoaded(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error);
      setIsLoaded(false);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    login(data);
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    error,
    isLoading,
    showOtpModal,
    setShowOtpModal,
    mobileNumber,
    setError
  };
};

export default useLogin;
