import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Card } from "../../../Global/Card/Card";
import { useUsers } from "../../../Global/hooks/useUsers";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { UsersInfoRow } from "./UsersInfoRow";

export const UsersInfoTable = () => {
  const { data, isLoading } = useUsers();

  return (
    <Card className="no-scroll mt-20 overflow-x-scroll  md:mt-0">
      {isLoading ? (
        <SkeletonFade width="162%" height={280} />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user, i) => (
              <UsersInfoRow user={user} key={i} />
            ))}
          </TableBody>
        </Table>
      )}{" "}
    </Card>
  );
};
