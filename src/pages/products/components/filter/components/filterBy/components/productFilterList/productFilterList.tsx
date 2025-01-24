
import useProductFilterList from "./hooks/useProductFilterList";
import { Checkbox } from "@nextui-org/react";
import {
  addProductsTypeToFilter,
  removeProductsTypeFromFilter,
} from "../../../../../../../../core/store/slices/productFilterSlice";

const ProductFilterList = () => {
  const { productsTypeList, dispatch,selectedProductType} = useProductFilterList();
  return (
    <>
      {productsTypeList.map((type) => (
        <Checkbox
          defaultSelected={selectedProductType?.includes(type.name)}
          onValueChange={(value) => {
            if (value) {
              dispatch(addProductsTypeToFilter(type.name));
            } else {
              dispatch(removeProductsTypeFromFilter(type.name));
            }
          }}
          className="mt-3 block"
          key={type.id}
          value={type.id.toString()}
        >
          {type.name}
        </Checkbox>
      ))}
    </>
  );
};

export default ProductFilterList;
