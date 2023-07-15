import { TableCell, TableRow } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Button } from "../../../Global/Button/Button";
import { DataType } from "../../../Global/types/Datatype";

export const UsersInfoRow = ({ user }: { user: DataType }) => {
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        {user.displayName}
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Button className="mb-4 md:mb-0">
          <FiEdit />
        </Button>

        <Button className=" bg-red-400 md:ml-3 ">
          <AiFillDelete />
        </Button>
      </TableCell>
    </TableRow>
  );
};
