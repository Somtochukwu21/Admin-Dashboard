import { useEffect, useState } from "react";
import { DataType } from "../types/Datatype";

export const useUsers = () => {
  const [usersData, setUsersData] = useState<DataType[]>();
  const fetchUser = async () => {
    try {
      const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/users.json");
      if (!response.ok) {
        console.log("error");
      }

      const data: DataType[] = await response.json();
      const fetchData = Object.values(data);
      setUsersData(fetchData);
    } catch (e: any) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchedUsers = usersData?.filter(obj => obj.hasOwnProperty("id"));
  return { fetchedUsers };
};
