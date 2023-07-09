import { Table, TableHead } from "@mui/material";
import React from "react";
import { Card } from "../../../Global/Card/Card";
import { TableHeader } from "../../../Global/Table/TableHeader/TableHeader";
import { Tbody } from "../Tbody/Tbody";

export const AllBet: React.FC = () => {
  const texts = ["HOME team - AWAY team", "1", "x", "2", "Stadium", "Actions"];
  return (
    <Card className="no-scroll mt-20 overflow-x-scroll md:mt-0">
      <Table>
        <TableHead>
          <TableHeader textArr={texts} from={0} />
        </TableHead>
        <Tbody />
      </Table>
    </Card>
  );
};
