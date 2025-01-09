
import { Slider } from '@nextui-org/react'
import React from 'react'

const Price = () => {
    const [value, setValue] = React.useState([100, 300]);
  return (
    <div className='mt-8'>
       <Slider
        className="max-w-md"
        formatOptions={{style: "currency", currency: "AED"}}
        label=" "
        maxValue={1000}
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