
import { RouterProvider } from 'react-router-dom';

import { router } from './core/routing/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
const {i18n}=useTranslation()
  useEffect(()=>{
    if(i18n.language !== "en"){
      document.body.dir ="rtl"
    }else{
           document.body.dir ="ltr"
    }
  },[i18n.language])
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
