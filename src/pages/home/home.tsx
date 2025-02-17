import Hero from "./section/hero/hero";
import Section from "../../core/components/section/section";
import { Button, Spinner } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import ShopByCategory from "./section/shopByCategory/shopByCategory";
import TopSeller from "./section/topSeller/topSeller";
import AdsSection1 from "./section/adsSection1/adsSection1";
import HighlightsProducts from "./section/highlightsProducts/highlightsProducts";
import Info from "./section/info/info";
import AdsSection2 from "./section/adsSection2/adsSection2";
import ShopByBrand from "./section/shopByBrand/shopByBrand";
import BeautyCareProducts from "./section/beautyCareProducts/beautyCareProducts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBrandToFilter,
  addCategoryToFilter,
  addProductsTypeToFilter,
  resetFilter,
} from "../../core/store/slices/productFilterSlice";
import { Brand, MainCategory } from "../../core/types/types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../core/routing/Routes";
import useHome from "./hooks/useHome";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilter());
  }, []);

  const [category, setCategory] = useState<MainCategory[]>([]);
  const [brand, setBrand] = useState<Brand[]>([]);
  const navigate = useNavigate();

  const {isLoaded,selectedCategory}=useHome()
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
            onPress={() => {
              category.map((CT) => {
                dispatch(addCategoryToFilter(CT.id));
              });

              navigate(ROUTES.PRODUCTS_FILTER);
            }}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <ShopByCategory setCategory={setCategory} />
      </Section>

      <Section
        title="Top Seller"
        titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
            onPress={()=>{
            dispatch(addProductsTypeToFilter("TopSeller"))
              navigate(ROUTES.PRODUCTS_FILTER);
            }}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <TopSeller />
      </Section>

      <AdsSection1 />

      <Section
        title="Highlights Products"
        titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
            onPress={()=>{
              dispatch(addProductsTypeToFilter("Highlights"))
                navigate(ROUTES.PRODUCTS_FILTER);
              }}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <HighlightsProducts />
      </Section>

      <Info />

      <div className="my-10">
        <AdsSection2 />
      </div>

      <Section
        title="Shop By Brand"
        titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
            onPress={() => {
              brand.map((BD) => {
                dispatch(addBrandToFilter(BD.id));
              });

              navigate(ROUTES.PRODUCTS_FILTER);
            }}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <ShopByBrand setBrand={setBrand}/>
      </Section>

{
  isLoaded?<Spinner/>:

  <Section
        title={selectedCategory?.name_english||""}
        titleButton={
          <Button
            variant="light"
            className=" text-[#6D59A6]"
            endContent={<MoveRight size={15} />}
            onPress={()=>{
              dispatch(addProductsTypeToFilter(selectedCategory?.name_english||""))
                navigate(ROUTES.PRODUCTS_FILTER);
              }}
          >
            <span className=" underline ">View ALL</span>
          </Button>
        }
      >
        <BeautyCareProducts productsList = {selectedCategory?.products||[]} />
      </Section>
}
    
    </>
  );
};

export default Home;
