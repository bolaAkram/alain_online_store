import { Button, Tooltip } from "@nextui-org/react";
import { Info, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Itemprops {
    lastItemLength: number;
    itemsNumber: number;
    item: {
        id: number;
        productImg: string;
        disc: string;
        price: string

    }
}
const Item = ({ item, lastItemLength, itemsNumber }: Itemprops) => {
    const [productCount, setProductCount] = useState(0)
    const [showProductDetails,setShowProductDetails]=useState(false)
    return (
        <>
            <div
                key={item.id}
                className={`hidden  ${lastItemLength < itemsNumber ? "border-b-1" : ""} border-dashed border-[#E5E5EA]  md:flex justify-between items-start`}
            >
                <div className="flex items-center">
                    <div className="p-1 border-1 rounded-2xl me-4">
                        <img src={item.productImg} className="w-[4rem]" alt="" />
                    </div>
                    <div className="flex  justify-between flex-col h-full">
                        <p className="text-[#010101] mb-3 w-72">{item.disc}</p>
                        <p className="font-thin text-[#79747E]">
                            ADE
                            <span className="text-[#6D59A6] font-bold  ms-1">
                                {item.price}
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






            <div className="md:hidden flex justify-between items-start">
                <div className="flex">
                    <div className="p-1 border-1 rounded-2xl me-4">
                        <img src={item.productImg} className="w-[4rem]" alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                    <Tooltip
                    isOpen={showProductDetails}
                
                        content={
                            <div className="px-1 py-2">
                                <p className="text-[#010101] mb-3 w-72">{item.disc}</p>
                            </div>
                        }
                    >
                        <Info size={15}     onClick={()=>{setShowProductDetails(!showProductDetails)}}/>
                    </Tooltip>
                    <p className="font-thin text-small text-[#79747E]">
                            ADE
                            <span className="text-[#6D59A6] text-small font-bold  ms-1">
                                {item.price}
                            </span>
                        </p>
                    </div>


                </div>


                <div className="flex flex-col">
                    <div className="flex justify-between items-center  h-[3rem] border-1 rounded-full overflow-hidden">
                        <Button
                            variant="light"
                            className=" font-bold"
                            size="sm"
                            onPress={() => {
                                setProductCount((perv) => (perv > 0 ? --perv : 0));
                            }}
                        >
                            <Minus />
                        </Button>
                        <p className="text-[#6D59A6] font-bold text-small">
                            {productCount}
                        </p>

                        <Button
                            variant="light"
                             size="sm"
                            className=" font-bold "
                            onPress={() => {
                                setProductCount((perv) => ++perv);
                            }}
                        >
                            <Plus />
                        </Button>
                    </div>
                    <Button  size="sm" color="danger" startContent={<Trash2 size={15} />} variant="light" className="mt-3">
                        Remove Item
                    </Button>
                </div>
            </div>

        </>

    )
}

export default Item