import { useEffect, useState } from "react";
import { AddressEntity, Response } from "../../../core/types/types";
import ApiService from "../../../core/utils/api";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAddresses } from "../../../core/store/slices/addressSlice";
import { RootState } from "../../../core/store/store";

const useAddress = () => {
  // add address modal
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const handleCloseAddAddressModal = () => setShowAddAddressModal(false);
  const handleOpenAddAddressModal = () => setShowAddAddressModal(true);

  // get all address
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
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
  const [adressDetails, setAdressDetails] = useState<AddressEntity>({
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
  });

  const [mode,setMode] = useState<'add'|'edit'>('add')
  return {
    showAddAddressModal,
    handleCloseAddAddressModal,
    handleOpenAddAddressModal,
    isLoaded,
    addresses,
    deleteAddress,
    adressDetails,
    setAdressDetails,
    mode,setMode
  };
};

export default useAddress;
