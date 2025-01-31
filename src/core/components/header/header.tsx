
import HeaderSection from "./components/headerSection/headerSection";
import useHeader from "./hooks/useHeader";
const Header = () => {
  const {topBarCategory}=useHeader()
  return (
    <div className=" bg-secondary text-white ">
    <div className="container mx-auto max-w-7xl px-6 flex-grow flex h-16 items-center space-x-4 justify-between   overflow-auto md:overflow-y-hidden lg:overflow-visible">
      {
        topBarCategory?.map((category,i)=>(
          <HeaderSection key={i} lastItem={topBarCategory.length-1 === i } name={category.name_english} icon={category.icon_url} subCategories={category.subCategories}/>
        ))
      }
     
    </div>
  </div>
  )
}

export default Header
