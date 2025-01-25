import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";

import { MoveRight } from "lucide-react";
import { addCategoryToFilter } from "../../../../../../core/store/slices/productFilterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../../core/routing/Routes";


interface ShopByCategoryCardProps {
  image: string;
  footerTitLe: string;
  isloading: boolean;
}

const ShopByCategoryCard = ({
  image,
  footerTitLe,

}: ShopByCategoryCardProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Card isFooterBlurred radius="lg" className="border-none  shadow-none">
      <img src={image} className="object-cover w-full h-[280px]" alt="" />
     
      <CardFooter className="flex-col justify-between items-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-0 w-[calc(100%_-_0px)] shadow-small ms-0 z-10">
        <p className=" text-white/80 font-extrabold text-sm">{footerTitLe}</p>
        <Button
          className="text-tiny text-white p-0 ps-1 pe-2"
          variant="light"
          color="default"
          radius="lg"
          size="sm"
          endContent={<MoveRight size={15} />}
          onPress={()=>{
            dispatch(addCategoryToFilter(footerTitLe));
            navigate(ROUTES.PRODUCTS_FILTER);
          }}
        >
          Shop Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShopByCategoryCard;
