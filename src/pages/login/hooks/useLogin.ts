import { AxiosResponse } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { useDispatch } from "react-redux";
import {  setIsloggedIn, setUserToken } from "../../../core/store/slices/authSlice";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const dispatch =useDispatch()
  const [isLoading, setIsLoaded] = useState(false);
  const login = async (data:{
    [k: string]: FormDataEntryValue;
  } ) => {
   
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().post(
        "/Authentication/SignIn",
        data
      );
      if (response.data.Success) {
  
        dispatch(setUserToken(response.data.Data.token))
        dispatch(setIsloggedIn(true))
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
  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    login(data)
  
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
   
    isLoading
  };
};

export default useLogin;
