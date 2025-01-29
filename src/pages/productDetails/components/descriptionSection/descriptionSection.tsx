
import { Accordion, AccordionItem } from '@nextui-org/react'

import weightIcon from '../../../../assets/svg/icons/weightIcon.svg'
import dimensions from '../../../../assets/svg/icons/dimensionsIcon.svg'
import size from '../../../../assets/svg/icons/sizeIcon.svg'
import { Product } from '../../../../core/types/types'
import DOMPurify from "dompurify";
interface DescriptionSectionProps{
  productDetails:Product
}


const DescriptionSection = ({productDetails}:DescriptionSectionProps) => {
  return (
    <div className=" bg-[#6D59A60A] bg-opacity-5 w-full pb-9 ">
    <div className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
    <Accordion
    motionProps={{
      variants: {
        enter: {
          y: 0,
          opacity: 1,
          height: "auto",
          overflowY: "unset",
          transition: {
            height: {
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 1,
            },
            opacity: {
              easings: "ease",
              duration: 1,
            },
          },
        },
        exit: {
          y: -10,
          opacity: 0,
          height: 0,
          overflowY: "hidden",
          transition: {
            height: {
              easings: "ease",
              duration: 0.25,
            },
            opacity: {
              easings: "ease",
              duration: 0.3,
            },
          },
        },
      },
    }}
    showDivider={false}
  >
    <AccordionItem
      key="1"
      aria-label="Description"
      title={
        <h2 className="font-bold text-2xl border-b-1 border-dashed border-[#C7C7CC] pb-7">
          Description
        </h2>
      }
      className="border-none"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 items-center text-gray-700 mb-9">
        {/* <!-- Weight --> */}
        <div className="flex items-center border-r-2">
          <span className="mr-2">
            <img src={weightIcon} alt="weight" className="w-5 h-5" />
          </span>
          <span className="font-medium">Weight:</span>
          <span className="font-bold ml-1">{productDetails?.weight_kg}</span>
        </div>

        {/* <!-- Dimensions --> */}
        <div className="flex items-center border-r-2">
          <span className="mr-2">
            <img
              src={dimensions}
              alt="dimensions"
              className="w-5 h-5"
            />
          </span>
          
          <span className="font-medium">Dimensions:</span>
          <span className="font-bold ml-1">5 x 5 x 12</span>
        </div>

        {/* <!-- Size --> */}
        <div className="flex items-center ">
          <span className="mr-2">
            <img src={size} alt="size" className="w-5 h-5" />
          </span>
          <span className="font-medium">Size:</span>
          <span className="font-bold ml-1">200 ml</span>
        </div>
      </div>
      <p className="font-normal text-xl text-[#79747E] px-4">
      <div
                className="text-gray-600 mt-2 "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    productDetails?.description_english || ""
                  ),
                }}
              ></div>
      </p>
    </AccordionItem>
    <AccordionItem
      key="2"
      aria-label="How To Use"
      title={
        <h2 className="font-bold text-2xl border-b-1 border-dashed border-[#C7C7CC] pb-7">
          How To Use
        </h2>
      }
    >
      <div className="max-w-4xl mx-auto  ">
        {/* <!-- Instructions --> */}
        <div className="space-y-6">
          {/* <!-- Step 1 --> */}
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              1
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-700">
                Before Use:
              </h3>
              <p className="text-gray-600">
                Carefully read the patient information leaflet provided
                with the medicine. Ensure you are not allergic to any of
                the ingredients.
              </p>
            </div>
          </div>

          {/* <!-- Step 2 --> */}
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              2
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-700">
                How to Take It:
              </h3>
              <p className="text-gray-600">
                Take the medicine as directed by your doctor or
                pharmacist. Follow the recommended dose at the specified
                time.
              </p>
            </div>
          </div>

          {/* <!-- Step 3 --> */}
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              3
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-700">
                Additional Tips:
              </h3>
              <p className="text-gray-600">
                Do not skip doses or double the dose to make up for a
                missed one. Store the medicine in a cool, dry place, out
                of reach of children.
              </p>
            </div>
          </div>

          {/* <!-- Step 4 --> */}
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              4
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-700">
                Stopping the Medicine:
              </h3>
              <p className="text-gray-600">
                Do not stop taking the medicine without consulting your
                doctor, even if you feel better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </Accordion>
    </div>
  </div>
  
  )
}

export default DescriptionSection