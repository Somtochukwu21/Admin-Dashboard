import { ref, update } from "firebase/database";
import { useState } from "react";
import { db } from "../../../../config/firebase";
import { Bet } from "../../../Pages/CreateBets/CreateBetForm/Bet";
import { useFetchedBets } from "../../hooks/useFetchedBets";

export const useFormDialogue = (handleClose: () => void, data: Bet) => {
  const [team1, setTeam1] = useState(data.team1);
  const [team2, setTeam2] = useState(data.team2);
  const [odd1, setOdd1] = useState(String(data.odd1));
  const [odd2, setOdd2] = useState(String(data.odd2));
  const [oddX, setOddX] = useState(String(data.oddx));
  const [stadium, setStadium] = useState(data.stadium);
  const [showAlert, setShowAlert] = useState(false);
  const { error, success } = useFetchedBets();
  const newId = Math.floor(Math.random() * 100);
  const newBet: Bet = {
    id: newId,
    team1,
    team2,
    odd1: parseFloat(odd1),
    odd2: parseFloat(odd2),
    oddx: parseFloat(oddX),
    stadium,
  };

  const handleSubmit = (id: string) => {
    update(ref(db, `/predictbet/${id}`), newBet);
    if (team1 === "" || team2 === "" || odd1 === "" || odd2 === "" || oddX === "" || stadium === "") {
      setShowAlert(true);
      return;
    }
    handleClose();
  };
  return {
    handleSubmit,
    team1,
    setTeam1,
    setTeam2,
    team2,
    setOdd1,
    odd1,
    oddX,
    setOddX,
    odd2,
    setOdd2,
    stadium,
    setStadium,
    showAlert,
    setShowAlert,
    success,
    error,
  };
};
