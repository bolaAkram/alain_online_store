
import { useLocation } from 'react-router-dom'
import BlogDetailsTabs from './components/blogDetailsTabs/blogDetailsTabs'
import { blogs } from '../../assets/data/blogs';
import blogImage from '../../assets/images/blog-details-main-image.png'

const BlogDetails = () => {
    const {state}=useLocation()
    const blog = blogs.find(blog => blog.id === parseInt(state));
    
  return (
   <>
    <div className='flex justify-center items-center flex-col gap-4'>
        <h1 className='text-3xl font-extrabold'>{blog?.title}</h1>
        <img src={blogImage} className='' alt=''/>
    </div>

  <BlogDetailsTabs/>
   </>
  )
}

export default BlogDetails