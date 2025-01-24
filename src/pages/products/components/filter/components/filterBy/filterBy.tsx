import { Accordion, AccordionItem } from "@nextui-org/react";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../core/store/store";

interface FilterItem {
  id: string;
  title: string;
  contant: ReactNode;
}
interface FilterByprops {
  items: FilterItem[];
}
const FilterBy = ({ items }: FilterByprops) => {
  const storedCategory = useSelector(
    (state: RootState) => state.productFilter.categoryFilter
  );
  const keys = items.map((items) => items.id);
  return (
    <Accordion
      defaultExpandedKeys={storedCategory.length > 0 ? keys : []}
      showDivider={false}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          aria-label={item.title}
          title={item.title}
          className="border-b-1 border-dashed border-[#E5E5EA]"
        >
          {item.contant}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FilterBy;
