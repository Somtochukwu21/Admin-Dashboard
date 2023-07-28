import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "./components/Global/Authentication/Authentication";

const IsAuth = () => {
  const isLoggedIn = getAuth("isLoggedIn");
  return isLoggedIn === "true";
};

export const ProtectedRoutes = () => {
  return IsAuth() ? <Outlet /> : <Navigate to="/signin" />;
};
