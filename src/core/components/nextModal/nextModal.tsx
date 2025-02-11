import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ReactNode } from "react";

interface NextModalProps {
  children: ReactNode;
  footerButtons?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalTitle: ReactNode;
}

const NextModal = ({
  children,
  footerButtons,
  onClose,
  isOpen,
  modalTitle,
}: NextModalProps) => {
  return (
    <>
      <Modal scrollBehavior="inside" backdrop={"blur"} isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {modalTitle}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
         { footerButtons&& <ModalFooter>{footerButtons}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NextModal;
