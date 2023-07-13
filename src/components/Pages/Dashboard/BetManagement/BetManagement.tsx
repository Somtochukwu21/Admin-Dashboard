// import { TablePagination } from "@mui/material";
import { Table, TableBody, TableHead } from "@mui/material";
import { Card } from "../../../Global/Card/Card";
import { useFetchedBets } from "../../../Global/hooks/useFetchedBets";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { TableHeader } from "../../../Global/Table/TableHeader/TableHeader";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { TableBodyRow } from "./Tbody/TBodyRow/TBodyRow";

export function BetManagement() {
  const { betData, isLoading } = useFetchedBets();
  const texts = ["", "HOME team - AWAY team", "1", "x", "2", "Stadium"];
  return (
    <Card className="no-scroll overflow-x-scroll">
      <TextWrap className="p-2 text-sm capitalize">football matches</TextWrap>
      {isLoading ? (
        <SkeletonFade />
      ) : (
        <Table aria-label="collapsible table">
          <TableHead>
            <TableHeader from={1} textArr={texts} />
          </TableHead>
          <TableBody>
            {betData.map((data, i) => (
              <TableBodyRow key={i} data={data} />
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
}
