import { useQuery } from "react-query";
// import { Amount } from "../types/amount";

export const useBalance = () => {
  const fetchData = async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/placedbetamount.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const fetchedData = [];
    for (const key in data) {
      const loopD = data[key];
      for (const key in loopD) {
        console.log(loopD[key].amountPlacedOnBet);
      }
      fetchedData.push({
        id: key,
      });
    }
    return fetchedData;
  };

  const { data, isLoading, isError, isSuccess } = useQuery("amount", fetchData);
};
