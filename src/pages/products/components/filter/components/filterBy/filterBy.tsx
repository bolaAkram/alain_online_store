

import { Accordion, AccordionItem } from '@nextui-org/react';
import  { ReactNode } from 'react'

interface FilterItem {
    id:string;
    title:string;
    contant:ReactNode
}
interface FilterByprops {
    items:FilterItem[]
}
const FilterBy = ({items}:FilterByprops) => {
  return (
    <Accordion   showDivider={false}>
        {
            items.map((item)=>(
                <AccordionItem key={item.id} aria-label={item.title} title={item.title} className='border-b-1 border-dashed border-[#E5E5EA]'>
                    {item.contant}
                </AccordionItem>
            ))
        }
    
  </Accordion>
  )
}

export default FilterBy