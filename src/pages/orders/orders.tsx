import Order from './components/order/order'

const Orders = () => {
  return (
    <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 lg:col-span-6'>
        <Order/>
        </div>
        <div className='col-span-12 lg:col-span-6'>
        <Order/>
        </div>
        <div className='col-span-12 lg:col-span-6'>
        <Order/>
        </div>
        <div className='col-span-12 lg:col-span-6'>
        <Order/>
        </div>
    </div>
  )
}

export default Orders