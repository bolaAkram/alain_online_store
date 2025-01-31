import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,

  useDisclosure,

} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/Routes";

import alAinLogoLightMode from "../../../assets/svg/alainLogo_lightMode.svg";
import alAinLogoDarkMode from "../../../assets/svg/alainLogo_darkMode.svg";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import GlobalSearch from "./components/globalSearch/globalSearch";
import { ThemeSwitch } from "./components/themeSwitch/themeSwitch";

import Basket from "./components/basket/ui/Basket";

import LanguageSwitch from "./components/languageSwitch/languageSwitch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import UserDropdown from "./components/userDropdown/userDropdown";
import Login from "../../../pages/login/login";
import Signup from "../../../pages/signup/signup";


interface NavbarProps {
  setIsDark: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}
const Navbar = ({ setIsDark, isDark }: NavbarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showSignupModal, setShowSignupModal] = useState(false);
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isloggedIn);
  // const [showSigninTooltip, setShowSigninTooltip] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className=" sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            to={ROUTES.SLASH}
          >
            {isDark ? (
              <img src={alAinLogoLightMode} className="w-24" alt="" />
            ) : (
              <img src={alAinLogoDarkMode} className="w-24" alt="" />
            )}
          </Link>
        </NavbarBrand>
        <div className="hidden md:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <Link className="font-medium" to={ROUTES.PRODUCTS_FILTER}>
              Shop
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDown />}
                    radius="sm"
                    variant="light"
                  >
                    Shop
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                  startContent={<Axe />}
                >
                  Autoscaling
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                  startContent={<Antenna />}
                >
                  Usage Metrics
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem> */}
          {/* <NavbarItem>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium mt-2"
              )}
              color="foreground"
              to={ROUTES.BLOGS}
            >
              Blog
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link
                className={clsx(
                  linkStyles({ color: "secondary" }),
                  "font-extrabold"
                )}
              to={ROUTES.CONTACT_US}
            >
              Contact us
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch setIsDark={setIsDark} />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <GlobalSearch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Basket isDark={isDark} />
        </NavbarItem>

        {/* <Tooltip
          anchorSelect="#profile"
          clickable
          opacity={1}
          variant="light"
          style={{
            borderRadius: "14px",
          }}
          className="border border-gray-300 shadow-2xl"
          isOpen={!isLoggedIn}
        >
          <div className="flex justify-center items-center flex-col p-2">
            <Button color="secondary" className="w-full " onPress={onOpen}>
              SignIn
            </Button>
            <p>
              New Customer?
              <Button
                color="primary"
                className="p-0 bg-transparent"
                variant="light"
                onPress={() => {
                  setShowSignupModal(true);
                }}
              >
                Start here
              </Button>
            </p>
          </div>
        </Tooltip> */}

        <NavbarItem className="hidden md:flex mt-2" id="profile">
          <UserDropdown onOpenLogin={onOpen}/>
        </NavbarItem>

        <NavbarItem className="hidden md:flex mt-2">
          <LanguageSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch setIsDark={setIsDark} />
        <Basket isDark={isDark} />

        {/* <Tooltip
          anchorSelect="#profile-mob"
          clickable
          opacity={1}
          variant="light"
          style={{
            borderRadius: "14px",
          }}
          className="border border-gray-300 shadow-2xl"
          isOpen={!isLoggedIn}
        >
          <div className="flex justify-center items-center flex-col p-2">
            <Button color="secondary" className="w-full " onPress={onOpen}>
              SignIn
            </Button>
            <p>
              New Customer?
              <Button
                color="primary"
                className="p-0 bg-transparent"
                variant="light"
                onPress={() => {
                  setShowSignupModal(true);
                }}
              >
                Start here
              </Button>
            </p>
          </div>
        </Tooltip> */}
        <NavbarItem id="profile-mob">
          <UserDropdown  onOpenLogin={onOpen}/>
        </NavbarItem>

        <LanguageSwitch />

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <GlobalSearch />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* <NavbarMenuItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDown />}
                    radius="sm"
                    variant="light"
                  >
                    Shop
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                  startContent={<Axe />}
                >
                  Autoscaling
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                  startContent={<Antenna />}
                >
                  Usage Metrics
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem> */}

          {/* <NavbarMenuItem>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium mx-2"
              )}
              color="foreground"
              to={ROUTES.BLOGS}
            >
              Blog
            </Link>
          </NavbarMenuItem> */}
          <NavbarMenuItem>
            <Link className=" font-medium" to={ROUTES.PRODUCTS_FILTER}>
              Shop
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              className={clsx(
                linkStyles({ color: "secondary" }),
                "font-extrabold"
              )}
              to={ROUTES.CONTACT_US}
            >
              Contact us
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
      <Login isOpen={isOpen} onOpenChange={onOpenChange} />
      <Signup isOpen={showSignupModal} onOpenChange={setShowSignupModal} />
    </NextUINavbar>
  );
};

export default Navbar;
