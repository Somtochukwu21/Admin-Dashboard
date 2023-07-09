import { ReactNode, useEffect, useState } from "react";
import { useFetchedBets } from "../../../Global/hooks/useFetchedBets";
import { Bet } from "../../CreateBets/CreateBetForm/Bet";
import { TbodyRow } from "./TbodyRow/TbodyRow";

export const Tbody = () => {
  const { betData, isLoading, data } = useFetchedBets();

  useEffect(() => {}, [isLoading]);

  const [upDatedData, setUpDatedData] = useState<Bet[]>();

  const handleEdit = (id: number) => {
    // Handle edit functionality here
    console.log(`Editing row with ID: ${id}`);
  };

  const handleDelete = (id: ReactNode) => {
    // const update = betData.filter(item => {
    //   item.id !== id;
    // });
    // setUpDatedData(update);
  };
  return (
    <>
      {betData.map((data, i) => (
        <TbodyRow data={data} key={i} update={handleDelete} />
      ))}
    </>
  );
};
