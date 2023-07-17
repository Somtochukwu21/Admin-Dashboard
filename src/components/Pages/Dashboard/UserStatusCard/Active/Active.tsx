import { useUsers } from "../../../../Global/Api/useUsers";
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
        </div>
      ) : (
        <TextWrap className="mt-4 animate-pulse">Loading..</TextWrap>
      )}
    </div>
  );
};
