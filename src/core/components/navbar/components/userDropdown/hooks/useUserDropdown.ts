import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { hideAddressListPopup, showAddressListPopup } from "../../../../../store/slices/popupSlice";

const useUserDropdown = () => {
  const isloggedIn = useSelector((state: RootState) => state.auth.isloggedIn);
  const userData = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //profile modal
  const [showProfileModal, setShowProfileModal] = useState(false);
  const handleCloseProfileModal = () => setShowProfileModal(false);
  const handleOpenProfileModal = () => setShowProfileModal(true);

    //profile modal
    const [showAddressModal, setShowAddressModal] = useState(false);
    const handleCloseAddressModal = () => dispatch(hideAddressListPopup());
    const handleOpenAddressModal = () => dispatch(showAddressListPopup());


      const isLoggedIn = useSelector((state: RootState) => state.auth.isloggedIn);
    
  return {
    isloggedIn,
    userData,
    dispatch,
    navigate,
    showProfileModal,
    handleCloseProfileModal,
    handleOpenProfileModal,
    showAddressModal,
    handleCloseAddressModal,
    handleOpenAddressModal,
    isLoggedIn
  };
};

export default useUserDropdown;
