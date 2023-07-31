import { useQuery } from "react-query";
import { Amount } from "../types/amount";

export const useUserDetails = () => {
  const fetchData = async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/placedbetamount.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const fetchedData: Amount[] = [];
    for (const key in data) {
      for (const placedBetKey in data[key]) {
        const placedBetDetails = data[key][placedBetKey];

        for (const userPlacedBetDetails in placedBetDetails) {
          const usersBet = placedBetDetails[userPlacedBetDetails];

          fetchedData.push({
            amount: placedBetDetails.amountPlacedOnBet,
            bet: usersBet.teamPlace,
            oddVal: usersBet.oddValue,
            oddType: usersBet.oddType,
            id: key,
          });
        }
      }
    }

    const filteredData = fetchedData.filter(item => item.bet !== undefined);
    return filteredData;
  };

  const { data, isLoading, isError, isSuccess } = useQuery("amount", fetchData);
  const details = data;
  return { details, isLoading };
};
