

import policyImage from '../../assets/images/policyMianImage.png'
import BlogContent from '../blogDetails/components/blogDetailsTabs/components/blogContent/blogContent'
const Policy = () => {
  return (
    <>
    <div className='flex justify-center items-center  flex-col'>
      <img src={policyImage} alt=''/>
      <div className='mt-7'>
        {
            [1,2,3,4,5,6,7,8,9,10].map(( index) => (
                <BlogContent key={index}/>
            ))
        }
  
      </div>
      </div>
    </>
  )
}

export default Policy