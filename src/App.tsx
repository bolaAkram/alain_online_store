import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "react-tooltip/dist/react-tooltip.css";
import { UserType } from "./core/enums/enums";
import { router } from "./core/routing/router";
import { setGuestToken } from "./core/store/slices/authSlice";
import { RootState } from "./core/store/store";
import { Response } from "./core/types/types";
import ApiService from "./core/utils/api";

interface GetToken {
  email: string;
  mobile: null|string;
  mobile_verified: boolean;
  token: string;
  role:UserType;
}
function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  // const isLoggedIn = useSelector((state:RootState)=>state.auth.isloggedIn)
  useEffect(() => {
    if (i18n.language !== "en") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [i18n.language]);

  const getToken = async () => {
    try {
      const response: Response<GetToken> = await new ApiService().post(
        `/Authentication/GetToken`,
        {
          email: "alain@alain.com",
          password: "123456",
        }
      );
      if (response.Success) {
     

        dispatch(setGuestToken(response.Data.token));
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
    }
  };
  let onceCall = true;
  useEffect(() => {
    if (onceCall) {
      if (token === "") {
        getToken();
      }

      onceCall = false;
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" reverseOrder={true} />
 
    </>
  );
}

export default App;
