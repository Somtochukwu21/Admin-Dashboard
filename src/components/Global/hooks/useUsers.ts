import { useQuery } from "react-query";
import { DataType } from "../types/Datatype";

export const useUsers = () => {
  const fetchData = async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/users.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // const d = await response.json();
    // console.log(d);
    const data: DataType[] = await response.json();
    return Object.entries(data).map(([, { displayName, email, admin, userid }]) => ({
      userid,
      displayName,
      email,
      admin,
    }));
  };

  const { data, isLoading, isError, isSuccess } = useQuery("Data", fetchData);
  return { data, isLoading, isError, isSuccess };
};
