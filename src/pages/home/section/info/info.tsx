

import deliveryGif from '../../../../assets/gif/deliveryGif.gif';
import paymentGif from '../../../../assets/gif/paymentGif.gif';
import support24 from '../../../../assets/svg/support24.svg';


const Info = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <div className='flex flex-col items-center'>
      <img src={deliveryGif} className='w-[10rem] h-[10rem]' alt="" />
      <p>Free & Fast Delivery</p>
    </div>
    <div className='flex flex-col items-center'>
      <img src={support24} className='w-[10rem] h-[10rem]' alt="" />
      <p>24/7 Support</p>
    </div>
    <div className='flex flex-col items-center'>
      <img src={paymentGif} className='w-[10rem] h-[10rem]' alt="" />
      <p>Secure Payment</p>
    </div>
  </div>
  )
}

export default Info
