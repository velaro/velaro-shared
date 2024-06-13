import React, { useState } from "react";
import IconSortable from "../icons/IconSortable";

interface Column {
  label: string;
  accessor: string;
}

interface Props {
  columns: Column[];
  handleSorting: (accessor: string, order: string) => void;
}

export default function SortableTableHeader(props: Props) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor: any) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    props.handleSorting(accessor, sortOrder);
  };
  return (
    <thead className="border-b-[1px]">
      <tr>
        {props.columns.map(({ label, accessor }) => {
          if (accessor === "edit") {
            return (
              <th className="p-4 items-center" key={accessor}>
                <div className="flex items-center">{label}</div>
              </th>
            );
          }
          return (
            <th
              className="p-4 items-center"
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              <div className="flex items-center">
                {label}
                <IconSortable className="ml-auto" />
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export function SortableTableHeaderHalf(props: Props) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor: any) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    props.handleSorting(accessor, sortOrder);
  };
  return (
    <thead className="border-b-[1px]">
      <tr>
        {props.columns.map(({ label, accessor }, index) => {
          if (index === 0) {
            return (
              <th
                className="w-1/2 p-4 items-center"
                key={accessor}
                onClick={() => handleSortingChange(accessor)}
              >
                <div className="flex items-center">
                  {label}
                  <IconSortable className="ml-auto" />
                </div>
              </th>
            );
          }
          if (accessor === "edit") {
            return (
              <th className="p-4 items-center" key={accessor}>
                <div className="flex items-center">{label}</div>
              </th>
            );
          }
          return (
            <th
              className="p-4 items-center"
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              <div className="flex items-center">
                {label}
                <IconSortable className="ml-auto" />
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export function SortableTableHeaderSplit(props: Props) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor: any) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    props.handleSorting(accessor, sortOrder);
  };
  return (
    <thead className="border-b-[1px]">
      <tr>
        {props.columns.map(({ label, accessor }, index) => {
          return (
            <th
              className="p-4 items-center"
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              <div
                className={`flex ${
                  index === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {label}
                {index !== 0 && <IconSortable className="ml-2" />}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
