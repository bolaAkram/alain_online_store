import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { useDispatch } from "react-redux";
import { setGuestToken } from "../../../core/store/slices/authSlice";
interface Payload{
    email: string;
    mobile: string;
    name: string;
    password: string;
  }
const useSignup = (onOpenChange:Dispatch<SetStateAction<boolean>>) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumebr] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);

  const signup = async (data: Payload) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().post(
        "/api/Authentication/SignUp",
        data
      );
      if (response.data.Success) {
       
        setMobileNumebr(data?.mobile || "");
        onOpenChange(false)
        setShowOtpModal(true);
        // dispatch(setGuestToken(response.data.Data.token));
        setIsLoaded(false);
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
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
    signup(data as any);
  };
  return {
    onSubmit,
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    password,
    setPassword,
    isLoading,
    mobileNumber,
    showOtpModal,
    setShowOtpModal,
  };
};

export default useSignup;
