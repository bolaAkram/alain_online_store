import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { User } from "lucide-react";
import { setLogout } from "../../../../store/slices/authSlice";
import { Dispatch, SetStateAction } from "react";

import { ROUTES } from "../../../../routing/Routes";
import Adress from "../../../../../pages/address/adress";
import Profile from "../../../../../pages/profile/profile";
import useUserDropdown from "./hooks/useUserDropdown";

const UserDropdown = ({
  onOpenLogin,
}: {
  onOpenLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    dispatch,
    isloggedIn,
    navigate,
    userData,
    handleCloseProfileModal,
    showProfileModal,
    handleOpenProfileModal,
    handleCloseAddressModal,
    handleOpenAddressModal,
    showAddressModal,
  } = useUserDropdown();
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            color="default"
            as="button"
            className="transition-transform"
            name="Jason Hughes"
            size="sm"
            fallback={
              !isloggedIn ? (
                <User />
              ) : (
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              )
            }
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2 cursor-default">
            {userData.email === "" ? (
              <>
                Hello,{" "}
                <Button
                  color="secondary"
                  className=" font-extrabold bg-transparent"
                  variant="light"
                  onPress={() => {
                    onOpenLogin(true);
                  }}
                >
                  {" "}
                  Sign in
                </Button>
              </>
            ) : (
              <>
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{userData.email}</p>
              </>
            )}
          </DropdownItem>
          <DropdownItem
            key="Your Orders"
            onPress={() => {
              navigate(ROUTES.ORDERS);
            }}
          >
            Orders
          </DropdownItem>
          <DropdownItem key="Your Addresses" onPress={handleOpenAddressModal}>
            Addresses
          </DropdownItem>
          <DropdownItem key="Your Lists">Wish Lists</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="userPeofile" onPress={handleOpenProfileModal}>
            Profile
          </DropdownItem>
          <DropdownItem
            key="logout"
            style={{ display: isloggedIn ? "" : "none" }}
            color="danger"
            onPress={() => {
              dispatch(setLogout());
            }}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Adress handleClose={handleCloseAddressModal} isOpen={showAddressModal} />
      <Profile
        handleClose={handleCloseProfileModal}
        isOpen={showProfileModal}
      />
    </>
  );
};

export default UserDropdown;
