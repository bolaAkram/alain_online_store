import { Button, Divider } from "@nextui-org/react";
import { Plus } from "lucide-react";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import NextModal from "../../core/components/nextModal/nextModal";
import AddAddress from "../addAddress/addAddress";
import LoadingScreen from "../loadingScreen/loadingScreen";
import useAddress from "./hooks/useAddress";
interface AdressProps {
  isOpen: boolean;
  handleClose: () => void;
}
const Adress = ({ isOpen, handleClose }: AdressProps) => {
  // const addresses = [
  //   {
  //     id: "1",
  //     location: "Home1",
  //     details: [
  //       {
  //         label: "Emirate / City",
  //         value: "Dubai",
  //         id: "1",
  //       },
  //       {
  //         label: "Building / Villa No",
  //         value: "4",
  //         id: "2",
  //       },
  //       {
  //         label: "Mobile No",
  //         value: "+961 183 176 2734",
  //         id: "3",
  //       },
  //       {
  //         label: "Street Name",
  //         value: "Sheikh Ali Mohammed",
  //         id: "4",
  //       },
  //       {
  //         label: "Apartment No",
  //         value: "34",
  //         id: "5",
  //       },
  //       {
  //         label: "Location",
  //         value: "See location",
  //         id: "6",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     location: "Office",
  //     details: [
  //       {
  //         label: "Emirate / City",
  //         value: "Abu Dhabi",
  //         id: "1",
  //       },
  //       {
  //         label: "Building / Villa No",
  //         value: "12",
  //         id: "2",
  //       },
  //       {
  //         label: "Mobile No",
  //         value: "+971 245 789 1234",
  //         id: "3",
  //       },
  //       {
  //         label: "Street Name",
  //         value: "Khalifa Street",
  //         id: "4",
  //       },
  //       {
  //         label: "Apartment No",
  //         value: "22",
  //         id: "5",
  //       },
  //       {
  //         label: "Location",
  //         value: "See location",
  //         id: "6",
  //       },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     location: "Vacation Home",
  //     details: [
  //       {
  //         label: "Emirate / City",
  //         value: "Sharjah",
  //         id: "1",
  //       },
  //       {
  //         label: "Building / Villa No",
  //         value: "7",
  //         id: "2",
  //       },
  //       {
  //         label: "Mobile No",
  //         value: "+971 500 234 6789",
  //         id: "3",
  //       },
  //       {
  //         label: "Street Name",
  //         value: "Al Majaz Road",
  //         id: "4",
  //       },
  //       {
  //         label: "Apartment No",
  //         value: "19",
  //         id: "5",
  //       },
  //       {
  //         label: "Location",
  //         value: "See location",
  //         id: "6",
  //       },
  //     ],
  //   },
  // ];

  const {
    handleCloseAddAddressModal,
    handleOpenAddAddressModal,
    showAddAddressModal,
    addresses,
    deleteAddress,
    isLoaded,
    adressDetails,
    setAdressDetails,
    mode,
    setMode,
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
                <div className="col-span-4">
                  <Button
                    color="default"
                    className="w-full"
                    variant="bordered"
                    onPress={() => {
                      handleOpenAddAddressModal();
                      setAdressDetails(address);
                      setMode("edit");
                    }}
                  >
                    Edit
                  </Button>
                </div>

                <div className="col-span-4">
                  {/* <Button color="secondary" className="w-full" variant="faded">
                    Default
                  </Button> */}
                  
                </div>
              </div>
              {addresses.length - 1 !== addresses.indexOf(address) && (
                <Divider className="my-4 bg-black" />
              )}
            </div>
          ))
        )}
      </NextModal>

      <AddAddress
        handleClose={handleCloseAddAddressModal}
        isOpen={showAddAddressModal}
        adressDetails={adressDetails}
        setAdressDetails={setAdressDetails}
        mode={mode}
      />
    </>
  );
};

export default Adress;
