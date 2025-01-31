import {
  Button,
  Divider,
  Spacer,
  Tooltip,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { HeaderSectionProps } from "../../../../types/types";


const HeaderSection = ({ name, icon, subCategories ,lastItem}: HeaderSectionProps) => {

  return (
    <>
      <Tooltip
        showArrow
        color="default"
        content={
          <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
            {subCategories.map((subCategory) => (
              <ListboxItem key={subCategory.id}>
                {subCategory.name_english}
              </ListboxItem>
            ))}
          </Listbox>
        }
        placement={"bottom"}
      >
        <Button
          variant="light"
          className="text-white  border-0 rounded-none hover:border-b-3 hover:bg-success-foreground "
          startContent={<img src={icon} className="me-2" alt="" />}
        
        >
          {name}
        </Button>
      </Tooltip>
      {
        lastItem?"":
        <>
        <Spacer x={4} />
      <Divider orientation="vertical" className="bg-secondary-200 h-8" />
      <Spacer x={4} />
        </>
      }
      
    </>
  );
};

export default HeaderSection;
