import { useState } from "react";


const useAddress = () => {

    // add address modal
    const [showAddAddressModal, setShowAddAddressModal] = useState(false);
    const handleCloseAddAddressModal = () => setShowAddAddressModal(false);
    const handleOpenAddAddressModal = () => setShowAddAddressModal(true);
  return {
    showAddAddressModal,
    handleCloseAddAddressModal,
    handleOpenAddAddressModal
  }
}

export default useAddress