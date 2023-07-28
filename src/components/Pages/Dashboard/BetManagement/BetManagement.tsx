import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { useBets } from "../../../Global/hooks/useBets";
import { usePaginator } from "../../../Global/hooks/usePaginator";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { Bet } from "../../../Global/types/Bet";
import { TableBodyRow } from "./Tbody/TBodyRow/TBodyRow";

export function BetManagement() {
  const { betData, isLoading } = useBets();
  const { paginatedData, currentPage, totalPages, handlePageClick } = usePaginator(betData, 5);

  return (
    <Card className="no-scroll overflow-x-scroll">
      <TextWrap className="p-2 text-sm capitalize">football matches</TextWrap>
      {isLoading ? (
        <SkeletonFade width={600} height={280} />
      ) : (
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>HOME team - AWAY team</TableCell>
                <TableCell align="right">1 </TableCell>
                <TableCell align="right">x</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">Stadium</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(paginatedData as Bet[]).map((data, i) => (
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
