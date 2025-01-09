import { Input, Button } from "@nextui-org/react"
import { SearchIcon } from "lucide-react"
import BlogsTabs from "./components/blogsTabs/blogsTabs"

import blogMianImage from "../../assets/images/blog-side-image.png";

const Blogs = () => {
  return (
    <div className="w-full">
    <div className="h-screen flex flex-col md:flex-row justify-between items-center">
      <div>
        <h1 className="font-black text-3xl leading-10	">Feel Good, Look Good: <br />
          Expert Advice on
          <br />
          <span className="text-secondary-500">Beauty & Wellness</span>

        </h1>
        <p className="text-gray-400 mt-12 mb-16">Discover expert tips, trends, and insights <br />
          to enhance your lifestyle.</p>




        <Input
          classNames={{
            base: "max-w-full  h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full rounded-full border-1 border-black font-normal text-default-500 bg-transparent",
          }}
          placeholder="what are you looking for..."
          size="lg"
          startContent={<SearchIcon size={18} />}
          type="search"
          endContent={
            <Button
              className="bg-black text-white shadow-lg h-full px-7 absolute z-10 right-0"
              radius="full"
            >
              Search
            </Button>
          }
        />
      </div>

        <img src={blogMianImage} className=" object-contain" alt=""/>
    </div>
    <BlogsTabs />
  </div>
  )
}

export default Blogs