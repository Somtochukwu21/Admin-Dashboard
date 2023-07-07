// import { TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import { Card } from "../../../Global/Card/Card";
import { useFetchedBets } from "../../../Global/hooks/useFetchedBets";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { TBody } from "./Tbody/TBody";
import { THead } from "./THead/THead";

export function BetManagement() {
  const { betData, isLoading } = useFetchedBets();

  return (
    <Card className="overflow-x-scroll">
      <TextWrap className="p-2 text-sm capitalize">football matches</TextWrap>

      {isLoading ? (
        <SkeletonFade />
      ) : (
        <Table aria-label="collapsible table">
          <THead />
          <TBody betData={betData} />
        </Table>
      )}
    </Card>
  );
}
