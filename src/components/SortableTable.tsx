import React from "react";
import SortableTableHeader, {
  SortableTableHeaderHalf,
  SortableTableHeaderSplit
} from "./SortableTableHeader";
import SortableTableBody from "./SortableTableBody";
import IconInbox from "../icons/IconInbox";
import { TableStyle, tableStyles } from "./types";

interface Props {
  columns: any;
  tableData: any;
  setTableData(data: any): void;
  popoverComponent?: React.ComponentType<{
    id: number;
    setVisible: (visible: boolean) => void;
  }>;
  style?: TableStyle;
}

export default function SortableTable(props: Props) {
  const handleSorting = (sortField: any, sortOrder: any) => {
    if (sortField) {
      const sorted = [...props.tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      props.setTableData(sorted);
    }
  };

  return (
    <>
      <div className="bg-white border-[1px] rounded-2xl shadow-sm">
        <table className="bg-white rounded-2xl text-left w-full">
          {props.style ? (
            props.style === tableStyles.half ? (
              <SortableTableHeaderHalf
                columns={props.columns}
                handleSorting={handleSorting}
              />
            ) : props.style === tableStyles.split ? (
              <SortableTableHeaderSplit
                columns={props.columns}
                handleSorting={handleSorting}
              />
            ) : (
              <SortableTableHeader
                columns={props.columns}
                handleSorting={handleSorting}
              />
            )
          ) : (
            <SortableTableHeader
              columns={props.columns}
              handleSorting={handleSorting}
            />
          )}

          {props.tableData && props.tableData.length > 0 ? (
            <SortableTableBody
              columns={props.columns}
              tableData={props.tableData}
              popoverComponent={props.popoverComponent}
              style={props.style}
            />
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan={props.columns.length}
                  className="text-center text-slate-500 text-xs p-8 font-semibold"
                >
                  <div className="w-full flex flex-col items-center">
                    <IconInbox className="text-4xl text-slate-500 flex flex-row" />
                    <div className="flex flex-row">No data found</div>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
