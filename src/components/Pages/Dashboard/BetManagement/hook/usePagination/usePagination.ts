import { useState } from "react";
import { Bet } from "../../../../../Global/types/Bet";

export const usePagination = (data: Bet[]) => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dataLength = Number(data?.length);
  const totalPages = Math.ceil(dataLength / pageSize);

  const handlePageClick = (direction: "previous" | "next") => {
    if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = data?.slice(start, end);
  return {
    paginatedData,
    currentPage,
    totalPages,
    handlePageClick,
  };
};
