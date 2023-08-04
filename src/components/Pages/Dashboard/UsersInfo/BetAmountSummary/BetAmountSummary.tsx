import { useMemo } from "react";
import { AiTwotoneWallet } from "react-icons/ai";
import { useUserDetails } from "../../../../Global/hooks/useUserDetails";
import { UserCard } from "../UsersCard/UsersCard";

export const BetAmountSummary = () => {
  const { details } = useUserDetails();
  let sum = 0;
  const amount = details?.map(item => (sum += item.amount));
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
