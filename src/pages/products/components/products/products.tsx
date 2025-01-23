import {
  cn,
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import { ChevronRight } from "lucide-react";

import ProductCard from "../../../../core/components/productCard/productCard";
import { useTranslation } from "react-i18next";
import { Product } from "../../../../core/types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setPageSize,
} from "../../../../core/store/slices/productFilterSlice";
import { RootState } from "../../../../core/store/store";

interface ProductsProps {
  productList: Product[];
  numberOfPages: number;
  isLoaded:boolean
}
const Products = ({ productList, numberOfPages,isLoaded }: ProductsProps) => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  const storedPagesize = useSelector(
    (state: RootState) => state.productFilter.pageSize
  );
  const serverPagination = useSelector(
    (state: RootState) => state.productFilter.filterObj.pagenumber
  );
  const [Page, setPage] = useState(serverPagination / +storedPagesize);
  const handleChangePage = (page: number) => {
    const serverPagination = page * +storedPagesize;

    dispatch(setCurrentPage(serverPagination));
    setPage(page);
  };

let onceCall = true
  useEffect(()=>{
    if(onceCall){
      handleChangePage(Page)
      onceCall = false
    }
  },[storedPagesize])

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, "bg-transparent   min-w-8 w-8 h-8")}
          onClick={onNext}
        >
          <ChevronRight
            className={i18n.language === "en" ? "" : "rotate-180"}
          />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, "bg-transparent min-w-8 w-8 h-8")}
          onClick={onPrevious}
        >
          <ChevronRight
            className={i18n.language === "en" ? "rotate-180" : ""}
          />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive && "text-dark border-1 bg-transparent border-black "
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  return (
    <div className="flex items-center flex-col">
     
      {isLoaded ? (
        <div className="w-full h-screen flex justify-center items-start">
          <Spinner />
        </div>):
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
      {productList?.map((product) => (
        <ProductCard
          key={product.id}
          productID={product.id}
          brandImage={product.brand_photo_url}
          price={product.price}
          productEvaluation={product.rate}
          // productImages={product.photos}
          productImage={product.photo_url}
          isNew={product.is_new}
          description={product.short_description_english}
          discount={product.have_discount}
          isFavorite={product.is_wish_list}
          numberOfProducts={product.quantity}
        />
      ))}
    </div>
      }

<div className="flex justify-between">
        <Pagination
          disableCursorAnimation
          showControls
          className="gap-2"
          initialPage={Page}
          radius="full"
          renderItem={renderItem}
          onChange={setPage}
          // total={Math.ceil(productList?.length / itemsPerPage)}
          total={numberOfPages}
          variant="light"
          classNames={{
            cursor: "bg-transparent",
          }}
        />
        <Select
          aria-label="hover"
          defaultSelectedKeys={[storedPagesize]}
          onChange={(e) => {
            console.log(e.target.value);

            dispatch(setPageSize(e.target.value));
          }}
          className="w-20"
        >
          <SelectItem key={"10"}>10</SelectItem>
          <SelectItem key={"50"}>50</SelectItem>
          <SelectItem key={"100"}>100</SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default Products;
