import { TableBody } from "@mui/material";
import { Bet } from "../../../CreateBets/CreateBetForm/Bet";
import { TableBodyRow } from "./TBodyRow/TBodyRow";

interface Props {
  betData: Bet[];
}
export const TBody: React.FC<Props> = ({ betData }) => {
  return (
    <TableBody>
      {betData.map((data, i) => (
        <TableBodyRow key={i} data={data} />
      ))}
    </TableBody>
  );
};
