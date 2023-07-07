import { TableBody } from "@mui/material";
import { useEffect } from "react";
import { useFetchedBets } from "../../../../Global/hooks/useFetchedBets";
import { TableBodyRow } from "./TBodyRow/TBodyRow";

interface Props {
  loading: (loading: boolean) => void;
}
export const TBody: React.FC<Props> = ({ loading }) => {
  const { betData, isLoading } = useFetchedBets();
  useEffect(() => {
    loading(isLoading);
  }, [isLoading, loading]);
  return (
    <TableBody>
      {betData.map((data, i) => (
        <TableBodyRow key={i} data={data} />
      ))}
    </TableBody>
  );
};
