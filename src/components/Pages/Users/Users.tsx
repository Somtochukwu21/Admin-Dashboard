import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { SideBar } from "../../Layouts/SideBar/SideBar";
import { UsersInfoTable } from "./UsersInforRow/UsersInfoTable";

export const Users = () => {
  return (
    <div className="flex h-[100vh] w-full">
      <div>
        <SideBar />
      </div>

      <div className="w-full overflow-y-scroll">
        <MaxCard className=" bg-primary  ">
          <Header routerName="Users" />
          <div className="px-3">
            <UsersInfoTable />
          </div>
        </MaxCard>
      </div>
    </div>
  );
};
