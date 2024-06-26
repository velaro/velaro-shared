import React, { useRef, useState } from "react";
import IconSearch from "../icons/IconSearch";

interface Props {
  onSearch(searchText: string): void;
  placeholderText: string;
}
export default function SearchBar(props: Props) {
  const [searchText, setSearchText] = useState<string>("");

  const searchBar = useRef<HTMLInputElement>(null);
  if (searchBar.current != null) {
    searchBar.current.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        props.onSearch(searchText);
      }
    });
  }

  return (
    <div className="relative w-52 h-10">
      <input
        ref={searchBar}
        type="text"
        id="search"
        className="items-center w-full h-full p-4 text-sm text-gray-900 border focus:outline-none border-slate-200 rounded-lg bg-white focus:border-steel-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cornflower-blue-500 dark:focus:border-cornflower-blue-500"
        placeholder={props.placeholderText}
        onChange={(e) => {
          setSearchText(e.currentTarget.value);
          props.onSearch(e.currentTarget.value);
        }}
      ></input>
      <div
        onClick={() => props.onSearch(searchText)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-200"
      >
        <IconSearch />
      </div>
    </div>
  );
}
