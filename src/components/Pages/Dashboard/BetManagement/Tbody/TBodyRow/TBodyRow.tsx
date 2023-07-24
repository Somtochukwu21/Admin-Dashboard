import { TableCell, TableRow } from "@mui/material";
import { Bet } from "../../../../../Global/types/Bet";
type PropType = { data: Bet };

export const TableBodyRow = ({ data }: PropType) => {
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        {`${data.team1} - ${data.team2}`}
      </TableCell>
      <TableCell align="right">{data.odd1}</TableCell>
      <TableCell align="right">{data.oddx}</TableCell>
      <TableCell align="right">{data.odd2}</TableCell>
      <TableCell align="right">{data.stadium}</TableCell>
    </TableRow>
  );
};
