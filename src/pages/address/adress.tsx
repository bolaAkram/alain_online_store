import { Button, Divider } from "@nextui-org/react";
import NextModal from "../../core/components/nextModal/nextModal";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import { Plus } from "lucide-react";
import AddAddress from "../addAddress/addAddress";
import useAddress from "./hooks/useAddress";
interface AdressProps {
  isOpen:boolean;
  handleClose:()=>void;
}
const Adress = ({isOpen,handleClose}:AdressProps) => {
  const addresses = [
    {
      id: "1",
      location: "Home1",
      details: [
        {
          label: "Emirate / City",
          value: "Dubai",
          id: "1",
        },
        {
          label: "Building / Villa No",
          value: "4",
          id: "2",
        },
        {
          label: "Mobile No",
          value: "+961 183 176 2734",
          id: "3",
        },
        {
          label: "Street Name",
          value: "Sheikh Ali Mohammed",
          id: "4",
        },
        {
          label: "Apartment No",
          value: "34",
          id: "5",
        },
        {
          label: "Location",
          value: "See location",
          id: "6",
        },
      ],
    },
    {
      id: "2",
      location: "Office",
      details: [
        {
          label: "Emirate / City",
          value: "Abu Dhabi",
          id: "1",
        },
        {
          label: "Building / Villa No",
          value: "12",
          id: "2",
        },
        {
          label: "Mobile No",
          value: "+971 245 789 1234",
          id: "3",
        },
        {
          label: "Street Name",
          value: "Khalifa Street",
          id: "4",
        },
        {
          label: "Apartment No",
          value: "22",
          id: "5",
        },
        {
          label: "Location",
          value: "See location",
          id: "6",
        },
      ],
    },
    {
      id: "3",
      location: "Vacation Home",
      details: [
        {
          label: "Emirate / City",
          value: "Sharjah",
          id: "1",
        },
        {
          label: "Building / Villa No",
          value: "7",
          id: "2",
        },
        {
          label: "Mobile No",
          value: "+971 500 234 6789",
          id: "3",
        },
        {
          label: "Street Name",
          value: "Al Majaz Road",
          id: "4",
        },
        {
          label: "Apartment No",
          value: "19",
          id: "5",
        },
        {
          label: "Location",
          value: "See location",
          id: "6",
        },
      ],
    },
  ];

  const {handleCloseAddAddressModal,handleOpenAddAddressModal,showAddAddressModal}=useAddress()
 
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
            onPress={handleOpenAddAddressModal}
          >
            Add New
          </Button>
        </div>
      }
    >
      {addresses.map((address) => (
        <div key={address.id}>
          <div className="border-b-2 border-dashed mb-4">
            <h1 className="text-secondary-500 font-bold mb-4">
              {address.location}
            </h1>
          </div>
          <div className="grid grid-cols-12 border-b-2 border-dashed mb-4">
            {address.details.map((address) => (
              <div className="col-span-6 mb-4" key={address.id}>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">
                    <label
                      htmlFor=""
                      className="text-gray-400 font-normal text-sm"
                    >
                      {address.label} :
                    </label>
                  </div>
                  <div className="col-span-7">
                    <span className="text-black font-bold">
                      {address.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-4">
              <Button color="danger" className="w-full" variant="bordered">
                Delete
              </Button>
            </div>
            <div className="col-span-4">
              <Button color="default" className="w-full" variant="bordered">
                Edit
              </Button>
            </div>

            <div className="col-span-4">
              <Button color="secondary" className="w-full" variant="faded">
                Default
              </Button>
            </div>
          </div>
          {addresses.length - 1 !== addresses.indexOf(address) && (
            <Divider className="my-4 bg-black" />
          )}
        </div>
      ))}
    </NextModal>


    <AddAddress
    handleClose={handleCloseAddAddressModal}
    isOpen={showAddAddressModal}
    />
    </>
  );
};

export default Adress;
