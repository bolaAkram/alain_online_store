import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import i18next from 'i18next';

// import ArabicFlagIcon from '../../../../../assets/svg/components/ArabicFlagIcon';
import ArabicFlagIcon from '../../../../../assets/svg/icons/AE - United Arab Emirates.svg';
import EnglishFlagIcon from '../../../../../assets/svg/components/EnglishFlagIcon';
import { useState } from 'react';

const LanguageSwitch = () => {
    const [isOpenLocalSelect, setIsOpenLocalSelect] = useState(false);

  return (
    <Popover
    backdrop={"blur"}
    isOpen={isOpenLocalSelect}
    onOpenChange={(open) => setIsOpenLocalSelect(open)}
  >
    <PopoverTrigger className="cursor-pointer">
    
      {i18next.language === "en" ? (
        <div className="flex flex-col items-center">
          <EnglishFlagIcon />
          <span className="text-xs">English</span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src={ArabicFlagIcon} alt="" />
          {/* <ArabicFlagIcon /> */}
          <span className="text-xs">Arabic</span>
        </div>
      )}
    </PopoverTrigger>
    <PopoverContent>
      <div className="px-1 py-2 flex flex-col gap-3">
        <Button
          onPress={() => {
            setIsOpenLocalSelect(false);
            i18next.changeLanguage("en");
          }}
          color="default"
          variant="light"
          startContent={<EnglishFlagIcon />}
        >
          English
        </Button>
        <Button
          onPress={() => {
            setIsOpenLocalSelect(false);
            i18next.changeLanguage("ar");
          }}
          color="default"
          variant="light"
          startContent={ <img src={ArabicFlagIcon} className=' w-7' alt="" />}
        >
          Arabic
        </Button>
      </div>
    </PopoverContent>
  </Popover>
  )
}

export default LanguageSwitch