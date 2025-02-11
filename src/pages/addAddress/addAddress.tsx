import { Button, Form, Input, Select, SelectItem } from "@nextui-org/react";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import NextModal from "../../core/components/nextModal/nextModal";
import { CircleCheck } from "lucide-react";
import useAddAddress from "./hooks/useAddAddress";
interface AddAddressProps {
  isOpen: boolean;
  handleClose: () => void;
}
const AddAddress = ({ isOpen, handleClose }: AddAddressProps) => {
  const {
    emirates,
    isLoadedEmirate,
    onSubmit,
    i18n,
    isLoadedCity,
    getCity,
    cities,
  } = useAddAddress();

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
      footerButtons=""
    >
      <Form className="w-full" validationBehavior="native" onSubmit={onSubmit}>
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-6">
            <Select
              isLoading={isLoadedEmirate}
              errorMessage="Please select Emirates"
              isRequired
              className="max-w-xs"
              name="emirates"
              label="Select an Emirates"
              onChange={(e)=>{getCity(e.target.value);
              }}
            >
              {emirates?.map((emirate) => (
                <SelectItem key={emirate.id} value={emirate.id}>
                  {i18n.language === "en"
                    ? emirate.name_english
                    : emirate.name_arabic}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-6">
            <Select
              isLoading={isLoadedCity}
              errorMessage="Please select City"
              isRequired
              className="max-w-xs"
              name="city"
              label="Select an City"
            >
              {cities?.map((City) => (
                <SelectItem key={City.id} value={City.id}>
                  {i18n.language === "en"
                    ? City.name_english
                    : City.name_arabic}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter building"
              name="building"
              placeholder="building"
              type="text"
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter landmark"
              name="landmark"
              placeholder="landmark"
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
              errorMessage="Please enter floor"
              name="floor"
              placeholder="floor"
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


        <div className="flex justify-center w-full gap-5 my-5">
          <Button
            radius="full"
            color="default"
            className="w-full"
            variant="bordered"
            onPress={handleClose}
          >
            Discard
          </Button>
          <Button
          type="submit"
            radius="full"
            color="secondary"
            startContent={<CircleCheck />}
            className="w-full"
          >
            Save
          </Button>
        </div>
      </Form>
    </NextModal>
  );
};

export default AddAddress;
