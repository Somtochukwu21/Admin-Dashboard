import { useEffect, useState } from "react";
import { useFetchedBets } from "../../../Global/hooks/useFetchedBets";
import { Bet } from "../../CreateBets/CreateBetForm/Bet";
import { TbodyRow } from "./TbodyRow/TbodyRow";

// interface RowData {
//   id: number;
//   name: string;
//   age: number;
// }

export const Tbody = () => {
  const { betData, isLoading } = useFetchedBets();

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const [upDatedData, setUpDatedData] = useState<Bet[]>();

  const handleEdit = (id: number) => {
    // Handle edit functionality here
    console.log(`Editing row with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    const update = betData.filter(item => item.id !== id);
    setUpDatedData(update);
  };
  return (
    <>
      {betData.map((data, i) => (
        <TbodyRow data={data} key={i} update={handleDelete} />
      ))}
    </>
  );
};
/*
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.age}</td>
          <td>{item.age}</td>
          <td>{item.age}</td>
          <td>
          </td>
        </tr>
      ))}
    </tbody>
  
  */
