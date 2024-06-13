import React from "react";
import SortableTableRow, { SortableTableRowSplit } from "./SortableTableRow";
import { TableStyle, tableStyles } from "./types";

interface Column {
  label: string;
  accessor: string;
}

interface Props {
  columns: Column[];
  tableData: any[];
  popoverComponent?: React.ComponentType<{
    id: number;
    setVisible: (visible: boolean) => void;
  }>;
  style?: TableStyle;
}

export default function SortableTableBody(props: Props) {
  return (
    <tbody>
      {props.tableData.map((data: any, index) => {
        return props.style ? (
          props.style === tableStyles.split ? (
            <SortableTableRowSplit
              key={data.id}
              dataKey={data.id}
              data={data}
              columns={props.columns}
              isLast={props.tableData.length - 1 === index}
              popoverComponent={props.popoverComponent}
            />
          ) : (
            <SortableTableRow
              key={data.id}
              dataKey={data.id}
              data={data}
              columns={props.columns}
              isLast={props.tableData.length - 1 === index}
              popoverComponent={props.popoverComponent}
            />
          )
        ) : (
          <SortableTableRow
            key={data.id}
            dataKey={data.id}
            data={data}
            columns={props.columns}
            isLast={props.tableData.length - 1 === index}
            popoverComponent={props.popoverComponent}
          />
        );
      })}
    </tbody>
  );
}
