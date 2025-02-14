import { Button, Divider, Switch } from "@nextui-org/react";
import { Plus } from "lucide-react";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import NextModal from "../../core/components/nextModal/nextModal";
import AddAddress from "../addAddress/addAddress";
import LoadingScreen from "../loadingScreen/loadingScreen";
import useAddress from "./hooks/useAddress";
interface AdressProps {

  handleClose: () => void;
}
const Address = ({  handleClose }: AdressProps) => {
  const {
    handleCloseAddAddressModal,
    handleOpenAddAddressModal,

    addresses,
    deleteAddress,
    isLoaded,

    mode,
    setMode,
    handleChangeDefaultAddress,
    handleEdite,
    isOpen
  } = useAddress();

  return (
    <>
      <NextModal
        isOpen={isOpen}
        onClose={handleClose}
        modalTitle={
          <div className="flex items-center gap-2">
            <img className="w-8" src={addressIcon} alt="" />
            <h1 className="text-lg font-bold">Address</h1>
          </div>
        }
        footerButtons={
          <div className="flex justify-center w-full">
            <Button
              radius="full"
              color="secondary"
              startContent={<Plus />}
              className="w-full"
              onPress={() => {
                handleOpenAddAddressModal();
                setMode("add");
              }}
            >
              Add New
            </Button>
          </div>
        }
      >
        {isLoaded ? (
          <LoadingScreen />
        ) : (
          addresses.map((address) => (
            <div key={address.id}>
              <div className="border-b-2 border-dashed mb-4">
                <h1 className="text-secondary-500 font-bold mb-4">
                  {address.building} - {address.street} - {address.emirate_id}
                </h1>
              </div>
              <div className="grid grid-cols-12 border-b-2 border-dashed mb-4">
                <div className="col-span-6 mb-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5">
                      <label
                        htmlFor=""
                        className="text-gray-400 font-normal text-sm"
                      >
                        Emirate / City :
                      </label>
                    </div>
                    <div className="col-span-7">
                      <span className="text-black font-bold">
                        {address.emirate_id} / {address.city_id}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 mb-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5">
                      <label
                        htmlFor=""
                        className="text-gray-400 font-normal text-sm"
                      >
                        Building / Villa No :
                      </label>
                    </div>
                    <div className="col-span-7">
                      <span className="text-black font-bold">
                        {address.building}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 mb-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5">
                      <label
                        htmlFor=""
                        className="text-gray-400 font-normal text-sm"
                      >
                        Street Name :
                      </label>
                    </div>
                    <div className="col-span-7">
                      <span className="text-black font-bold">
                        {address.street}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 mb-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5">
                      <label
                        htmlFor=""
                        className="text-gray-400 font-normal text-sm"
                      >
                        Apartment No :
                      </label>
                    </div>
                    <div className="col-span-7">
                      <span className="text-black font-bold">
                        {address.apartment}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 mb-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5">
                      <label
                        htmlFor=""
                        className="text-gray-400 font-normal text-sm"
                      >
                        Landmark :
                      </label>
                    </div>
                    <div className="col-span-7">
                      <span className="text-black font-bold">
                        {address.landmark}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 mb-4">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5">
                      <label
                        htmlFor=""
                        className="text-gray-400 font-normal text-sm"
                      >
                        Floor :
                      </label>
                    </div>
                    <div className="col-span-7">
                      <span className="text-black font-bold">
                        {address.floor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-4">
                  <Button
                    color="danger"
                    className="w-full"
                    variant="bordered"
                    onPress={() => {
                      deleteAddress(address.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <div className="col-span-4  ">
                  <Button
                    color="default"
                    className="w-full"
                    variant="bordered"
                    onPress={() => {
                      handleEdite(address);
                    }}
                  >
                    Edit
                  </Button>
                </div>

                <div className="col-span-4 flex items-center">
                  {/* <Button color="secondary" className="w-full" variant="faded">
                    Default
                  </Button> */}
                  <Switch
                    defaultSelected={address.is_default}
                    onChange={(e) => {
                      handleChangeDefaultAddress(e, address.id);
                    }}
                    color="secondary"
                  >
                    Default
                  </Switch>
                </div>
              </div>
              {addresses.length - 1 !== addresses.indexOf(address) && (
                <Divider className="my-4 bg-black" />
              )}
            </div>
          ))
        )}
      </NextModal>

      <AddAddress handleClose={handleCloseAddAddressModal} mode={mode} />
    </>
  );
};

export default Address;
