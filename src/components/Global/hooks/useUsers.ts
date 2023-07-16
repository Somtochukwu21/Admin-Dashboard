import { useQuery } from "react-query";
import { DataType } from "../types/Datatype";

export const useUsers = () => {
  const fetchUser = async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/users.json");

    const data: DataType[] = await response.json();
    const fetchData = Object.values(data);
    return fetchData;
  };

  const { data, isLoading, isError } = useQuery("user", fetchUser);

  return { data, isLoading, isError };
};
