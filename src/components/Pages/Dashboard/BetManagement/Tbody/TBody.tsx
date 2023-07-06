import { TableBody } from "@mui/material";
import { useFetchedBets } from "../../../../Global/hooks/useFetchedBets";
import { TableBodyRow } from "./TBodyRow/TBodyRow";

export const TBody = () => {
  const { betData } = useFetchedBets();
  return (
    <TableBody>
      {betData.map((data, i) => (
        <TableBodyRow key={i} data={data} />
      ))}
    </TableBody>
  );
};
