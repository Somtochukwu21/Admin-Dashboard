import { UserCard } from "../UsersCard/UsersCard";
import { PiUserGearLight } from "react-icons/pi";

export const ActiveUsers = () => {
	return (
		<UserCard info="Active Users" icon={<PiUserGearLight />} percent={`17%`} />
	);
};
