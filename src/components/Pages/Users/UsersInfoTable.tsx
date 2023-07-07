import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Card } from "../../Global/Card/Card";
import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "AllUsers", headerName: "All Users", width: 180 },
  { field: "active", headerName: "Active Users", width: 180 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "block", headerName: "Block Users", width: 120 },
  { field: "delete", headerName: "delete Users", width: 120 },
];

const rows = [
  { id: 1, active: false, AllUsers: "Snow", firstName: "Jon", delete: "Delect User", block: "Block user" },
  { id: 2, active: false, AllUsers: "Lannister", firstName: "Cersei", delete: "Delect User", block: "Block user" },
  { id: 3, active: false, AllUsers: "Lannister", firstName: "Jaime", delete: "Delect User", block: "Block user" },
  { id: 4, active: false, AllUsers: "Stark", firstName: "Arya", delete: "Delect User", block: "Block user" },
  {
    id: 5,
    active: false,
    AllUsers: "Targaryen",
    firstName: "Daenerys",
    delete: "Delect User",
    block: "Block user",
  },
  { id: 6, active: false, AllUsers: "Melisandre", firstName: "Emeka", delete: "Delect User", block: "Block user" },
  { id: 7, active: false, AllUsers: "Clifford", firstName: "Ferrara", delete: "Delect User", block: "Block user" },
  { id: 8, active: false, AllUsers: "Frances", firstName: "Rossini", delete: "Delect User", block: "Block user" },
  { id: 9, active: false, AllUsers: "Roxie", firstName: "Harvey", delete: "Delect User", block: "Block user" },
];

export const UsersInfoTable = () => {
  return (
    <MaxCard>
      <Card className="sm:mt-20 md:mt-0">
        <div className="h-auto w-full bg-white">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Card>
    </MaxCard>
  );
};
