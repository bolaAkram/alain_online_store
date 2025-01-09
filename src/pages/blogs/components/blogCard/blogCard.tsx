import { Link } from "react-router-dom";
import { ROUTES } from "../../../../core/routing/Routes";



interface BlogCardProps {
    image?: string;
    title: string;
    description: string;
    blogId?: number;
}
const BlogCard = ({title,description,blogId}:BlogCardProps) => {
  return (
    <>
        <div className='border-1 border-gray-200 rounded-2xl flex flex-col justify-between '>
        <div className='p-4 flex flex-col justify-between h-full self-stretch'>
        <div className='w-full h-40 bg-gray-200 rounded-lg'>
            {/* <Image src={image} layout='fill' objectFit='cover' className='rounded-lg' alt=''/> */}
             </div>
             <h1 className='text-lg  font-bold mt-4'>{title}</h1>
        <div className='flex flex-col gap-2  text-start  '>
       
          
          <p className='text-sm text-gray-500 '>{description} </p>
      

        </div>
        </div>
       <Link to={ROUTES.BLOG_DETAILS} state={blogId}>
       <div className='rounded-b-2xl bg-black text-white p-2 flex justify-center items-center'>
            <p>Read More</p>
        </div> 
       </Link>
       
    </div>



    
    </>

  )
}

export default BlogCard