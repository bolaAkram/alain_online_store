import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,


  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/Routes";

import alAinLogoLightMode from "../../../assets/svg/alainLogo_lightMode.svg";
import alAinLogoDarkMode from "../../../assets/svg/alainLogo_darkMode.svg";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { Antenna, Axe, ChevronDown } from "lucide-react";
import GlobalSearch from "./components/globalSearch/globalSearch";
import { ThemeSwitch } from "./components/themeSwitch/themeSwitch";

import Basket from "./components/basket/ui/Basket";

import LanguageSwitch from "./components/languageSwitch/languageSwitch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import UserDropdown from "./components/userDropdown/userDropdown";
import Login from "../../../pages/login/login";
import Signup from "../../../pages/signup/signup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface NavbarProps {
  setIsDark: Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}
const Navbar = ({ setIsDark, isDark }: NavbarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showSignupModal,setShowSignupModal]=useState(false)
  const isLoggedIn = useSelector((state:RootState)=>state.auth.isloggedIn)
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
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

            {/* <AlAinLogo /> */}
          </Link>
        </NavbarBrand>
        <div className="hidden md:flex gap-4 justify-start ml-2">
          <NavbarItem>
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
          </NavbarItem>
          <NavbarItem>
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
          </NavbarItem>
          <NavbarItem>
            <Link
              className={clsx(
                linkStyles({ color: "secondary" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-[#6D59A6] font-bold mt-2"
              )}
              to={ROUTES.CONTACT_US}
            >
              Contact Us
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
   
      
        <Tooltip showArrow content={
           <div className="flex justify-center items-center flex-col p-2">
           <Button
             color="secondary"
             className="w-full "
             onPress={onOpen}
           >
             SignIn
           </Button>
           <p>
             New Customer?
             <Button color="primary" className="p-0 bg-transparent" variant="light"
             onPress={()=>{setShowSignupModal(true)}}
             >
               Start here
             </Button>
           </p>
         </div>
        } isOpen={!isLoggedIn}>
            <NavbarItem className="hidden md:flex mt-2">
              <UserDropdown /> 
            </NavbarItem>
       
      </Tooltip>
      
      
        <NavbarItem className="hidden md:flex mt-2">
          <LanguageSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch setIsDark={setIsDark} />
        <Basket isDark={isDark} />
{/* 
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              color="default"
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <UserDropdown /> 
        <LanguageSwitch />

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <GlobalSearch />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
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
          </NavbarMenuItem>

          <NavbarMenuItem>
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
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className={clsx(
                linkStyles({ color: "secondary" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium text-[#6D59A6] font-bold mx-2"
              )}
              to={ROUTES.CONTACT_US}
            >
              Contact Us
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
      <Login isOpen={isOpen} onOpenChange={onOpenChange} />
      <Signup isOpen={showSignupModal} onOpenChange={setShowSignupModal}/>
    </NextUINavbar>
  );
};

export default Navbar;
