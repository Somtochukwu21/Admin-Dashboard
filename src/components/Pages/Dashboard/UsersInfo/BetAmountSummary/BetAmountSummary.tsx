import { useMemo } from "react";
import { AiTwotoneWallet } from "react-icons/ai";
import { useBalance } from "../../../../Global/hooks/useBalance";
import { UserCard } from "../UsersCard/UsersCard";

export const BetAmountSummary = () => {
  const { data } = useBalance();
  let sum = 0;
  const amount = data?.map(item => (sum += item.amount));
  const WalletIcon = useMemo(() => <AiTwotoneWallet />, []);
  return (
    <UserCard
      info="Total User Bet"
      icon={WalletIcon}
      percent={`17%`}
      content={amount !== undefined ? "$" + sum.toLocaleString() : "Loading"}
      className={amount === undefined ? "animate-pulse" : ""}
    />
  );
};

// I need to create a button that can tick that a match is over
//And also awarding a winner
