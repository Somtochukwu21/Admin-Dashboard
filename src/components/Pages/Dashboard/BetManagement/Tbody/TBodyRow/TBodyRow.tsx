import { Box, Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Bet } from "../../../../../Global/types/Bet";
type PropType = { data: Bet };
export const TableBodyRow = ({ data }: PropType) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {`${data.team1} - ${data.team2}`}
        </TableCell>
        <TableCell align="right">{data.odd1}</TableCell>
        <TableCell align="right">{data.oddx}</TableCell>
        <TableCell align="right">{data.odd2}</TableCell>
        <TableCell align="right">{data.stadium}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              {/* <HistoryTable row={row} />
               Whenever we solve the case of admin knowing the particular bet a user have placed then we have solve this
              */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};
