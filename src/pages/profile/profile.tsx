import { Avatar, Badge, Button, Form, Input } from "@nextui-org/react";
import NextModal from "../../core/components/nextModal/nextModal";
import profileIcon from "../../assets/svg/icons/profileIcon.svg";
import { useState } from "react";
import { Eye, EyeOff, Pencil } from "lucide-react";

interface ProfileProps {
  isOpen:boolean;
  handleClose:()=>void;
}
const Profile = ({isOpen,handleClose}:ProfileProps) => {
  interface FormDataEntries {
    [key: string]: FormDataEntryValue;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: FormDataEntries = Object.fromEntries(
      new FormData(e.currentTarget)
    );
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <NextModal
      isOpen={isOpen}
      onClose={handleClose}
      modalTitle={
        <div className="flex items-center gap-2">
          <img className="w-8" src={profileIcon} alt="" />
          <h1 className="text-lg font-bold">Profile</h1>
        </div>
      }
      footerButtons={
        <div className="flex justify-center w-full gap-5">
          <Button
            radius="full"
            color="danger"
            className="w-full"
            variant="bordered"
          >
            Log out
          </Button>
          <Button radius="full" color="secondary" className="w-full">
            Save Edits
          </Button>
        </div>
      }
    >
      <Form className="w-full" validationBehavior="native" onSubmit={onSubmit}>
        <div className="flex justify-center items-center w-full mb-6">
        <Badge isOneChar color="secondary" content={<Pencil size={10}/>}  placement="bottom-right">
        <Avatar
        className="w-20 h-20 text-large"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
      </Badge>
        </div>
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-6">
            <Input
              errorMessage="Please enter First Name"
              name="firstName"
              label="First Name"
              labelPlacement="outside"
              placeholder="First Name"
              type="text"
              endContent={<Pencil size={15} />}
            />
          </div>
          <div className="col-span-6">
            <Input
              errorMessage="Please enter Last Name"
              name="lastName"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Last Name"
              type="text"
              endContent={<Pencil size={15} />}
            />
          </div>

          <div className="col-span-6">
            <Input
   
              errorMessage="Please enter E-mail Address"
              name="E-mail"
                label="E-mail Address"
              labelPlacement="outside"
              placeholder="E-mail"
              type="email"
            />
          </div>
          <div className="col-span-6">
            <Input
              isRequired
              errorMessage="Please enter Mobile Number"
              name="mobileNumber"
              label="Mobile Number"
              labelPlacement="outside"
              placeholder="Mobile Number"
              type="text"
              endContent={<Pencil size={15} />}
            />
          </div>

          <div className="col-span-12">
          <Input
      className="w-full"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
               <Eye />
          ) : (
        
            <EyeOff />
          )}
        </button>
      }
      label="Password"
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
   
              labelPlacement="outside"
    />
          </div>
         
        </div>
      </Form>
    </NextModal>
  );
};

export default Profile;
