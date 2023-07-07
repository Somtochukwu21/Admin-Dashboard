import { TableCell, TableHead, TableRow } from "@mui/material";

export const Thead = () => {
  const texts = ["HOME team - AWAY team", "1", "x", "2", "Stadium", "Actions"];
  return (
    <TableHead>
      <TableRow>
        {texts.map((text, i) => {
          const right = i > 0 ? "right" : "left";

          return (
            <TableCell key={i} align={`${right}`}>
              {text}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
