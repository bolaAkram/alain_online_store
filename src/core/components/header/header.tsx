
import hotDealsIcon from "../../../assets/svg/headerIcon/hotDealIcon.svg";
import beautyIcon from "../../../assets/svg/headerIcon/beautyIcon.svg";
import HealthIcon from "../../../assets/svg/headerIcon/heartIcon.svg";
import vitaminsIcon from "../../../assets/svg/headerIcon/vitaminsIcons.svg";
import nutritionIcon from "../../../assets/svg/headerIcon/nutritionIcon.svg";
import healthyFoodsIcon from "../../../assets/svg/headerIcon/healthyFoodsIcon.svg";
import babyFoodIcon from "../../../assets/svg/headerIcon/babyFoodIcon.svg";
import { Divider, Spacer } from '@nextui-org/react';
import { ChevronDown } from 'lucide-react';
const Header = () => {
  return (
    <div className=" bg-secondary text-white ">
    <div className="container mx-auto max-w-7xl px-6 flex-grow flex h-16 items-center space-x-4 justify-between   overflow-auto md:overflow-y-hidden lg:overflow-visible">
      <div>
        
          <div className="flex items-center cursor-pointer">
            <img src={hotDealsIcon} className="me-2" alt="" />
            <span className="text-[#FFCC00]">Hot Deals</span>
            
          </div>

      </div>
      <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8"/>
      <Spacer x={4} />
      <div>
      <div className="flex items-center cursor-pointer">
            <img src={beautyIcon} className="me-2" alt="" />
            Beauty
            <ChevronDown size={20} className="ms-2"/>
          </div>
      </div>
      <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8"/>

      <Spacer x={4} />
      <div>
        
        <div className="flex items-center cursor-pointer">
            <img src={HealthIcon} className="me-2" alt="" />
            Health
          </div>
      
      
      </div>
      <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8"/>

      <Spacer x={4} />
      <div>
       
        <div className="flex items-center cursor-pointer">
            <img src={vitaminsIcon} className="me-2" alt="" />
            Vitamins
          </div>
      
       
      </div>
      <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8"/>

      <Spacer x={4} />
      <div>
        
        <div className="flex items-center cursor-pointer">
            <img src={nutritionIcon} className="me-2" alt="" />
            Nutrition
          </div>
         
        
      </div>
      <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8"/>

      <Spacer x={4} />
      <div>
       
        <div className="flex items-center cursor-pointer">
            <img src={healthyFoodsIcon} className="me-2" alt="" />
            Healthy Foods
          </div>
         
       
      </div>
      <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8"/>

      <Spacer x={4} />
      <div>
        
        <div className="flex items-center cursor-pointer">
            <img src={babyFoodIcon} className="me-2" alt="" />
            Baby Food
          </div>
          
     
      </div>
    </div>
  </div>
  )
}

export default Header
