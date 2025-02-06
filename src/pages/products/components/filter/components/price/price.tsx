
import { Slider } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPriceFrom, setPriceTo } from '../../../../../../core/store/slices/productFilterSlice'

const Price = ({price}:{price:{
   minPrice:number,
  maxPrice:number
}
 
}) => {
    const [value, setValue] = React.useState([0, price?.maxPrice]);
    const dispatch = useDispatch()
    useEffect(()=>{
   
      dispatch(setPriceFrom(value[0]))
      dispatch(setPriceTo(value[1]))
      
    },[value])
  return (
    <div className='mt-8'>
       <Slider
        className="max-w-md"
        formatOptions={{style: "currency", currency: "AED"}}
        label=" "
        maxValue={price?.maxPrice}
        minValue={0}
        step={10}
       showOutline={true}
        size="sm"
    
        value={value}
        onChange={setValue as any}
      />  



    </div>
  )
}

export default Price