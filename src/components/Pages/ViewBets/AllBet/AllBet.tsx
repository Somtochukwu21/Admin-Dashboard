import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { Card } from "../../../Global/Card/Card";
import { useBets } from "../../../Global/hooks/useBets";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { Tbody } from "../Tbody/Tbody";

export const AllBet: React.FC = () => {
  const { isLoading } = useBets();

  return (
    <Card className="no-scroll mt-20 overflow-x-scroll md:mt-0">
      {isLoading ? (
        <SkeletonFade width="162%" height={280} />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> HOME team - AWAY team</TableCell>
              <TableCell> 1</TableCell>
              <TableCell> x</TableCell>
              <TableCell> 2</TableCell>
              <TableCell>Stadium</TableCell>
            </TableRow>
          </TableHead>
          <Tbody />
        </Table>
      )}
    </Card>
  );
};
