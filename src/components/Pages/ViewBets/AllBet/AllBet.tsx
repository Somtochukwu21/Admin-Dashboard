import { Table } from "@mui/material";
import React from "react";
import { Card } from "../../../Global/Card/Card";
import { Tbody } from "../Tbody/Tbody";
import { Thead } from "../Thead/Thead";

export const AllBet: React.FC = () => {
  return (
    <Card className="overflow-x-scroll">
      <Table>
        <Thead />
        <Tbody />
      </Table>
    </Card>
  );
};
