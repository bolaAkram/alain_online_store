

import product1 from '../../../../../../assets/images/products/product1.png'

const RelatedProducts = () => {
  return (
    <div className='mt-6'>
        <div className='flex '>
            <img className='w-20 h-20 border-1 rounded-xl' src={product1} alt=''/>    
            <div className='ms-3 flex flex-col justify-between pb-2'>
                <p>Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml</p>
                <p className='font-bold text-end'><span className='font-light text-gray-400'>AED</span> 160,00</p>
            </div>
        </div>
    </div>
  )
}

export default RelatedProducts