

import { Tabs, Tab, cn, PaginationItemRenderProps, PaginationItemType, Pagination } from '@nextui-org/react'
import  { useState } from 'react'
import BlogCard from '../blogCard/blogCard';

import { ChevronRight } from 'lucide-react';
import { blogs } from '../../../../assets/data/blogs';




const BlogsTabs = () => {

    const itemsPerPage = 4; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate start and end index for slicing the data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = blogs.slice(startIndex, endIndex);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };


    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
    }: PaginationItemRenderProps) => {
        if (value === PaginationItemType.NEXT) {
            return (
                <button
                    key={key}
                    className={cn(className, "bg-transparent   min-w-8 w-8 h-8")}
                    onClick={onNext}
                >
                    <ChevronRight />

                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button
                    key={key}
                    className={cn(className, "bg-transparent min-w-8 w-8 h-8")}
                    onClick={onPrevious}
                >
                    <ChevronRight className="rotate-180" />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return (
                <button key={key} className={className}>
                    ...
                </button>
            );
        }

        // cursor is the default item
        return (
            <button
                key={key}
                ref={ref}
                className={cn(
                    className,
                    isActive && "text-dark border-1 bg-transparent border-black ",
                )}
                onClick={() => setPage(value)}
            >
                {value}
            </button>
        );
    };
    return (
        <div className=' flex w-full flex-col'>
            <Tabs fullWidth aria-label="Tabs variants" variant={"underlined"}
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#010101]",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-[#010101] font-bold",
                }}
            >
                <Tab key="featured" title="Featured" >
                    <div className='grid md:grid-cols-12 gap-20'>


                        {
                            currentItems.map((blog) => (
                                <div className=' md:col-span-6  lg:col-span-4 auto-rows-fr  flex items-stretch ' key={blog.id}>

                                    <BlogCard image={blog.image} title={blog.title} description={blog.description} blogId={blog.id} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-center mt-10'>
                    <Pagination
                        disableCursorAnimation
                        showControls
                        className="gap-2"
                        initialPage={1}
                        radius="full"
                        renderItem={renderItem}
                        onChange={handleChangePage}
                        total={Math.ceil(blogs.length / itemsPerPage)}
                        variant="light"
                        classNames={{

                            cursor:
                                "bg-transparent",
                        }}
                    />
                    </div>
                 
                </Tab>
                <Tab key="womenHealth" title="Women Health" >
                    <h1>Women Health</h1>
                </Tab>
                <Tab key="vitamins" title="Vitamins" >
                    <h1>Vitamins</h1>
                </Tab>

                <Tab key="beauty" title="Beauty" >
                    <h1>Beauty</h1>
                </Tab>
                <Tab key="nutritions" title="Nutritions" >
                    <h1>Nutritions</h1>
                </Tab>

            </Tabs>
        </div>
    )
}

export default BlogsTabs