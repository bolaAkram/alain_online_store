import { Checkbox, Spinner } from "@nextui-org/react";
import useBrand from "./hooks/useBrand";
import {
  addBrandToFilter,
  removeBrandFromFilter,
} from "../../../../../../core/store/slices/productFilterSlice";

const Brand = () => {
  const {
    brandList,
    isLoaded,
    setVisibleCount,
    visibleCount,
    selectedBrand,
    dispatch,
  } = useBrand();

  return (
    <>
   
        {isLoaded ? (
          <Spinner />
        ) : (
          brandList.slice(0, visibleCount).map((brand) => (
            <Checkbox
            className="mt-3 block"
              defaultSelected={selectedBrand.includes(brand.id)}
              onValueChange={(value) => {
                if (value) {
                  dispatch(addBrandToFilter(brand.id));
                } else {
                  dispatch(removeBrandFromFilter(brand.id));
                }
              }}
              key={brand.id}
              value={brand.id.toString()}
            >
              {brand.name_english}
            </Checkbox>
          ))
        )}
    
      {!isLoaded && visibleCount < brandList.length ? (
        <button
          onClick={() => {
            setVisibleCount(brandList.length);
          }}
          className="mt-4 text-blue-500"
        >
          View More
        </button>
      ) : (
        <button
          onClick={() => {
            setVisibleCount(10);
          }}
          className="mt-4 text-blue-500"
        >
          View Less
        </button>
      )}
    </>
  );
};

export default Brand;
