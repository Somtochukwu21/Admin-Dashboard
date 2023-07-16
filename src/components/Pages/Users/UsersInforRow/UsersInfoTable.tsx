import { Table, TableBody, TableHead } from "@mui/material";
import { Card } from "../../../Global/Card/Card";
import { useUsers } from "../../../Global/hooks/useUsers";
import { SkeletonFade } from "../../../Global/SkeletonFade/SkeletonFade";
import { TableHeader } from "../../../Global/Table/TableHeader/TableHeader";
import { UsersInfoRow } from "./UsersInfoRow";

export const UsersInfoTable = () => {
  const { data, isLoading } = useUsers();

  const texts = ["Name", "Email", "Action"];
  return (
    <Card className="no-scroll mt-20 overflow-x-scroll  md:mt-0">
      {isLoading ? (
        <SkeletonFade width="162%" height={280} />
      ) : (
        <Table>
          <TableHead>
            <TableHeader textArr={texts} />
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
