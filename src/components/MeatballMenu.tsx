import React, { useEffect, useRef } from "react";
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

export default function MeatballMenu(props: Props) {
  const [showMenu, setShowMenu] = React.useState(false);
  const dotsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function hideMenu(e: MouseEvent) {
      if (e.target != dotsRef.current) {
        setShowMenu(false);
      }
    }
    document.addEventListener("click", hideMenu);
    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);

  return (
    <div className="relative w-min">
      <div onClick={() => setShowMenu(true)} className="cursor-pointer">
        <IconMoreHorizontalDots ref={dotsRef} />
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
