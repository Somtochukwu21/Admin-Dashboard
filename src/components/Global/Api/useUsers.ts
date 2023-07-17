import { useQuery } from "react-query";
import { DataType } from "../types/Datatype";

export const useUsers = () => {
  const fetchData = async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/users.json");

    const data: DataType[] = await response.json();
    const fetchedData = Object.values(data);
    return fetchedData;
  };

  const { data, isLoading, isError, isSuccess } = useQuery("Data", fetchData);

  return { data, isLoading, isError, isSuccess };
};
