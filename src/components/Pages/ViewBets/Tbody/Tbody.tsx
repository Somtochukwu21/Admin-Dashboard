import { TableBody } from "@mui/material";
import { useEffect } from "react";
import { useBets } from "../../../Global/Api/useBets";
import { TbodyRow } from "./TbodyRow/TbodyRow";

export const Tbody = () => {
  const { betData, isLoading } = useBets();

  useEffect(() => {}, [isLoading]);

  return (
    <TableBody>
      {betData.map((data, i) => (
        <TbodyRow data={data} key={i} />
      ))}
    </TableBody>
  );
};
