import { AllUsers } from "./AllUsers/AllUsers";
import { BetAmountSummary } from "./BetAmountSummary/BetAmountSummary";

export const UsersInfo = () => {
  return (
    <div className="flex  w-full flex-col space-y-3 sm:items-center sm:justify-center lg:flex-row lg:items-start lg:justify-start lg:space-x-3 lg:space-y-0">
      <AllUsers />
      <BetAmountSummary />
    </div>
  );
};
