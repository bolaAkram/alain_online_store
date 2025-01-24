import {  CircleDollarSign, Filter, Percent, Star } from 'lucide-react'

import FilterSection from './components/filterSection/filterSection'
import FilterBy from './components/filterBy/filterBy'
import Category from './components/filterBy/components/category/category'
import Price from './components/price/price'
import Brand from './components/brand/brand'

import adFilter from '../../../../assets/images/AdFilter.png'
import RelatedProducts from './components/relatedProducts/relatedProducts'
import ProductFilterList from './components/filterBy/components/productFilterList/productFilterList'
interface ProductsFilterProps{
  price:{
    minPrice:number,
    maxPrice:number
  }
  
   
  
}
const ProductsFilter = ({price}:ProductsFilterProps) => {
  const items=[
    {
      id:'1',
      title:'Category',
      contant:<Category />
    },
    {
      id:'2',
      title:'Products',
      contant:<ProductFilterList />
    },
  ]
  return (
    <div className='hidden md:block border-r-1 p-5'>
      <FilterSection title='Filter By' icon={<Filter />}>
       <FilterBy items={items}/>
        </FilterSection>

        <hr className='bg-[#E5E5EA]'/>

      <div className='mt-6 mb-8'>
      <FilterSection title='Pricing' icon={<CircleDollarSign />}>
        <Price price={price}/>
        </FilterSection>
      </div>

      <hr className='bg-[#E5E5EA]'/>
        
        <div className='mt-6 mb-8'>
          <FilterSection title='Brand' icon={<Star />}>
          <Brand/>
          </FilterSection>
        </div>

        <hr className='bg-[#E5E5EA]'/>
        <div className='mt-6 mb-8'>
          <FilterSection title='On Sale' icon={
            <div className='border-1 rounded-full w-10 h-10 flex justify-center items-center'>
              <Percent />
            </div>
          }>
            <img className='my-5' src={adFilter} alt=''/>
         
          </FilterSection>
        </div>


        <hr className='bg-[#E5E5EA]'/>

        <div className='mt-6 mb-8'>
          <FilterSection title='Related Products' icon={
             <div className='border-1 rounded-full w-10 h-10 flex justify-center items-center'>
             <Percent />
           </div>
          }>
         <RelatedProducts/>
         <RelatedProducts/>
         <RelatedProducts/>
          </FilterSection>
          </div>
        
    </div>
  )
}

export default ProductsFilter