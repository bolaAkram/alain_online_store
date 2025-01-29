import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store"
import { User } from "lucide-react"
import { setLogout } from "../../../../store/slices/authSlice"


const UserDropdown = () => {
    const isloggedIn = useSelector((state:RootState)=>state.auth.isloggedIn)
    const userData = useSelector((state:RootState)=>state.auth.userData)
    const dispatch = useDispatch()
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
        fallback={!isloggedIn?<User />:<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />}
       
      />
    </DropdownTrigger>
    <DropdownMenu aria-label="Profile Actions" variant="flat">
      
      <DropdownItem key="profile" className="h-14 gap-2">
      {
        userData.email === ""?
        "Hello, Sign in":
        <>
        <p className="font-semibold">Signed in as</p>
        <p className="font-semibold">{userData.email}</p>
        </>
      }
        
      </DropdownItem>
      <DropdownItem key="Your Orders">Your Orders</DropdownItem>
      <DropdownItem key="Your Addresses">Your Addresses</DropdownItem>
      <DropdownItem key="Your Lists">Your Lists</DropdownItem>
      <DropdownItem key="Your Recommendations">Your Recommendations</DropdownItem>
      <DropdownItem key="Your Prime Membership">Your Prime Membership</DropdownItem>
      <DropdownItem key="help_and_feedback">
        Help & Feedback
      </DropdownItem>
    
      <DropdownItem key="logout" style={{display:isloggedIn?"":"none"}}  color="danger" onPress={()=>{
        dispatch(setLogout())

      }}>
     Log Out
       
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

export default UserDropdown