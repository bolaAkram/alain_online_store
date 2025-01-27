import { Checkbox, Spinner } from "@nextui-org/react";
import useCategory from "./hooks/useCategory";
import {
  addCategoryToFilter,
  removeCategoryFromFilter,
} from "../../../../../../../../core/store/slices/productFilterSlice";

const Category = () => {
  const { CategoryList, isLoaded, selectedCategory, dispatch } = useCategory();
  return (
    <>
      {isLoaded ? (
        <Spinner />
      ) : (
        CategoryList.map((category) => (
          <Checkbox
            defaultSelected={selectedCategory.includes(category.id)}
            onValueChange={(value) => {
              if (value) {
                // dispatch(addCategoryToFilter(category.name_english));
                dispatch(addCategoryToFilter(category.id));
              } else {
                // dispatch(removeCategoryFromFilter(category.name_english));
                dispatch(removeCategoryFromFilter(category.id));

              }
            }}
            className="mt-3 block"
            key={category.id}
            value={category.id.toString()}
          >
            {category.name_english}
          </Checkbox>
        ))
      )}
    </>
  );
};

export default Category;
