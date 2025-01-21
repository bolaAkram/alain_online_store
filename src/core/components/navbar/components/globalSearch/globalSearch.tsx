import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { t } from "i18next";
import SearchIcon from "../../../../../assets/svg/components/SearchIcon";

import useGlobalSearch from "./hooks/useGlobalSearch";

const GlobalSearch = () => {
  const {
    storedSearchValue,

    isLoaded,
    
    handleSelectResult,
    handleOnChangeInput,
    suggestionsKeywordList,
  } = useGlobalSearch();

  return (
    <>

    <Autocomplete
        isLoading={isLoaded}
        defaultInputValue={storedSearchValue}
        allowsCustomValue
        className="max-w-xs"
        defaultItems={suggestionsKeywordList}
        placeholder={t("let-us-help-you-by-search")}
        isClearable={false}
        onInputChange={handleOnChangeInput}
        onSelectionChange={handleSelectResult}
        startContent={
          <button
            className=" border-1 h-full border-s-0 border-y-0 pe-2"
            type="submit"
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
          <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
        )}
      </Autocomplete>

     
    </>
  );
};

export default GlobalSearch;
