import { CheckboxGroup, Checkbox } from '@nextui-org/react'

import filorga  from "../../../../../../assets/svg/brands/filorga.svg"
import is_clinical  from "../../../../../../assets/svg/brands/is_clinical.svg"
import larocheposay  from "../../../../../../assets/svg/brands/larocheposay.svg"
import skinceuticals  from "../../../../../../assets/svg/brands/skinceuticals.svg"
import vichy  from "../../../../../../assets/svg/brands/vichy.svg"


const Brand = () => {
  return (
    <CheckboxGroup defaultValue={["filorga", "is_clinical"]}  className='mt-6'>
    <Checkbox value="filorga">
        <img src={filorga} className='w-14 h-5' alt=''/>
    </Checkbox>
    <Checkbox value="is_clinical">
    <img src={is_clinical} className='w-14 h-5' alt=''/>
        
    </Checkbox>
    <Checkbox value="larocheposay">
    <img src={larocheposay} className='w-14 h-5' alt=''/>
        
    </Checkbox>
    <Checkbox value="skinceuticals">
    <img src={skinceuticals} className='w-14 h-5' alt=''/>
        
    </Checkbox>
    <Checkbox value="vichy">
    <img src={vichy} className='w-14 h-5' alt=''/>
        
    </Checkbox>
  </CheckboxGroup>
  )
}

export default Brand