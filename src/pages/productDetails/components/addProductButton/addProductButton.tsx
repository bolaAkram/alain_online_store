


import { Button } from '@nextui-org/react';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react'
import ShoppingCardIcon from '../../../../assets/svg/components/ShoppingCardIcon';

interface AddProductButtonProps {
    textColor:string;
    iconColor:string;
    numberOfProduct:number;
    containerBtnClass?:string;
}
const AddProductButton = ({textColor,iconColor,numberOfProduct,containerBtnClass}:AddProductButtonProps) => {
     const [productCount, setProductCount] = useState(numberOfProduct);
  return (
    <>
     {productCount > 0 ? (
          <div className={`flex justify-between items-center w-full ${containerBtnClass}`}>
            <Button
              variant="light"
              className={`text-${iconColor} font-bold `}
              onPress={() => {
                setProductCount((perv) => --perv);
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
              }}
            >
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            variant="light"
            className={`text-${iconColor} font-bold w-full`}
            startContent={<ShoppingCardIcon color="#ffff" />}
            onPress={() => {
              setProductCount((perv) => ++perv);
            }}
          >
            Add to Basket
          </Button>
        )}
    </>
  )
}

export default AddProductButton