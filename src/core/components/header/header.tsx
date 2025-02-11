
import HeaderSection from "./components/headerSection/headerSection";
import useHeader from "./hooks/useHeader";
const Header = () => {
  const {storedHeaderItems}=useHeader()
  return (
    <div className=" bg-secondary text-white ">
    <div className="container mx-auto max-w-7xl px-6 flex-grow flex h-16 items-center space-x-4 justify-between   overflow-auto md:overflow-y-hidden lg:overflow-visible">
 
     {
      storedHeaderItems.map((item,i)=>(
        <HeaderSection key={i} lastItem={storedHeaderItems.length-1 === i } name={item.name_english} icon={item.icon_url} subCategories={item.subCategories}/>
      ))
     }
    </div>
  </div>
  )
}

export default Header
