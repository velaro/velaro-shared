import React, { useMemo } from "react";

interface Props {
  children: JSX.Element;
  text: string;
  maxWidth?: string;
  direction?: "right" | "left" | "top" | "bottom";
  offset?: string;
  color?: "default" | "blue" | "light";
}

export default function Tooltip({
  children,
  text,
  maxWidth = "16rem",
  direction = "right",
  offset = "15px",
  color = "default"
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

  const carrotColor = useMemo(() => {
    switch (color) {
      case "blue":
        return "#3B82F6";
      case "light":
        return "#FFFFFF";
      case "default":
      default:
        return "#0F172A";
    }
  }, [color]);

  const carrotStyle = useMemo(() => {
    switch (direction) {
      case "bottom":
        return {
          top: "-7px",
          left: "50%",
          transform: "translateX(-50%)",
          borderBottom: `7px solid ${carrotColor}`,
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
          borderRight: `7px solid ${carrotColor}`
        };
      case "top":
        return {
          bottom: "-7px",
          left: "50%",
          transform: "translateX(-50%)",
          borderTop: `7px solid ${carrotColor}`,
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
          borderLeft: `7px solid ${carrotColor}`
        };
    }
  }, [direction, carrotColor]);

  const tooltipColors = useMemo(() => {
    switch (color) {
      case "blue":
        return "bg-blue-500 text-white";
      case "light":
        return "bg-white text-slate-800";
      case "default":
      default:
        return "bg-slate-900 text-gray-100";
    }
  }, [color]);

  return (
    <span className="relative tooltip">
      <span
        className={`absolute py-2 px-2 text-sm text-gray-100 rounded-md shadow-xl z-[99999] block ${tooltipColors}`}
        style={{
          ...style,
          maxWidth,
          width: "max-content",
          whiteSpace: "normal",
          wordBreak: "break-word"
        }}
      >
        <span className="absolute" style={carrotStyle}></span>
        {text}
      </span>
      {children}
    </span>
  );
}
