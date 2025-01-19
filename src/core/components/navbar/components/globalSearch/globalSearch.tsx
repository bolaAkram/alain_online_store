import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { t } from "i18next";
import SearchIcon from "../../../../../assets/svg/components/SearchIcon";

import useGlobalSearch from "./hooks/useGlobalSearch";
import { SetStateAction } from "react";
import { ROUTES } from "../../../../routing/Routes";
import { useLocation } from "react-router-dom";
import { setSearchValue } from "../../../../store/slices/productFilterSlice";

const GlobalSearch = () => {
  const {
    storedSearchValue,
    productList,
    navigate,
    isLoaded,
    filterResult,
    dispatch,
    getResultMenu,
    handleClickToSearch
  } = useGlobalSearch();

  const { pathname } = useLocation();
  const onSelectionChange = () => {
    navigate(ROUTES.PRODUCTS_FILTER, {
      state: {
        keyword: storedSearchValue,
        filterBody: filterResult,
      },
    });
  };

  const onInputChange = (value: SetStateAction<string>) => {
    if (pathname === "/products-filter") {
      dispatch(setSearchValue(value.toString()));
   
    } else {
      getResultMenu(value)
   
      dispatch(setSearchValue(value.toString()));
    }
  };

  return (
    <>
      <Autocomplete
        value={"fdgdgdg"}
        isLoading={isLoaded}
        defaultInputValue={storedSearchValue}
        
        allowsCustomValue
        className="max-w-xs"
        defaultItems={storedSearchValue !== "" ? productList : []}
        placeholder={t("let-us-help-you-by-search")}
        isClearable={false}
        onInputChange={onInputChange}
        onSelectionChange={onSelectionChange}
        startContent={
          <button
            className=" border-1 h-full border-s-0 border-y-0 pe-2"
            onClick={() => {
              if (storedSearchValue !== "") {
                handleClickToSearch(storedSearchValue);
              } else {
                navigate(ROUTES.HOME);
              }
            }}
          >
            <SearchIcon />
          </button>
        }
        inputProps={{
          classNames: {
            base: "max-w-full w-[15rem] sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "rounded-full border border-1 h-full font-normal text-default-500 bg-transparent dark:bg-default-500/20",
          },
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.name_english}</AutocompleteItem>
        )}
      </Autocomplete>
      {/* <Input
        classNames={{
          base: "max-w-full w-[15rem] sm:max-w-[20rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "rounded-full border border-1 h-full font-normal text-default-500 bg-transparent dark:bg-default-500/20",
        }}
        placeholder={t("let-us-help-you-by-search")}
        size="sm"
        startContent={
          <button className="bg-transparent border-0" onClick={handleSearch}>
            <SearchIcon />
          </button>
        }
        type="search"
        value={inputValue}
        onValueChange={setInputValue}
      /> */}
    </>
  );
};

export default GlobalSearch;
