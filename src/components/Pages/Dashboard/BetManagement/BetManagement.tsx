import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { useBets } from "../../../Global/hooks/useBets";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { TableHeader } from "../../../Global/Table/TableHeader/TableHeader";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { usePagination } from "./hook/usePagination/usePagination";
import { TableBodyRow } from "./Tbody/TBodyRow/TBodyRow";

export function BetManagement() {
  const { betData, isLoading } = useBets();
  const texts = ["", "HOME team - AWAY team", "1", "x", "2", "Stadium"];
  const { paginatedData, currentPage, totalPages, handlePageClick } = usePagination(betData);

  return (
    <Card className="no-scroll overflow-x-scroll">
      <TextWrap className="p-2 text-sm capitalize">football matches</TextWrap>
      {isLoading ? (
        <SkeletonFade width={600} height={280} />
      ) : (
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableHeader from={1} textArr={texts} />
            </TableHead>
            <TableBody>
              {paginatedData.map((data, i) => (
                <TableBodyRow key={i} data={data} />
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex items-center justify-end space-x-1 text-gray-100">
            <Button disabled={currentPage === 1} onClick={() => handlePageClick("previous")}>
              <GrFormPrevious className="text-gray-100" />
            </Button>
            <Button className="w-7 bg-secondary text-xs">{currentPage}</Button>
            <Button disabled={currentPage === totalPages} onClick={() => handlePageClick("next")}>
              <GrFormNext className="text-gray-100" />
            </Button>
          </div>
        </TableContainer>
      )}
    </Card>
  );
}
