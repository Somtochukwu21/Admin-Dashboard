import "firebase/firestore";
import { useState } from "react";
import { useMutation } from "react-query";
import { Bet } from "../types/Bet";
interface State {
  error: boolean;
  message?: string;
}

export const usePostedBets = () => {
  const [error, setError] = useState<State>({ error: false });
  const createBet = async (betData: Bet) => {
    try {
      const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/predictbet.json", {
        method: "POST",
        body: JSON.stringify(betData),
      });

      if (!response.ok) {
        setError({ error: true, message: "Failed to post bet data" });
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const mutation = useMutation(createBet);

  return { mutation, error };
};
