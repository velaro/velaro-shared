import React from "react";
import IconMoreHorizontalDots from "../icons/IconMoreHorizontalDots";

interface Column {
  label: string;
  accessor: string;
}

interface Props {
  dataKey: number;
  data: any;
  columns: Column[];
  isLast?: boolean;
  popoverComponent?: React.ComponentType<{
    id: number;
    setVisible: (visible: boolean) => void;
  }>;
}

export default function SortableTableRow(props: Props) {
  const [popoverVisible, setPopoverVisible] = React.useState(false);
  const className = props.isLast ? "" : "border-b border-y-[1px]";
  return (
    <tr key={props.dataKey} className={`hover:bg-slate-100 " ${className}`}>
      {props.columns.map(({ accessor }) => {
        if (accessor === "edit") {
          return (
            <td
              className="p-4 cursor-pointer relative"
              key={accessor}
              onClick={() => {
                setPopoverVisible(!popoverVisible);
              }}
            >
              <IconMoreHorizontalDots />
              {popoverVisible && props.popoverComponent && (
                <props.popoverComponent
                  id={props.dataKey}
                  setVisible={setPopoverVisible}
                />
              )}
            </td>
          );
        }
        const tData = props.data[accessor] ? props.data[accessor] : "——";
        return (
          <td className="p-4" key={accessor}>
            {tData}
          </td>
        );
      })}
    </tr>
  );
}

export function SortableTableRowSplit(props: Props) {
  const className = props.isLast ? "" : "border-b border-y-[1px]";
  return (
    <tr key={props.dataKey} className={`hover:bg-slate-100 " ${className}`}>
      {props.columns.map(({ accessor }, index) => {
        const tData = props.data[accessor] ? props.data[accessor] : "——";
        return (
          <td key={accessor} className="p-4">
            <div
              className={`flex ${
                index === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {tData}
            </div>
          </td>
        );
      })}
    </tr>
  );
}
