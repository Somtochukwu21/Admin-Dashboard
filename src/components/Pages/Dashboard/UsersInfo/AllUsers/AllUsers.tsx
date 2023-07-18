import { FiUsers } from "react-icons/fi";
import { useUsers } from "../../../../Global/hooks/useUsers";
import { UserCard } from "../UsersCard/UsersCard";

export const AllUsers = () => {
  const { data } = useUsers();
  const totalUsers = String(data?.length);

  return (
    <UserCard
      info="All Users"
      icon={<FiUsers />}
      percent={`17%`}
      content={totalUsers !== "undefined" ? totalUsers : "Loading.."}
      className={totalUsers === "undefined" ? "animate-pulse" : ""}
    />
  );
};
