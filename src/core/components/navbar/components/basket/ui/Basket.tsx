
import { CircleCheck } from "lucide-react";


import useBasket from "../hooks/useBasket";

import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import ShoppingCardIcon from "../../../../../../assets/svg/components/ShoppingCardIcon";
import { Avatar, Badge, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,  useDisclosure } from "@nextui-org/react";
import Item from "../components/item/item";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routing/Routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";


interface BasketProps{
  isDark:boolean
}
const Basket = ({isDark}:BasketProps) => {
  const { numberOfItems,   productList,
    numberOfProducts ,isLoaded} = useBasket();
  const { isOpen, onOpen, onClose } = useDisclosure();
    const haveChange = useSelector((state:RootState)=>state.cart.itemIsAdded)
  useEffect(()=>{},[haveChange])
 
  return (
    <>
     

      <Badge
        color="danger"
        content={numberOfProducts}
        isInvisible={false}
        shape="circle"
        className="mt-2 cursor-pointer	"
        onClick={onOpen}
      >

        <Avatar
          onClick={onOpen}
          fallback={ <ShoppingCardIcon color={!isDark?"#FFFFFF" :"#010101"}/>}
          className="bg-[#6D59A640] cursor-pointer	"
        />

      </Badge>
      {
        numberOfProducts === 0 ?"":
        <Modal backdrop={"blur"} isOpen={isOpen} size="3xl" onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center justify-between">
                    <ShoppingCardIcon color={!isDark?"#FFFFFF" :"#010101"} />
                    <h3 className="ms-3 font-bold text-[1.5rem]">Basket</h3>
                    <Chip radius="full" className="bg-[#6D59A6] text-white ms-3">
                      {productList.length}
                    </Chip>
                  </div>
                </div>
              </ModalHeader>
          
               
                <ModalBody>
        
  
  
              {
            productList.map((product)=>(
                  <Item item={{
                    productImg:product.photo_url,
                    id:product.id,
                    disc:product.short_description_english,
                    price:product.price,
                    numberOfProducts:product.quantity
                  }} lastItemLength={numberOfItems.length - 1} isLoaded={isLoaded} itemsNumber = {numberOfItems.length}/>
                ))
              }
                </ModalBody>
       
             
              <ModalFooter>
              <div className='w-full'>

<div className=" mx-3">
  <div className='flex items-center justify-between my-5'>
    <span>Sub - Total:</span>
    <p><span className='text-gray-400 me-2 font-normal'>AED</span>160,00</p>
  </div>
  <div className='flex items-center justify-between my-5'>
    <span>Shipping Fees:</span>
    <p><span className='text-gray-400 me-2 font-normal'>AED</span>22,00</p>
  </div>
  <div className='flex items-center justify-between'>
    <span>Total:</span>
    <p className='text-secondary-600 font-bold'><span className='text-gray-400 me-2 font-normal'>AED</span>1000,00</p>
  </div>
  <div className='flex justify-start w-full mt-4 '>
    <Link to={ROUTES.SUMMARY} className=" w-full ">
    <Button
      className="bg-secondary-600 text-white shadow-lg w-full py-5 text-lg"
      radius="full"
      startContent={<CircleCheck size={15} />}
    
    >
      Let's Checkout
    </Button>
    </Link>
    
  </div>
</div>

</div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      }
     
      {/* 
<Modal backdrop="blur"  placement="center" isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
          {(onClose) => (
            <>
             <ModalHeader className="flex flex-col gap-1">
              <div className="w-full flex justify-between items-center">
              <div className="flex items-center justify-between">
                <ShoppingCardIcon />
                <h3 className="ms-3 font-bold text-[1.5rem]">Basket</h3>
                <Chip radius="full" className="bg-[#6D59A6] text-white ms-3">
                  {numberOfItems.length}
                </Chip>
              </div>

              
            </div>
              </ModalHeader>
              <ModalBody>
              <div className=" p-3 overflow-auto">
       

            {numberOfItems.map((items) => (
              <div
                key={items.id}
                className={`${numberOfItems.length - 1 ? "border-b-1" : ""} border-dashed border-[#E5E5EA] py-5 flex justify-between`}
              >
                <div className="flex items-center">
                  <div className="p-1 shadow-lg me-4">
                    <img src={items.productImg} className="w-[4rem]" alt="" />
                  </div>
                  <div className="flex  justify-between flex-col h-full">
                    <p className="text-[#010101] mb-3 w-72">{items.disc}</p>
                    <p className="font-thin text-[#79747E]">
                      ADE
                      <span className="text-[#6D59A6] font-bold  ms-1">
                        {items.price}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center  h-[3rem] border-1 rounded-full overflow-hidden">
                    <Button
                      variant="light"
                      className=" font-bold"
                      onClick={() => {
                        setProductCount((perv) => (perv > 0 ? --perv : 0));
                      }}
                    >
                      <Minus />
                    </Button>
                    <p className="text-[#6D59A6] font-bold text-[1.5rem]">

                      {productCount}
                    </p>

                    <Button
                      variant="light"
                      className=" font-bold "
                      onClick={() => {
                        setProductCount((perv) => ++perv);
                      }}
                    >
                      <Plus />
                    </Button>
                  </div>
                  <Button color="danger" startContent={<Trash2 size={15} />} variant="light" className="mt-3">
                    Remove Item
                  </Button>
                </div>

              </div>
            ))}
            <hr />

         
          </div>
              </ModalBody>
              <ModalFooter>
              <div className='w-full'>

<div className=" mx-3">
  <div className='flex items-center justify-between my-5'>
    <span>Sub - Total:</span>
    <p><span className='text-gray-400 me-2 font-normal'>AED</span>160,00</p>
  </div>
  <div className='flex items-center justify-between my-5'>
    <span>Shipping Fees:</span>
    <p><span className='text-gray-400 me-2 font-normal'>AED</span>22,00</p>
  </div>
  <div className='flex items-center justify-between'>
    <span>Total:</span>
    <p className='text-secondary-600 font-bold'><span className='text-gray-400 me-2 font-normal'>AED</span>1000,00</p>
  </div>
  <div className='flex justify-start w-full mt-4 '>
    <Button
      className="bg-secondary-600 text-white shadow-lg w-full py-5 text-lg"
      radius="full"
      startContent={<CircleCheck size={15} />}
    >
      Let's Checkout
    </Button>
  </div>
</div>

</div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}

    </>

  );
};

export default Basket;
