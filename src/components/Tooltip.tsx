import React, { useMemo } from "react";

interface Props {
  children: JSX.Element;
  text: string;
  width?: string;
  direction?: "right" | "left" | "top" | "bottom";
  offset?: string;
  minWidth?: string;
}

export default function Tooltip({
  children,
  text,
  width = "auto",
  direction = "right",
  offset = "15px",
  minWidth = "200px"
}: Props) {
  const style = useMemo(() => {
    switch (direction) {
      case "bottom":
        return {
          transform: "translateX(-50%)",
          left: "50%",
          top: `calc(100% + ${offset})`
        };
      case "right":
        return {
          transform: "translateY(-50%)",
          top: "50%",
          left: `calc(100% + ${offset})`
        };
      case "top":
        return {
          transform: "translateX(-50%)",
          left: "50%",
          bottom: `calc(100% + ${offset})`
        };
      case "left":
        return {
          transform: "translateY(-50%)",
          top: "50%",
          right: `calc(100% + ${offset})`
        };
    }
  }, [direction, offset]);

  const carrotStyle = useMemo(() => {
    switch (direction) {
      case "bottom":
        return {
          top: "-7px",
          left: "50%",
          transform: "translateX(-50%)",
          borderBottom: "7px solid #0F172A",
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent"
        };
      case "right":
        return {
          top: "50%",
          left: "-7px",
          transform: "translateY(-50%)",
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderRight: "7px solid #0F172A"
        };
      case "top":
        return {
          bottom: "-7px",
          left: "50%",
          transform: "translateX(-50%)",
          borderTop: "7px solid #0F172A",
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent"
        };
      case "left":
        return {
          top: "50%",
          right: "-7px",
          transform: "translateY(-50%)",
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderLeft: "7px solid #0F172A"
        };
    }
  }, [direction]);

  return (
    <span className="relative tooltip">
      <span
        className="absolute py-1 text-base text-center text-gray-100 rounded-sm shadow-sm tooltip-text p-1 z-[99999]"
        style={{
          ...style,
          width: width,
          minWidth: minWidth,
          background: "#0F172A"
        }}
      >
        <span className="absolute" style={carrotStyle}></span>
        {text}
      </span>
      {children}
    </span>
  );
}
