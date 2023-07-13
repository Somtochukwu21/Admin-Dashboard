// import { useAuthState } from "react-firebase-hooks/auth";
import { Table, TableBody, TableHead } from "@mui/material";
import { Card } from "../../Global/Card/Card";
import { useUsers } from "../../Global/hooks/useUsers";
import { TableHeader } from "../../Global/Table/TableHeader/TableHeader";
import { UsersInfoRow } from "./UsersInfoRow";
// import { UsersInfoRow } from "./UsersInfoRow";

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
    // <MaxCard>
    //   <Card className="sm:mt-20 md:mt-0">
    //     <div className="h-auto w-full bg-white">
    //       <DataGrid
    //         rows={rows}
    //         columns={columns}
    //         initialState={{
    //           pagination: {
    //             paginationModel: { page: 0, pageSize: 5 },
    //           },
    //         }}
    //         pageSizeOptions={[5, 10]}
    //         checkboxSelection
    //       />
    //     </div>
    //   </Card>
    // </MaxCard>
  );
};
