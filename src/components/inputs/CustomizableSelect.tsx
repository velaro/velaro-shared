import React, { useEffect, useRef, useState } from "react";
import CustomizableSelectOption from "./CustomizableSelectOption";

interface Option {
  label: string;
  sublabel?: string;
  icon?: any;
  action: () => void;
}

interface Props {
  options: Option[];
  defaultText?: string;
}

export default function CustomizableSelect({
  options,
  defaultText = "Select an option"
}: Props) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState<Option | null>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setClicked(!clicked);
  };

  const handleOptionClick = (option: Option, action: () => void) => {
    setSelected(option);
    setClicked(false);
    action();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div
        className="inline-block p-2 border border-gray-300 rounded-md bg-white cursor-pointer relative w-full"
        onClick={handleDropdownClick}
      >
        {selected ? (
          <div className="flex items-center">
            {selected.icon && <div className="pr-2">{selected.icon}</div>}
            <div>{selected.label}</div>
            <div className="pl-2 text-slate-500">{selected.sublabel}</div>
          </div>
        ) : (
          defaultText
        )}
        <span className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
        {clicked && (
          <div className="p-2 rounded-md border-[1px] shadow-md bg-white z-10 absolute left-0 right-0 mt-2">
            {options.map((option) => (
              <CustomizableSelectOption
                icon={option.icon}
                text={option.label}
                subtext={option.sublabel}
                action={() => handleOptionClick(option, option.action)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
