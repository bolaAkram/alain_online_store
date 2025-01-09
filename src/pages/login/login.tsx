import { Modal, ModalContent, ModalHeader, ModalBody, Input, Checkbox, ModalFooter, Button } from '@nextui-org/react'
import { MailIcon, LockIcon } from 'lucide-react'

import { Link } from 'react-router-dom'
import './style/login.css';

interface LoginProps{
    onOpenChange: () => void;
    isOpen: boolean
}
const Login = ({isOpen,onOpenChange}:LoginProps) => {
  
   
  return (
    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader    className="flex flex-col gap-1 login-header h-20 md:h-40">
     
          </ModalHeader>
          <ModalBody>
            <Input
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              endContent={
                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                classNames={{
                  label: "text-small",
                }}
              >
                Remember me
              </Checkbox>
              <Link color="primary" to="#" className='text-small'>
                Forgot password?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Sign in
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}

export default Login