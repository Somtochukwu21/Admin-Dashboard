import { useEffect } from "react";
import { useFetchedBets } from "../../../Global/hooks/useFetchedBets";
import { TbodyRow } from "./TbodyRow/TbodyRow";

export const Tbody = () => {
  const { betData, isLoading } = useFetchedBets();

  useEffect(() => {}, [isLoading]);

  return (
    <>
      {betData.map((data, i) => (
        <TbodyRow data={data} key={i} />
      ))}
    </>
  );
};
