import {
  Modal,
  Form,
  ModalContent,
  ModalHeader,
  ModalBody,
  Spacer,
  Input,
  ModalFooter,
  Button,
  Spinner,
  Divider,
  Alert,
} from "@nextui-org/react";
import useSignup from "./hooks/useSignup";
import { Dispatch, SetStateAction } from "react";
import Otp from "../otp/otp";

interface SignupProps {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}
const Signup = ({ isOpen, onOpenChange }: SignupProps) => {
  const {
    email,
    setEmail,
    mobile,
    setMobile,
    name,
    setName,
    password,
    setPassword,
    onSubmit,
    isLoading,
    mobileNumber,
    showOtpModal,setShowOtpModal,
    error
  } = useSignup(onOpenChange);
  return (
    <>
        <Modal
      isOpen={isOpen}
      placement="bottom-center"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 login-header h-20 md:h-40"></ModalHeader>
            <ModalBody>
            <h1 className="font-bold text-2xl">Sign up</h1>
            <Divider className="my-1" />
            {
                 error && <Alert color={"danger"} title={error} />
              }
              <Form
                onSubmit={onSubmit}
                validationBehavior="native"
                className="w-full"
              >
                <Spacer y={2} />
                <Input
                  isRequired
                  errorMessage="Please enter a valid Name"
                  label="Name"
                  labelPlacement="outside"
                  name="name"
                  placeholder="Enter your Name"
                  type="text"
                  value={name}
                  onValueChange={setName}
                />
                <Spacer y={4} />
                <Input
                  isRequired
                  errorMessage="Please enter a valid number"
                  label="Mobile Number"
                  labelPlacement="outside"
                  name="mobile"
                  placeholder="Enter your Mobile"
                  type="number"
                  value={mobile}
                  onValueChange={setMobile}
                />
                <Spacer y={4} />
                <Input
           
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                />
                <Spacer y={4} />
                <Input
                  isRequired
                  errorMessage="Please enter a valid Password"
                  label="Password"
                  labelPlacement="outside"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onValueChange={setPassword}
                />
                <Spacer y={2} />
                <ModalFooter className="w-full flex justify-end">
                  <Button color="danger" variant="flat" onPress={()=>{onClose()
                          setName("");
                          setEmail("");
                          setMobile("");
                          setPassword("");
                  }}>
                    Close
                  </Button>

                  <Button color="primary" type="submit">
                    {isLoading ? (
                      <Spinner color="default" size="sm" />
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>

    <Otp isOpen={showOtpModal} onOpenChange={setShowOtpModal} mobileNumebr={mobileNumber}/>
    </>

  );
};

export default Signup;
