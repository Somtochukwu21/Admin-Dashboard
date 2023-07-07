import { TableCell, TableRow } from "@mui/material";
type PropType = { textArr: string[]; from: number };
export const TableHeader = ({ textArr, from }: PropType) => {
  return (
    <>
      <TableRow>
        {textArr.map((text, i) => {
          const right = i > from ? "right" : "left";

          return (
            <TableCell key={i} align={`${right}`}>
              {text}
            </TableCell>
          );
        })}
      </TableRow>
    </>
  );
};
