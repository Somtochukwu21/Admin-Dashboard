import { TableCell } from "@mui/material";
import { Fragment } from "react";
import { useFetchedBets } from "../../hooks/useFetchedBets";
import { Bet } from "../../types/Bet";
export const TableDataRows = () => {
  const { betData } = useFetchedBets();
  // return <></>;

  return (
    <>
      {betData.map((data, i) => (
        <Tr key={i} data={data} />
      ))}
    </>
  );
};

const Tr = ({ data }: { data: Bet }) => {
  console.log(data);

  return (
    <Fragment>
      <TableCell component="th" scope="row">
        {`${data.team1} - ${data.team2}`}
      </TableCell>
      <TableCell align="right">{data.odd1}</TableCell>
      <TableCell align="right">{data.oddx}</TableCell>
      <TableCell align="right">{data.odd2}</TableCell>
      <TableCell align="right">{data.stadium}</TableCell>
    </Fragment>
  );
};
