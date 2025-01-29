import { Button, useDisclosure } from '@nextui-org/react'
import { CircleCheck, FileText } from 'lucide-react'

import Login from '../../../login/login'
import { CartDetails } from '../../../../core/types/types'

interface InvoiceProps{
  cartDetails:CartDetails
}
const Invoice = ({cartDetails}:InvoiceProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className='p-3'>
       <div className='flex items-center border-b-1 border-dashed border-gray-300 pb-5 ms-3 mt-8'>
   <FileText   className='me-2'/>
    <h3 className="font-bold">Invoice</h3>
   
   </div>
   <div className="mt-8 mx-3">
   <div className='flex items-center justify-between my-5'>
        <span>Sub - Total:</span>
        <p><span className='text-gray-400 me-2 font-normal'>AED</span>{cartDetails?.subtotal}</p>
    </div>
    <div className='flex items-center justify-between my-5'>
        <span>Shipping Fees:</span>
        <p><span className='text-gray-400 me-2 font-normal'>AED</span>{cartDetails?.shippingFee}</p>
    </div>
    <div className='flex items-center justify-between'>
        <span>Total:</span>
        <p className='text-secondary-600 font-bold'><span className='text-gray-400 me-2 font-normal'>AED</span>{cartDetails?.total}</p>
    </div>
    <div className='flex justify-start w-full mt-8 mb-7'>
      {/* <Link to={ROUTES.LOGIN} className='w-full'> */}
      <Button
      className="bg-secondary-600 text-white shadow-lg w-full py-5 text-lg"
      radius="full"
      startContent={<CircleCheck size={15} />}
      onPress={onOpen}
    >
      Pay Now
    </Button>
      {/* </Link> */}
    <Login isOpen={isOpen} onOpenChange={onOpenChange}/>
    </div>
   </div>
  
    </div>
  )
}

export default Invoice