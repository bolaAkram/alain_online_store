import { Button, Checkbox, Form, Input, Select, SelectItem } from "@nextui-org/react";
import { CircleCheck } from "lucide-react";
import { useEffect } from "react";
import addressIcon from "../../assets/svg/icons/addressIcon.svg";
import NextModal from "../../core/components/nextModal/nextModal";
import { resetAddressDetails } from "../../core/store/slices/addressSlice";
import useAddAddress from "./hooks/useAddAddress";
interface AddAddressProps {
 
  handleClose: () => void;

  mode:"add"| "edit"
}

const AddAddress = ({  handleClose,mode}: AddAddressProps) => {
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
    isDefault,setIsDefault,
    addressDetails,
    dispatch,
    isOpen
  } = useAddAddress(handleClose,mode);

  const address = "109 St, Dubai, UAE";
  const zoom = 16;


  const lat = 53.338741;
  const lon = -6.261563;
  
  useEffect(() => {
    if(addressDetails){
       getCity(addressDetails?.emirate_id.toString()||"");
       setIsDefault(addressDetails.is_default)
    }
   
  },[addressDetails])
  return (
    <NextModal
      isOpen={isOpen}
      onClose={()=>{
        handleClose()  
        setCityList([])
        dispatch(resetAddressDetails())
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
              defaultSelectedKeys={[addressDetails?.emirate_id.toString()||""]}
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
              defaultSelectedKeys={[addressDetails?.city_id.toString()||""]}
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
              defaultValue={addressDetails?.building||""}
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter landmark"
              name="landmark"
              placeholder="landmark"
              type="text"
              defaultValue={addressDetails?.landmark||""}
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Street Name / Number"
              name="street"
              placeholder="Street Name / Number"
              type="text"
              defaultValue={addressDetails?.street||""}
            />
          </div>

          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter floor"
              name="floor"
              placeholder="floor"
              type="text"
              defaultValue={addressDetails?.floor||""}
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Apartment no."
              name="apartment"
              placeholder="Apartment no."
              type="text"
              defaultValue={addressDetails?.apartment||""}
            />
          </div>

          <div className="col-span-6">
          <Checkbox name="default" defaultChecked={addressDetails?.is_default||false} isSelected={isDefault} onValueChange={setIsDefault}>Set Address as Default </Checkbox>
          </div>

          <div className="col-span-12">
          <iframe
                width="600"
                height="450"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"             src={`https://maps.google.com/maps?q=${address}&z=${zoom}&output=embed`}
                title="google map"
            ></iframe>

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
              dispatch(resetAddressDetails())
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
