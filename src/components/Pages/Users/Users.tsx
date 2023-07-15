import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { UsersInfoTable } from "./UsersInforRow/UsersInfoTable";

export const Users = () => {
  return (
    <MaxCard className=" bg-primary text-xl font-semibold text-gray-900 ">
      <Header routerName="Users" />
      <div className="px-3">
        <UsersInfoTable />
      </div>
    </MaxCard>
  );
};
