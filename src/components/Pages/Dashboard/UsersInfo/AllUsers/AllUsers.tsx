import { useMemo } from "react";
import { FiUsers } from "react-icons/fi";
import { useUsers } from "../../../../Global/hooks/useUsers";
import { UserCard } from "../UsersCard/UsersCard";

export const AllUsers = () => {
  const { data } = useUsers();
  const totalUsers = data?.length;
  const UsersIcon = useMemo(() => <FiUsers />, []);

  return (
    <UserCard
      info="All Users"
      icon={UsersIcon}
      percent={`17%`}
      content={totalUsers?.toLocaleString() ?? "Loading.."}
      className={totalUsers === undefined ? "animate-pulse" : ""}
    />
  );
};
