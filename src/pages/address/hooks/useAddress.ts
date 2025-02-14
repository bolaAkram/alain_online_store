import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAddressDetails, setAddresses } from "../../../core/store/slices/addressSlice";
import { hideAddAddressPopup, showAddAddressPopup } from "../../../core/store/slices/popupSlice";
import { RootState } from "../../../core/store/store";
import { AddressEntity, Response } from "../../../core/types/types";
import ApiService from "../../../core/utils/api";

const useAddress = () => {
  // add address modal
  const dispatch = useDispatch();
  const isOpen =useSelector((state: RootState) => state.popup.addressListPopup.show)

  const handleCloseAddAddressModal = () => dispatch(hideAddAddressPopup());
  const handleOpenAddAddressModal = () => dispatch(showAddAddressPopup());
  const [mode,setMode] = useState<'add'|'edit'>('add')
  // get all address
  const [isLoaded, setIsLoaded] = useState(false);

  const getAllAddresses = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<AddressEntity[]> = await new ApiService().get(
        "/Address/GetAddress"
      );
      if (response.Success) {
        dispatch(setAddresses(response.Data));
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

  const isLoggedIn = useSelector((state: RootState) => state.auth.isloggedIn);
  const token = useSelector((state: RootState) => state.auth.token);
  const addresses = useSelector((state: RootState) => state.address.addresses);
  useEffect(() => {
    if(isLoggedIn) if (token)  if (addresses.length === 0) getAllAddresses();
    
  }, [token,isLoggedIn]);



  
  const deleteAddress = async (id:number) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<AddressEntity[]> = await new ApiService().get(
        `/Address/Delete?id=${id}`
      );
      if (response.Success) {
        getAllAddresses()
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

  const handleEdite = (address:AddressEntity)=>{
    handleOpenAddAddressModal();
    dispatch(setAddressDetails(address))

    setMode("edit");
  }
  


  const handleChangeDefaultAddress = async (e: { target: { checked: boolean; }; },id:number) => {
    console.log(e.target.checked,id);
    
  }

  return {
 
    handleCloseAddAddressModal,
    handleOpenAddAddressModal,
    isLoaded,
    addresses,
    deleteAddress,
    
    mode,setMode,
    handleChangeDefaultAddress,
    handleEdite,
    isOpen
  };
};

export default useAddress;
