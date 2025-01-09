
import { Button,  Tab, Tabs } from '@nextui-org/react';

import BlogContent from './components/blogContent/blogContent';

import { MoveRight } from 'lucide-react';
import Section from '../../../../core/components/section/section';
import { blogs } from '../../../../assets/data/blogs';
import BlogCard from '../../../blogs/components/blogCard/blogCard';


const BlogDetailsTabs = () => {


  return (
    <>


      <div className="flex flex-col px-4 mt-7">

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" placement={"end"}
            variant={"underlined"}
            classNames={{

              tabList: "gap-6 w-full  rounded-none  border-l border-divider",

              cursor: "h-full w-[.2rem] bg-[#010101]  -start-0 ",

              tab: "w-full px-0 h-12",

              tabContent: "group-data-[selected=true]:text-[#010101]  group-data-[selected=true]:bg-[#6D59A6] group-data-[selected=true]:bg-opacity-15 p-3 w-full  font-bold",

            }}
          >
            <Tab key="keywordHere" title="Keyword Here">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(( index) => (

                  <BlogContent key={index} />
                ))
              }


            </Tab>
            <Tab key="keywordHere1" title="Keyword Here">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(( index) => (

                  <BlogContent key={index} />
                ))
              }


            </Tab>
            <Tab key="keywordHere2" title="Keyword Here">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(( index) => (

                  <BlogContent key={index} />
                ))
              }


            </Tab>
            <Tab key="keywordHere3" title="Keyword Here">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(( index) => (

                  <BlogContent key={index} />
                ))
              }


            </Tab>
          </Tabs>
        </div>
      </div>

      <div className='flex  justify-center items-center mt-4'>
        <Section title='Related Blogs'  titleButton={
           <Button
           variant="light"
           className=" text-[#6D59A6]"
           endContent={<MoveRight size={15} />}
         >
           <span className=" underline ">View ALL</span>
         </Button>
        }>
           <div className='grid md:grid-cols-12 gap-20'>

           {
                             blogs.map((blog) => (
                                <div className=' md:col-span-6  lg:col-span-4 auto-rows-fr  flex items-stretch ' key={blog.id}>

                                    <BlogCard image={blog.image} title={blog.title} description={blog.description} blogId={blog.id} />
                                </div>
                            ))
                        }
           </div>
  
        </Section>
      </div>
    
    </>

  )
}

export default BlogDetailsTabs