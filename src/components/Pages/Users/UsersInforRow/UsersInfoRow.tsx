import { TableCell, TableRow } from "@mui/material";
import { DataType } from "../../../Global/types/Datatype";

export const UsersInfoRow = ({ user }: { user: DataType }) => {
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        {user.displayName}
      </TableCell>
      <TableCell>{user.email}</TableCell>
    </TableRow>
  );
};
