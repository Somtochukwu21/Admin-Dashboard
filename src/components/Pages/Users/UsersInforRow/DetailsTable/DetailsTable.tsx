import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useUserDetails } from "../../../../Global/hooks/useUserDetails";
import { DataType } from "../../../../Global/types/Datatype";

type PropsType = {
  user: DataType;
};

export const DetailsTable = ({ user }: PropsType) => {
  const { details } = useUserDetails();

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Odd</TableCell>
          <TableCell>Bet for</TableCell>
          <TableCell align="right">Teams</TableCell>
          <TableCell align="right">Amount($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {details?.map((detail, i) => {
          return (
            detail.id === user.userid && (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {detail.oddVal}
                </TableCell>
                <TableCell>{detail.oddType}</TableCell>
                <TableCell align="right">{detail.bet}</TableCell>
                <TableCell align="right">{`$${detail.amount.toLocaleString()}`}</TableCell>
              </TableRow>
            )
          );
        })}
      </TableBody>
    </Table>
  );
};
