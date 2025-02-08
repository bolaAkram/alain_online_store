import { Button, Form, Input } from "@nextui-org/react";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import NextModal from "../../core/components/nextModal/nextModal";
import { CircleCheck } from "lucide-react";
interface AddAddressProps {
  isOpen:boolean;
  handleClose:()=>void;
}
const AddAddress = ({isOpen,handleClose}:AddAddressProps) => {


  interface FormDataEntries {
    [key: string]: FormDataEntryValue;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: FormDataEntries = Object.fromEntries(
      new FormData(e.currentTarget)
    );
  };

  return (
    <NextModal
      isOpen={isOpen}
      onClose={handleClose}
      modalTitle={
        <div className="flex items-center gap-2">
          <img className="w-8" src={addressIcon} alt="" />
          <h1 className="text-lg font-bold">Add Address</h1>
        </div>
      }
      footerButtons={
        <div className="flex justify-center w-full gap-5">
         <Button
            radius="full"
            color="default"
        
            className="w-full"
            variant="bordered"
          >
            Discard
          </Button> 
           <Button
            radius="full"
            color="secondary"
            startContent={<CircleCheck />}
            className="w-full"
          >
            Save
          </Button>
         
        </div>
      }
    >
      <Form className="w-full" validationBehavior="native" onSubmit={onSubmit}>
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Address Name"
              name="addressName"
              placeholder="Address Name"
              type="text"
             
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Mobile Number"
              name="mobileNumber"
              placeholder="Mobile Number"
              type="text"
             
            />
          </div>

          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Emirates"
              name="emirates"
              placeholder="Emirates"
              type="text"
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Street Name / Number"
              name="streetNameNumber"
              placeholder="Street Name / Number"
              type="text"
            />
          </div>

          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Building / Villa no."
              name="buildingVillano"
              placeholder="Building / Villa no."
              type="text"
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Apartment no."
              name="Apartmentno"
              placeholder="Apartment no."
              type="text"
            />
          </div>
        </div>
      </Form>
    </NextModal>
  );
};

export default AddAddress;
