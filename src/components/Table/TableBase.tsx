import React from "react";
import IconInbox from "../../icons/IconInbox";

interface Props {
  columns: Column[];
  tableData: Record<string, any>[];
}

export interface Column {
  label: string;
  accessor: string;
}

export default function TableBase(props: Props) {
  if (props.tableData && props.tableData.length === 0) {
    return (
      <div className="text-center text-slate-500 text-xs p-8 font-semibold w-full flex flex-col items-center">
        <IconInbox className="text-4xl text-slate-500 flex flex-row" />
        <div className="flex flex-row">No data found</div>
      </div>
    );
  }
  return (
    <>
      <div className="bg-white border-[1px] rounded-2xl shadow-sm">
        <table className="bg-white rounded-2xl text-left w-full">
          <thead className="border-b-[1px]">
            <tr>
              {props.columns.map(({ label, accessor }) => {
                return (
                  <th className="p-4 items-center" key={accessor}>
                    <div className="flex items-center">{label}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {props.tableData.map((data: Record<string, any>, index: number) => {
              return (
                <tr key={index} className={`hover:bg-slate-100`}>
                  {props.columns.map(({ accessor }) => {
                    return (
                      <td className="p-4" key={accessor}>
                        {data[accessor] ?? "——"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
