import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  Form,
  Spinner,
  Spacer,
  Divider,
  Alert,
} from "@nextui-org/react";

import "./style/login.css";
import useLogin from "./hooks/useLogin";
import { SetStateAction, useState,Dispatch } from "react";
import Signup from "../signup/signup";
import Otp from "../otp/otp";


interface LoginProps {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}
const Login = ({ isOpen, onOpenChange }: LoginProps) => {
  const { email, onSubmit, password, setEmail, setPassword, isLoading,error,showOtpModal,setShowOtpModal,mobileNumber,setError } =
    useLogin(onOpenChange);

    const [showSignupModal,setShowSignupModal]=useState(false)
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
            <h1 className="font-bold text-2xl">Sign in</h1>
           
              <div className="flex justify-start">
                <p className="text-gray-400 font-medium text-sm">I don't have an account: </p>
              
                <button onClick={()=>{
                  setShowSignupModal(true)
                  onOpenChange(false)
                  }}
                  className="font-bold text-sm ms-2 "
                  >
                  Sign up
                </button>
              </div>
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
                  errorMessage="Please enter a valid email"
                  label="Email / Mobile Number"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="text"
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
                      setError("")
                      setEmail("")
                      setPassword("")
                  }}>
                    Close
                  </Button>

                  <Button color="primary" type="submit">
                    {isLoading ? (
                      <Spinner color="default" size="sm" />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>



    <Signup isOpen={showSignupModal} onOpenChange={setShowSignupModal}/>
    <Otp isOpen={showOtpModal} onOpenChange={setShowOtpModal} mobileNumebr={mobileNumber}/>
    </>

  );
};

export default Login;
