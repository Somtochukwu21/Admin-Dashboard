// import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button } from "../../../../Global/Button/Button";
import { useUsers } from "../../../../Global/hooks/useUsers";
import { TextWrap } from "../../../../Global/TextWrap/TextWrap";
import { UsersTemplate } from "../UsersTemplate/UsersTemplate";

export const ActiveUsers = () => {
  const { data } = useUsers();
  const paginatedData = data?.slice(0, 7);

  return (
    <div className="mb-9">
      <TextWrap className="text-sm">Active Users</TextWrap>
      {paginatedData ? (
        <div className="mt-4 space-y-2">
          {paginatedData.map((user, i) => (
            <UsersTemplate src={user.displayName.charAt(0).toLocaleUpperCase()} name={user.displayName} key={i} />
          ))}
          <div className="flex justify-end">
            <Link to="/users">
              <Button>View all</Button>
            </Link>
          </div>
        </div>
      ) : (
        <TextWrap className="mt-4 animate-pulse">Loading..</TextWrap>
      )}
    </div>
  );
};
