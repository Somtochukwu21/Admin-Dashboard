import { TableCell, TableRow } from "@mui/material";
import { ReactNode } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Button } from "../../../../Global/Button/Button";
import { Bet } from "../../../CreateBets/CreateBetForm/Bet";
type PropType = {
  data: Bet;
  update: (id: ReactNode) => void;
};

export const TbodyRow = ({ data, update }: PropType) => {
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
        <Button>
          <FiEdit />
        </Button>

        <Button
          className=" ml-3 bg-red-400 "
          onClick={() => {
            // console.log(data.id);
            update(data.id);
          }}
        >
          <AiFillDelete />
        </Button>
      </TableCell>
    </TableRow>
  );
};

// Working on the delete
