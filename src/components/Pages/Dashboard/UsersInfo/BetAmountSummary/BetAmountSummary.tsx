import { AiTwotoneWallet } from "react-icons/ai";
import { useBalance } from "../../../../Global/hooks/useBalance";
import { UserCard } from "../UsersCard/UsersCard";

export const BetAmountSummary = () => {
  useBalance();
  return (
    <UserCard
      info="Total User Bet"
      icon={<AiTwotoneWallet />}
      percent={`17%`}
      content="Coming.."
      className="animate-pulse"
    />
  );
};
