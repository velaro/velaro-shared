import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import IconDoubleForwardArrow from "../icons/IconDoubleForwardArrow";
import IconForwardArrow from "../icons/IconForwardArrow";
import IconBackArrow from "../icons/IconBackArrow";
import IconDoubleBackArrow from "../icons/IconDoubleBackArrow";

interface Props {
  currentPage: number;
  setPage(page: number): void;
  setPageSize(pageSize: number): void;
  totalRecords: number;
  pageSize: number;
}

const pagerStyle =
  "flex items-center justify-center w-6 h-6 text-xs relative bg-slate-100 text-slate-500 mr-1 cursor-pointer rounded-lg";

export default function Pager({
  currentPage,
  setPage,
  setPageSize,
  totalRecords,
  pageSize
}: Props) {
  const [workingPageSize, setWorkingPageSize] = useState(pageSize.toString());
  const pageCount = useMemo(
    () => Math.ceil(totalRecords / pageSize) || 1,
    [pageSize, totalRecords]
  );
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5]);

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);

      //if page count is less than 5, show all pages
      if (pageCount <= 5) {
        setVisiblePages(Array.from({ length: pageCount }, (_, i) => i + 1));
        return;
      }

      //update visible pages based on selected page
      if (page <= 3) {
        setVisiblePages([1, 2, 3, 4, 5]);
      } else if (page >= pageCount - 2) {
        setVisiblePages([
          pageCount - 4,
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
          pageCount
        ]);
      } else {
        setVisiblePages([page - 2, page - 1, page, page + 1, page + 2]);
      }
    },
    [pageCount, setPage]
  );

  //on page load, set visible pages based on page count
  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage, handlePageChange]);

  const first = useCallback(() => {
    if (currentPage !== 1) {
      handlePageChange(1);
    }
  }, [currentPage, handlePageChange]);

  const previous = useCallback(() => {
    if (currentPage !== 1) {
      handlePageChange(currentPage - 1);
    }
  }, [currentPage, handlePageChange]);

  const next = useCallback(() => {
    if (currentPage !== pageCount) {
      handlePageChange(currentPage + 1);
    }
  }, [currentPage, pageCount, handlePageChange]);

  const last = useCallback(() => {
    if (currentPage !== pageCount) {
      handlePageChange(pageCount);
    }
  }, [currentPage, pageCount, handlePageChange]);

  function handlePageSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkingPageSize(e.target.value);
    const value = parseInt(e.target.value);

    if (value > 0) {
      setPageSize(value);
      const pageCount = Math.ceil(totalRecords / value) || 1;
      if (currentPage > pageCount) {
        handlePageChange(pageCount);
      } else {
        handlePageChange(currentPage);
      }
    }
  }

  return (
    <div className="flex py-4 items-center justify-between">
      <span className="text-slate-500 text-xs">{`Page ${currentPage} of ${pageCount}`}</span>
      <div className="flex items-center">
        <button
          disabled={currentPage === 1}
          className="text-slate-500 mr-2"
          onClick={first}
        >
          <IconDoubleBackArrow />
        </button>
        <button
          disabled={currentPage === 1}
          className="text-slate-500 m-2"
          onClick={previous}
        >
          <IconBackArrow />
        </button>
        {visiblePages[0] > 1 && (
          <li className={pagerStyle} onClick={() => handlePageChange(1)}>
            1
          </li>
        )}
        {visiblePages[0] > 2 && (
          <li className="flex items-center justify-center w-6 h-6 text-xs relative mr-1">
            ...
          </li>
        )}
        {visiblePages.map((page) => (
          <li
            key={page}
            className={` flex items-center justify-center w-6 h-6 text-xs relative bg-slate-100 rounded-lg mr-1 cursor-pointer ${
              currentPage === page
                ? "bg-slate-500 text-white"
                : "text-slate-500"
            } `}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </li>
        ))}
        {visiblePages[4] < pageCount - 1 && (
          <li className="flex items-center justify-center w-6 h-6 text-xs relative mr-1">
            ...
          </li>
        )}
        {visiblePages[4] < pageCount && (
          <li
            className={pagerStyle}
            onClick={() => handlePageChange(pageCount)}
          >
            {pageCount}
          </li>
        )}
        <button
          disabled={currentPage === pageCount}
          className="text-slate-500 m-2"
          onClick={next}
        >
          <IconForwardArrow />
        </button>
        <button
          disabled={currentPage === pageCount}
          className="text-slate-500 ml-2"
          onClick={last}
        >
          <IconDoubleForwardArrow />
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-slate-500 text-xs">Items per page</span>
        <input
          type="text"
          className="w-6 h-6 border border-slate-200 rounded-lg ml-2 text-xs text-center"
          value={workingPageSize}
          onChange={(e) => handlePageSizeChange(e)}
        />
      </div>
    </div>
  );
}
