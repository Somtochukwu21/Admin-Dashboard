import { TableBody } from "@mui/material";
import { ReactNode } from "react";

export const TableData = ({ children }: { children: ReactNode }) => {
  return <TableBody> {children}</TableBody>;
};
