import { useQuery } from "react-query";
import { Amount } from "../types/amount";

export const useBalance = () => {
  const fetchData = async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/placedbetamount.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const fetchedData: Amount[] = [];
    for (const key in data) {
      for (const i in data[key]) {
        for (const j in data[key][i]) {
          const d = data[key][i][j];
          fetchedData.push({
            id: key,
            k: d.id,
            amount: data[key][i].amountPlacedOnBet,
            bet: d.teamPlace,
            oddVal: d.oddValue,
            oddType: d.oddType,
          });
        }
      }
    }

    const filteredData = fetchedData.filter(item => item.bet !== undefined);
    return filteredData;
  };

  const { data, isLoading, isError, isSuccess } = useQuery("amount", fetchData);
  return { data, isLoading };
};
