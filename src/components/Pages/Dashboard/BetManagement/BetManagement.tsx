import Table from "@mui/material/Table";
import { Card } from "../../../Global/Card/Card";
import { TextWrap } from "../../../Global/TextWrap/TextWrap";
import { TBody } from "./Tbody/TBody";
import { THead } from "./THead/THead";

export function BetManagement() {
  return (
    <Card className="overflow-x-scroll">
      <TextWrap className="p-2 text-sm capitalize">football matches</TextWrap>
      <Table aria-label="collapsible table">
        <THead />
        <TBody />
      </Table>
    </Card>
  );
}
