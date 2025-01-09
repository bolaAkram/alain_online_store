
import Hero from "./section/hero/hero"
import Section from "../../core/components/section/section"
import { Button } from "@nextui-org/react"
import { MoveRight } from "lucide-react"
import ShopByCategory from "./section/shopByCategory/shopByCategory"
import TopSeller from "./section/topSeller/topSeller"
import AdsSection1 from "./section/adsSection1/adsSection1"
import HighlightsProducts from "./section/highlightsProducts/highlightsProducts"
import Info from "./section/info/info"
import AdsSection2 from "./section/adsSection2/adsSection2"
import ShopByBrand from "./section/shopByBrand/shopByBrand"
import BeautyCareProducts from "./section/beautyCareProducts/beautyCareProducts"



const Home = () => {
  return (

    <>
      <Hero />
      <Section
        title="Shop By Category"
        titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <ShopByCategory />
      </Section>

      <Section
        title="Top Seller"
        titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <TopSeller />
      </Section>


      <AdsSection1/>

      <Section
         title="Highlights Products"
         titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <HighlightsProducts />
      </Section>


      <Info/>

      <div className="my-10">
      <AdsSection2/>
      </div>

      <Section
         title="Shop By Brand"
         titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <ShopByBrand />
      </Section>

      <Section
         title="Beauty Care Prodcuts"
         titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <BeautyCareProducts />
      </Section>

    </>


  )
}

export default Home