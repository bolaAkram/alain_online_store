
import { RouterProvider } from 'react-router-dom';

import { router } from './core/routing/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AxiosResponse } from 'axios';
import ApiService from './core/utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setGuestToken } from './core/store/slices/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { RootState } from './core/store/store';
import 'react-tooltip/dist/react-tooltip.css'

function App() {






const {i18n}=useTranslation()
const dispatch = useDispatch()
const token = useSelector((state:RootState)=>state.auth.token)
const isLoggedIn = useSelector((state:RootState)=>state.auth.isloggedIn)
  useEffect(()=>{
    if(i18n.language !== "en"){
      document.body.dir ="rtl"
    }else{
           document.body.dir ="ltr"
    }
  },[i18n.language])



 

  const getToken =async ()=>{
    try {
      const response:AxiosResponse = await new ApiService().post(`/Authentication/GetToken`,{
        "email" : "alain@alain.com" ,
        "password" : "123456" 
    })
      if(response.data.Success){
      console.log(response.data.Data.token);

      dispatch(setGuestToken(response.data.Data.token))
      }
     
    } catch (error: any) {
      console.log('===========error========');
      toast.error("This didn't work.")
      console.log(error.message);
    }
  }
  let onceCall = true
  useEffect(()=>{
    if(onceCall){
      if(token==="" || isLoggedIn === false){
        getToken()
      }

       onceCall = false
    }
   
  },[isLoggedIn])
  return (
    <>
       <RouterProvider router={router} />
       <Toaster
         position="bottom-right"
         reverseOrder={true}
       />
    </>
  )
}

export default App
