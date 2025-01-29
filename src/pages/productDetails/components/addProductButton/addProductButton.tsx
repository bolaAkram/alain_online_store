import { Button } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import ShoppingCardIcon from "../../../../assets/svg/components/ShoppingCardIcon";
import { useDispatch } from "react-redux";
import { setItemIsAdd } from "../../../../core/store/slices/cartSlice";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import item from "../../../../core/components/navbar/components/basket/components/item/item";
import ApiService from "../../../../core/utils/api";

interface AddProductButtonProps {
  textColor: string;
  iconColor: string;
  numberOfProduct: number;
  containerBtnClass?: string;
  productId:number
}
const AddProductButton = ({
  textColor,
  iconColor,
  numberOfProduct,
  containerBtnClass,
  productId
}: AddProductButtonProps) => {
  const [productCount, setProductCount] = useState(numberOfProduct);
  const dispatch =useDispatch()

  const updateCart = async (id: number, add: boolean) => {
    const payload = {
      productId: id,
      add,
    };

    try {
      const response: AxiosResponse = await new ApiService().put(
        "/Cart/Update",
        payload
      );
      if (response.data.Success) {
        dispatch(setItemIsAdd(true));
      } else {
        toast.error("This didn't work.");
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
    }
  };
  return (
    <>
      {productCount > 0 ? (
        <div
          className={`flex justify-between items-center w-full ${containerBtnClass}`}
        >
          <Button
            variant="light"
            className={`text-${iconColor} font-bold `}
            onPress={() => {
              setProductCount((perv) => (perv > 0 ? --perv : 0));
              dispatch(setItemIsAdd(false));
              updateCart(productId, false);
            }}
          >
            <Minus />
          </Button>
          <p className={`text-${textColor} font-bold`}> {productCount}</p>

          <Button
            variant="light"
            className={`text-${iconColor} font-bold `}
            onPress={() => {
              setProductCount((perv) => ++perv);
              dispatch(setItemIsAdd(false));
              updateCart(productId, true);
            }}
          >
            <Plus />
          </Button>
        </div>
      ) : (
        <Button
          radius="full"
          className="w-full my-4 text-lg border-1"
          color="secondary"
          variant="bordered"
          startContent={<ShoppingCardIcon color="#6D59A6" />}
          onPress={() => {
            setProductCount((perv) => ++perv);
            dispatch(setItemIsAdd(false));
            updateCart(productId, true);
          }}
        >
          Add to Basket
        </Button>
      )}
    </>
  );
};

export default AddProductButton;
