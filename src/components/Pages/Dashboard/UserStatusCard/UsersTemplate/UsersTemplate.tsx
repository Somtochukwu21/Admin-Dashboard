import { Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Fragment } from "react";

export const UsersTemplate = ({ name, src }: { name: string; src?: string }) => {
  return (
    <Fragment>
      <div className="flex items-center space-x-3">
        <div>
          <Avatar sx={{ bgcolor: blue[200] }}>{src}</Avatar>
        </div>
        <p className="font-semibold capitalize">{name}</p>
      </div>
    </Fragment>
  );
};
