import { Button } from '@nextui-org/react'
import { MapPinPlus, Pencil } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { showAddressListPopup } from '../../../../core/store/slices/popupSlice'


const DeliveryAddress = () => {
  const dispatch = useDispatch()
  return (
   <div className='p-3 bg-secondary-50 bg-opacity-45 rounded-2xl'>
   <div className='flex items-center border-b-1 border-dashed border-gray-300 pb-5 ms-3 mt-7'>
   <MapPinPlus  className='me-2'/>
    <h3 className="font-bold">Delivery Address</h3>
   </div>
   <div className='mt-5 ps-3'>
    <p className='mb-5'>30 El Adly St, Dubai, UAE.</p> 
    <p>Apt: 3   Floor: 2</p>
   </div>
   <div className='mt-5'>
   <Button color="secondary" className='font-bold' startContent={<Pencil size={15}/>} variant="light"
   onPress={()=>{
    dispatch(showAddressListPopup())
   }}
   >
   Edit Address
      </Button>
   </div>
   </div>
  )
}

export default DeliveryAddress