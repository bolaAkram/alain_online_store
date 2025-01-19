import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Form,

  Spinner,
  InputOtp,
  Divider,
} from "@nextui-org/react";
import useOtp from "./hooks/useOtp";
import { Dispatch, SetStateAction } from "react";

interface OtpProps {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  mobileNumebr:string
}
const Otp = ({ isOpen, onOpenChange ,mobileNumebr}: OtpProps) => {
  const {  setOtp, isLoading,VerifyOtp } = useOtp(onOpenChange);
  return (
    <Modal
      isOpen={isOpen}
      placement="bottom-center"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 login-header h-20 md:h-40"></ModalHeader>
            <ModalBody>
            <h1 className="font-bold text-2xl">Verify Mobile</h1>

              <Divider className="my-1" />
               
              <Form
                className="flex w-full flex-col items-start gap-4"
                validationBehavior="native"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const otp = formData.get("otp");
                  VerifyOtp({
                    mobile:mobileNumebr,
                    otp: otp,
                  });
                  setOtp(otp as any);
                }}
              >
                <InputOtp
                  isRequired
                  aria-label="OTP input field"
                  length={6}
                  name="otp"
                  placeholder="Enter code"
                  validationBehavior="native"
                />
                <Button color="primary" type="submit">
                  {isLoading ? (
                    <Spinner color="default" size="sm" />
                  ) : (
                    "verify Otp"
                  )}
                </Button>
               
              </Form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Otp;
