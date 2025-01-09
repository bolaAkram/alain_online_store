
import BlogContent from '../blogDetails/components/blogDetailsTabs/components/blogContent/blogContent'

import termsImage from '../../assets/images/termsMianImage.png'


const Terms = () => {
  return (
    <div className='flex justify-center items-center  flex-col'>
    <img src={termsImage} alt=''/>
    <div className='mt-7'>
      {
          [1,2,3,4,5,6,7,8,9,10].map(( index) => (
              <BlogContent key={index}/>
          ))
      }

    </div>
    </div>
  )
}

export default Terms