import { Route, Routes } from "react-router-dom";
import { CreateBet } from "./components/Pages/CreateBets/CreateBets";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { SignIn } from "./components/Pages/SignIn/SignIn";
import { Users } from "./components/Pages/Users/Users";
import { ViewBets } from "./components/Pages/ViewBets/ViewBets";
import { ProtectedRoutes } from "./ProtectedRoutes";

const App = () => {
  return (
    <div className="h-[100vh]  bg-primary font-inter tracking-wide">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="createbet" element={<CreateBet />}></Route>
          <Route path="viewbets" element={<ViewBets />}></Route>
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
