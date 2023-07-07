// import { TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import { useState } from "react";
import { Card } from "../../../Global/Card/Card";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { TBody } from "./Tbody/TBody";
import { THead } from "./THead/THead";

export function BetManagement() {
  const [loading, setLoading] = useState<boolean>();

  const handleLoading = (data: boolean) => setLoading(data);

  return (
    <Card className="overflow-x-scroll">
      <TextWrap className="p-2 text-sm capitalize">football matches</TextWrap>

      {loading ? (
        <SkeletonFade />
      ) : (
        <Table aria-label="collapsible table">
          <THead />
          <TBody loading={handleLoading} />
        </Table>
      )}
    </Card>
  );
}
