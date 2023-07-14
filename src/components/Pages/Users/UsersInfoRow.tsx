import { TableCell, TableRow } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Button } from "../../Global/Button/Button";
import { DataType } from "../../Global/types/Datatype";

export const UsersInfoRow = ({ user }: { user: DataType }) => {
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        {user.displayName}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.online}</TableCell>
      <TableCell align="right">
        <Button
          className="mb-4 md:mb-0"
          // onClick={ () => setOpenEdit(true) }
        >
          <FiEdit />
        </Button>

        <Button
          className=" ml-3 bg-red-400 "
          // onClick={ () => setOpen(true) }
        >
          <AiFillDelete />
        </Button>

        {/* {open && <DeleteDialog onOpen={open} handleClose={handleClose} data={data} />} */}
        {/* {openEdit && <FormDialog onOpen={openEdit} handleClose={handleEditClose} data={data} />} */}
      </TableCell>
    </TableRow>
  );
};
