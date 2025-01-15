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
} from "@nextui-org/react";

import "./style/login.css";
import useLogin from "./hooks/useLogin";

interface LoginProps {
  onOpenChange: () => void;
  isOpen: boolean;
}
const Login = ({ isOpen, onOpenChange }: LoginProps) => {
  const { email, onSubmit, password, setEmail, setPassword,isLoading } = useLogin();
  return (
    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 login-header h-20 md:h-40"></ModalHeader>
            <ModalBody>
            <Form
              onSubmit={onSubmit}
              validationBehavior="native"
              className="w-full"
            >
          
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                />
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
           <ModalFooter className="w-full flex justify-end">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>

                <Button color="primary" type="submit">
                  {
                    isLoading? <Spinner color="default" />:"Sign in"
                  }
                 
                </Button>
              </ModalFooter>
            </Form>
            </ModalBody>
             
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Login;
