import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Button } from "../../../../Global/Button/Button";
import { DeleteDialog } from "../../../../Global/DialogBox/DeleteDialog";
import FormDialog from "../../../../Global/DialogBox/FormDialogue";
import { Bet } from "../../../CreateBets/CreateBetForm/Bet";
type PropType = {
  data: Bet;
};

export const TbodyRow = ({ data }: PropType) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        {`${data.team1} - ${data.team2}`}
      </TableCell>
      <TableCell align="right">{data.odd1}</TableCell>
      <TableCell align="right">{data.oddx}</TableCell>
      <TableCell align="right">{data.odd2}</TableCell>
      <TableCell align="right">{data.stadium}</TableCell>
      <TableCell align="right">
        <Button className="mb-4 md:mb-0" onClick={() => setOpenEdit(true)}>
          <FiEdit />
        </Button>

        <Button className=" ml-3 bg-red-400 " onClick={() => setOpen(true)}>
          <AiFillDelete />
        </Button>

        {open && <DeleteDialog onOpen={open} handleClose={handleClose} data={data} />}
        {openEdit && <FormDialog onOpen={openEdit} handleClose={handleEditClose} data={data} />}
      </TableCell>
    </TableRow>
  );
};

// Working on the delete
