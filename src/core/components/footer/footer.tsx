import { Button } from '@nextui-org/react'

import phoneIcon from '../../../assets/svg/icons/call-callingIcon.svg'
import whatsappIcon from '../../../assets/svg/icons/whatsappIcon.svg'
import emailIcon from '../../../assets/svg/icons/sms-trackingIcon.svg'
// import alAinLogo from '../../../assets/images/Logo-lightMode.png';
import viseIcon from '../../../assets/svg/Visa.svg'
import masterCardIcon from '../../../assets/svg/mastercard.svg'
import SmsaIcon from '../../../assets/images/sms.png';
import { useTranslation } from 'react-i18next';

import alAinLogoLightMode from '../../../assets/svg/alainLogo_lightMode.svg'
import alAinLogoDarkMode from '../../../assets/svg/alainLogo_darkMode.svg'

interface FooterProps{
  isDark:boolean
}
const Footer = ({isDark}:FooterProps) => {
  const {i18n}=useTranslation()
  return (
    <div className="w-full px-4 md:px-8">
  {/* Logo Section */}
  <div className="flex justify-center mb-8 md:mb-16">
  {
                                isDark ?
                                    <img src={alAinLogoLightMode} className="w-40 h-12 md:w-56 md:h-16" alt="" />
                                    :
                                    <img src={alAinLogoDarkMode} className="w-40 h-12 md:w-56 md:h-16" alt="" />

                            }
    {/* <img src={alAinLogo} className="w-40 h-12 md:w-56 md:h-16" alt="AlAin Logo" /> */}
  </div>
  <hr className="mb-8" />
  
  {/* Contact Info and Newsletter Section */}
  <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 mb-12">
    {/* Contact Info */}
    <div className={`flex flex-col gap-7 w-full col-span-6 mt-6 md:mt-9 border-r-0 ${i18n.language === "en"?"md:border-r":"md:border-l"}  md:pr-6`}>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-2">
        <div className="flex items-center">
        <img
     src={phoneIcon} 
     alt='phoneIcon'
    />
          {/* <img src={phoneIcon} alt="" /> */}
          <p className="ml-2 text-sm md:text-base">+971 43342555</p>
        </div>
        <div className="flex items-center">
        <img
     src={whatsappIcon} 
     alt='whatsappIcon'
    />
        {/* <img src={whatsappIcon} alt="" /> */}
          <p className="ml-2 text-sm md:text-base">+971 504591506</p>
        </div>
        <div className="flex items-center">
        <img
     src={emailIcon} 
     alt='emailIcon'
    />
        {/* <img src={emailIcon} alt="" /> */}
          <p className="ml-2 text-sm md:text-base">info@alaineoutlet.com</p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-4 gap-4 items-center">
        <img
      src={viseIcon}
      
     className="w-16 md:w-[81px] h-[28px] md:h-[32px]" alt="Visa Icon"
    />

<img
     src={masterCardIcon} className="w-16 md:w-[81px] h-[28px] md:h-[32px]" alt="MasterCard Icon"
    />

<img
     src={SmsaIcon} className="w-16 md:w-[81px] mt-2 md:mt-3" alt="Smsa Icon"
    />
        
        </div>
      </div>
    </div>

    {/* Newsletter Form */}
    <div className="col-span-4 mt-6 md:mt-9">
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <label className="text-lg md:text-xl font-normal ml-2 md:ml-6">
          Join our New Steller
          </label>
          <div className="relative border w-full flex items-center rounded-lg border-[#F2F2F7] px-3 md:px-4 mt-4">
            <input
              type="email"
              className="w-full py-2 md:py-3 text-sm md:text-base"
              placeholder={"Enter your Email address"}
            />
            <Button
              radius="full"
              size="sm"
              className="bg-[#6D59A6] text-white px-4 py-2 ml-2"
            >
             Join
            </Button>
          </div>
          <p className="font-light text-xs md:text-sm mt-4 ml-2 md:ml-6">
          Will be used in accordance with our 
            <a className="text-[#6D59A6]" href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <hr className="mb-8" />

  {/* Footer */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
    <p className="text-xs md:text-sm text-center md:text-left">
      Alain Allied Outlet 2022 CREATED BY ALAIN ALLIED. HEALTH & BEAUTY STORE.
    </p>
    <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
      <p className="text-xs md:text-sm cursor-pointer">Returns & Refund Policy</p>
      <p className="text-xs md:text-sm cursor-pointer">Shipping Terms</p>
      <p className="text-xs md:text-sm cursor-pointer">Privacy Policy</p>
      <p className="text-xs md:text-sm cursor-pointer">Terms & Conditions</p>
    </div>
  </div>
</div>
  )
}

export default Footer
