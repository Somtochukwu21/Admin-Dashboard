import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { user } = useContext(AuthContext);
  return user && user.loggedIn;
};
export const ProtectedRoute = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
};
