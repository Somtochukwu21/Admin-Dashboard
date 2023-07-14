// import { useAuthState } from "react-firebase-hooks/auth";
import { Table, TableBody, TableHead } from "@mui/material";
import { Card } from "../../Global/Card/Card";
import { useUsers } from "../../Global/hooks/useUsers";
import { TableHeader } from "../../Global/Table/TableHeader/TableHeader";
import { UsersInfoRow } from "./UsersInfoRow";

export const UsersInfoTable = () => {
  const { fetchedUsers } = useUsers();
  // fetchedUsers?.map(user => console.log(user));
  const texts = ["Name", "Email", "Status", "Action"];
  return (
    <Card className="no-scroll mt-20 overflow-x-scroll  md:mt-0">
      <Table>
        <TableHead>
          <TableHeader textArr={texts} from={0} />
        </TableHead>
        <TableBody>
          {fetchedUsers?.map((user, i) => (
            <UsersInfoRow user={user} key={i} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
