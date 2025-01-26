import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"
import { User } from "lucide-react"


const UserDropdown = () => {
    const isloggedIn = useSelector((state:RootState)=>state.auth.isloggedIn)
  return (
    <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <Avatar
        isBordered
        color="default"
        as="button"
        className="transition-transform"
        name="Jason Hughes"
        size="sm"
        fallback={!isloggedIn?<User />:""}
        src={isloggedIn?"https://i.pravatar.cc/150?u=a042581f4e29026704d":""}
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
      <DropdownItem key="help_and_feedback">
        Help & Feedback
      </DropdownItem>
      <DropdownItem key="logout" color="danger">
        Log Out
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

export default UserDropdown