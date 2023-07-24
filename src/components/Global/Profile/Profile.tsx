import { Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ReactNode } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
type ProfileType = React.ComponentProps<"div"> & { icon?: ReactNode };

export const Profile = ({ className, ...props }: ProfileType) => {
  const signOut = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };
  return (
    <div className="flex space-x-2">
      <Avatar sx={{ bgcolor: blue[200] }} alt="Admin profile pic">
        A
      </Avatar>

      <div className="flex items-center space-x-1">
        <h4 className="text-sm text-black">Admin</h4>
        <MdKeyboardArrowDown className="text-gray-500" />
      </div>
    </div>
  );
};
