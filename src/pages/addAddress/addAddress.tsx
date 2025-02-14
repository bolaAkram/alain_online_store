import { Button, Checkbox, Form, Input, Select, SelectItem } from "@nextui-org/react";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import NextModal from "../../core/components/nextModal/nextModal";
import { CircleCheck } from "lucide-react";
import useAddAddress from "./hooks/useAddAddress";
import { AddressEntity } from "../../core/types/types";
import { Dispatch, SetStateAction, useEffect } from "react";
interface AddAddressProps {
  isOpen: boolean;
  handleClose: () => void;
  adressDetails?:AddressEntity
  setAdressDetails:Dispatch<SetStateAction<AddressEntity>>
  mode:"add"| "edit"
}
const AddAddress = ({ isOpen, handleClose,adressDetails ,setAdressDetails,mode}: AddAddressProps) => {
  const {
    emirates,
    isLoadedEmirate,
    onSubmit,
    i18n,
    isLoadedCity,
    getCity,
    CityList,
    isLoadedAddAddress,
    setCityList,
    isDefault,setIsDefault
  } = useAddAddress(handleClose,mode,adressDetails?.id||0,setAdressDetails);

  
  
  useEffect(() => {
    if(adressDetails){
       getCity(adressDetails?.emirate_id.toString()||"");
       setIsDefault(adressDetails.is_default)
    }
   
  },[adressDetails])
  return (
    <NextModal
      isOpen={isOpen}
      onClose={()=>{
        handleClose()  
        setCityList([])
        setAdressDetails({
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
        })
      }}
      modalTitle={
        <div className="flex items-center gap-2">
          <img className="w-8" src={addressIcon} alt="" />
          <h1 className="text-lg font-bold">Add Address</h1>
        </div>
      }
      footerButtons=""
    >
      <Form className="w-full" validationBehavior="native"  onSubmit={onSubmit} >
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-6">
            <Select
              isLoading={isLoadedEmirate}
              errorMessage="Please select Emirates"
              isRequired
              className="max-w-xs"
              name="emirate"
              label="Select an Emirates"
              defaultSelectedKeys={[adressDetails?.emirate_id.toString()||""]}
              onChange={(e)=>{getCity(e.target.value);
              }}
             
            >
              {emirates?.map((emirate) => (
                <SelectItem key={emirate.id}  value={emirate.id}>
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
              defaultSelectedKeys={[adressDetails?.city_id.toString()||""]}
            >
              {CityList?.map((City) => (
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
              defaultValue={adressDetails?.building||""}
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter landmark"
              name="landmark"
              placeholder="landmark"
              type="text"
              defaultValue={adressDetails?.landmark||""}
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Street Name / Number"
              name="street"
              placeholder="Street Name / Number"
              type="text"
              defaultValue={adressDetails?.street||""}
            />
          </div>

          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter floor"
              name="floor"
              placeholder="floor"
              type="text"
              defaultValue={adressDetails?.floor||""}
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Apartment no."
              name="apartment"
              placeholder="Apartment no."
              type="text"
              defaultValue={adressDetails?.apartment||""}
            />
          </div>

          <div className="col-span-6">
          <Checkbox name="default" defaultChecked={adressDetails?.is_default||false} isSelected={isDefault} onValueChange={setIsDefault}>Set Address as Default </Checkbox>
          </div>
        </div>


        <div className="flex justify-center w-full gap-5 my-5">
          <Button
            radius="full"
            color="default"
            className="w-full"
            variant="bordered"
            onPress={()=>{handleClose()
              setCityList([])
              setAdressDetails({
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
              })
            }}
          >
            Discard
          </Button>
          <Button
          type="submit"
            radius="full"
            color="secondary"
            startContent={<CircleCheck />}
            className="w-full"
            isLoading={isLoadedAddAddress}
          >
            Save
          </Button>
        </div>
      </Form>
    </NextModal>
  );
};

export default AddAddress;
