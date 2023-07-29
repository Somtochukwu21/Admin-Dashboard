import { useState } from "react";
import { auth } from "../../../../config/firebase";
import { clearAuth, getAuth } from "../../Authentication/Authentication";

export const useProfile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const user = getAuth("user");
  const admin = user ? JSON.parse(user) : null;
  const name = admin.displayName;
  const firstLetter = name?.toString().charAt(0).toUpperCase() || "!";

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    auth.signOut();
    clearAuth("isLoggedIn");
    clearAuth("user");
    window.location.href = "/";
  };
  return {
    signOut,
    handleClick,
    handleClose,
    firstLetter,
    open,
    name,
    anchorEl,
  };
};
