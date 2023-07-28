import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { SideBar } from "../../Layouts/SideBar/SideBar";
import { BetForm } from "./CreateBetForm/BetForm";
export const CreateBet = () => {
  return (
    <div className="flex h-[100vh] w-full">
      <div>
        <SideBar />
      </div>

      <div className="w-full overflow-y-scroll">
        <MaxCard className="mt-20 w-full lg:mt-0">
          <Header routerName="Create bets" />
          <BetForm />
        </MaxCard>
      </div>
    </div>
  );
};
