import { Button } from "@nextui-org/button"

import "./style/ad.css";
import { useTranslation } from "react-i18next";
const AdsSection1 = () => {
  const {i18n}=useTranslation()
  return (
    <div className=" ads1 flex justify-between w-full items-center ">
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-5 w-full">
      <div className="grid grid-rows-2 col-span-1 gap-5">
        <div className={`bg-[#F9DEDC] w-full md:w-[100%]  xl:w-full  h-[366px] rounded-2xl card-1 flex  justify-center ${i18n.language ==="en"?"md:justify-end":"md:justify-start"}  items-center p-6`}>
          <div className="text-center">
          <h1 className=" text-white md:text-black font-extrabold text-[1.5rem] mb-2">Nourish Better!</h1>
          <p className="text-white md:text-black font-thin">
            Delicious, nutrient-packed foods <br /> for a healthier you—shop our <br />
            selection today.
          </p>
          <Button
            radius="full"
            className="bg-[#6D59A6] mt-10 text-white px-10 py-6"
          >
            Discover Now
          </Button>
          </div>
          
        </div>

        <div className={`bg-[#0101011F] w-full md:w-[100%]  xl:w-full  h-[366px] rounded-2xl card-2 flex justify-center ${i18n.language ==="en"?" md:justify-start":"md:justify-end"}  items-center p-6`}>
          <div className="text-center">
          <h1 className="text-white md:text-black font-extrabold text-[1.5rem] mb-2">Glow Inside & Out!</h1>
          <p className="text-white md:text-black font-thin">
          Explore skincare essentials and<br /> beauty must-haves for every  <br />
          routine.
          </p>
          <Button
            radius="full"
            className="bg-[#6D59A6] mt-10 text-white px-10 py-6"
          >
            Discover Now
          </Button>
          </div>
          
        </div>
        
      </div>
      <div className="grid grid-rows-1 col-span-1">
      <div className="row-span-2 bg-[#6D59A680] w-full  2xl:w-full h-full card-3 text-center p-10 rounded-2xl">
        <h1 className="font-extrabold text-white text-[1.5rem] md:text-[2rem]">
          Fuel your wellness!
        </h1>
        <p className="font-thin text-white mt-3">
          Discover top vitamins for energy, immunity, and daily health
          support.
        </p>
        <Button
          radius="full"
          className="bg-[#6D59A6] mt-10 text-white px-10 py-6"
        >
          Discover Now
        </Button>
      </div>
      </div>
    
    </div>
  </div>
  )
}

export default AdsSection1
