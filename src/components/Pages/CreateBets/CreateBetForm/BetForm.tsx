import { AlertError } from "../../../Global/Alert/Alert";
import { AlertSuccess } from "../../../Global/Alert/AlertSuccess";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { MaxCard } from "../../../Global/Card/MaxCard/MaxCard";
import { Input } from "../../../Global/Input/Input";
import { useCreateBet } from "../hooks/useCreateBet";

export const BetForm: React.FC = () => {
  const {
    handleSubmit,
    setShowAlert,
    team1,
    team2,
    showAlert,
    setTeam1,
    setTeam2,
    setStadium,
    stadium,
    odd1,
    odd2,
    oddx,
    setOdd1,
    setOdd2,
    success,
    error,
    setOddx,
  } = useCreateBet();

  const stopInput = () => {
    return false;
  };

  return (
    <MaxCard>
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col bg-white md:space-y-4">
          <div className="md:flex md:items-center md:space-x-4 md:[&>*]:w-1/2 ">
            <div>
              <label htmlFor="team1">Home Team 1:</label>
              <Input
                type="text"
                id="team1"
                value={team1}
                placeholder="Enter home team"
                onChange={e => setTeam1(e.target.value)}
              />
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="team2">Away Team 2:</label>
              <Input
                type="text"
                id="team2"
                placeholder="Enter away team"
                value={team2}
                onChange={e => setTeam2(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center md:space-x-4 md:[&>*]:w-1/2">
            <div className="mt-4 md:mt-0">
              <label htmlFor="odd1">Home Odd 1:</label>
              <Input
                type="number"
                id="odd1"
                placeholder="Enter home odd"
                value={odd1}
                onChange={e => setOdd1(e.target.value)}
              />
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="oddx">Draw Odd x:</label>
              <Input
                type="number"
                placeholder="Enter draw odd"
                id="oddx"
                value={oddx}
                onChange={e => setOddx(e.target.value)}
              />
            </div>
          </div>
          <div className=" md:flex md:items-end  md:space-x-4 md:[&>*]:w-1/2">
            <div className="mt-4 md:mt-0">
              <label htmlFor="odd2">Away Odd 2:</label>
              <Input
                type="number"
                id="odd2"
                value={odd2}
                placeholder="Enter away odd"
                onChange={e => setOdd2(e.target.value)}
              />
            </div>

            <div className="mt-4 md:mt-0">
              <label htmlFor="stadium">Select Stadium:</label>
              <Input
                type="text"
                id="stadium"
                placeholder="Enter away odd"
                value={stadium}
                onChange={e => setStadium(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-7 w-full">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>

        {showAlert ? <AlertError onClose={() => setShowAlert(false)}>Your input can not be left empty</AlertError> : ""}
        {success ? <AlertSuccess onClose={() => setShowAlert(false)}>Sent Successfull</AlertSuccess> : false}
        {error ? <AlertError onClose={() => setShowAlert(false)}>Check Your Internet Connection</AlertError> : false}
      </Card>
    </MaxCard>
  );
};
