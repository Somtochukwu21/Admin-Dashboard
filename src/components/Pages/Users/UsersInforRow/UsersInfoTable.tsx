import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { usePaginator } from "../../../Global/hooks/usePaginator";
import { useUsers } from "../../../Global/hooks/useUsers";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { DataType } from "../../../Global/types/Datatype";
import { UsersInfoRow } from "./UsersInfoRow";

export const UsersInfoTable = () => {
  const { data, isLoading } = useUsers();
  const { paginatedData, currentPage, totalPages, handlePageClick } = usePaginator(data, 10);

  return (
    <Card className="no-scroll mt-20 overflow-x-scroll  md:mt-0">
      {isLoading ? (
        <SkeletonFade width="162%" height={280} />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(paginatedData as DataType[])?.map((user, i) => (
                <UsersInfoRow user={user} key={i} />
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
      )}{" "}
    </Card>
  );
};
