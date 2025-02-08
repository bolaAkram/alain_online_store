import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    const handleCloseAddressModal = () => setShowAddressModal(false);
    const handleOpenAddressModal = () => setShowAddressModal(true);
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
    handleOpenAddressModal
  };
};

export default useUserDropdown;
