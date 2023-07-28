import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { useBets } from "../../../Global/hooks/useBets";
import { usePaginator } from "../../../Global/hooks/usePaginator";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { Bet } from "../../../Global/types/Bet";
import { TbodyRow } from "../Tbody/TbodyRow/TbodyRow";

export const AllBet: React.FC = () => {
  const { isLoading, betData } = useBets();
  const { paginatedData, handlePageClick, currentPage, totalPages } = usePaginator(betData, 10);
  return (
    <Card className="no-scroll mt-20 overflow-x-scroll md:mt-0">
      {isLoading ? (
        <SkeletonFade width="162%" height={280} />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> HOME team - AWAY team</TableCell>
                <TableCell align="right"> 1</TableCell>
                <TableCell align="right"> x</TableCell>
                <TableCell align="right"> 2</TableCell>
                <TableCell align="right">Stadium</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(paginatedData as Bet[]).map((data, i) => (
                <TbodyRow data={data} key={i} />
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
};
