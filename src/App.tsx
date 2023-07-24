import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Global/context/AuthContext";
import { ProtectedRoute } from "./components/Global/ProtectedRoute/ProtectedRoute";
import { CreateBet } from "./components/Pages/CreateBets/CreateBets";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { SignIn } from "./components/Pages/SignIn/SignIn";
import { Users } from "./components/Pages/Users/Users";
import { ViewBets } from "./components/Pages/ViewBets/ViewBets";

const App = () => {
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is already logged in by reading from localStorage
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsAlreadyLoggedIn(true);
    }
  }, []);
  return (
    <div className="h-[100vh] bg-primary font-inter tracking-wide">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route element={isAlreadyLoggedIn && <ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="createbet" element={<CreateBet />}></Route>
            <Route path="viewbets" element={<ViewBets />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
