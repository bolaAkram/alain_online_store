import  { ReactNode } from 'react'
interface FilterSectionProps {
    children: ReactNode;
    title:string;
    icon:ReactNode
}
const FilterSection = ({children,title,icon}:FilterSectionProps) => {
  return (
    <div>
        <div className='border-b-1 flex justify-between items-center pb-3'>
            <h3 className='text-[#6D59A6] font-bold'>{title}</h3>
            <div className='text-[#6D59A6]'>{icon}</div>
        </div>
        {children}
    </div>
  )
}

export default FilterSection