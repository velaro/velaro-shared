import React, { useEffect, useRef, useState } from "react";
import { MenuItem } from "./MenuItem";
import { IconProps } from "../icons/types";
import IconMoreHorizontalDots from "../icons/IconMoreHorizontalDots";

interface Props {
  menuItems: MeatballMenuItem[];
}

export interface MeatballMenuItem {
  label: string;
  onClick: () => void;
  icon: ({ ...props }: IconProps) => React.JSX.Element;
}

function eventContainsElement(e: MouseEvent, element: HTMLElement): boolean {
  let target = e.target as HTMLElement | null;
  while (target) {
    if (target === element) {
      return true;
    }
    target = target.parentElement;
  }
  return false;
}

export default function MeatballMenu(props: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function hideMenu(e: MouseEvent) {
      if (dotsRef.current && eventContainsElement(e, dotsRef.current)) {
        return;
      }

      setShowMenu(false);
    }
    document.addEventListener("click", hideMenu);
    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);

  return (
    <div className="relative w-min">
      <div
        ref={dotsRef}
        onClick={() => setShowMenu((x) => !x)}
        className="cursor-pointer"
      >
        <IconMoreHorizontalDots />
      </div>
      {showMenu && (
        <div className="absolute top-6 right-0 z-50 w-36 p-2 bg-white rounded shadow border border-slate-200 flex-col justify-start items-start inline-flex text-sm text-slate-800">
          {props.menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              text={item.label}
              onClick={() => {
                item.onClick();
                setShowMenu(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
