import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { AllBet } from "./AllBet/AllBet";

export const ViewBets = () => {
  return (
    <MaxCard>
      <Header routerName="View Bets" />
      <div className="px-3">
        <AllBet />
      </div>
    </MaxCard>
  );
};
