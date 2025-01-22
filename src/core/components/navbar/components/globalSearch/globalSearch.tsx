import { Autocomplete, AutocompleteItem, Form } from "@nextui-org/react";
import { t } from "i18next";
import SearchIcon from "../../../../../assets/svg/components/SearchIcon";

import useGlobalSearch from "./hooks/useGlobalSearch";

const GlobalSearch = () => {
  const {
    isLoaded,
    handleSelectResult,
    onInputChange,
    suggestionsKeywordList,
    handleClickSearch,
    searchInputValue,
    onSubmit
  } = useGlobalSearch();

  return (
    <>
      <Form className="w-full max-w-xs flex flex-col gap-3" onSubmit={onSubmit}>
        <Autocomplete
          isLoading={isLoaded}
          defaultInputValue={searchInputValue}
          allowsCustomValue
          className="max-w-xs"
          defaultItems={suggestionsKeywordList}
          placeholder={t("let-us-help-you-by-search")}
          isClearable={false}
          onInputChange={onInputChange}
          onSelectionChange={handleSelectResult}
          startContent={
            <button
              className=" border-1 h-full border-s-0 border-y-0 pe-2"
              onClick={() => {
                handleClickSearch(searchInputValue);
              }}
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
      </Form>
    </>
  );
};

export default GlobalSearch;
