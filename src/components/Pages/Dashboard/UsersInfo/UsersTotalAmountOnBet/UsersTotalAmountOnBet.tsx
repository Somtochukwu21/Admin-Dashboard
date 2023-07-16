import { AiTwotoneWallet } from "react-icons/ai";
import { UserCard } from "../UsersCard/UsersCard";

export const UsersTotalAmountOnBet = () => {
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
