import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { SideBar } from "../../Layouts/SideBar/SideBar";
import { AllBet } from "./AllBet/AllBet";

export const ViewBets = () => {
  return (
    <div className="flex h-[100vh] w-full">
      <div>
        <SideBar />
      </div>

      <div className="w-full overflow-y-scroll">
        <MaxCard>
          <Header routerName="View Bets" />
          <div className="px-3">
            <AllBet />
          </div>
        </MaxCard>
      </div>
    </div>
  );
};
