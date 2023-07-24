import { signInWithEmailAndPassword } from "firebase/auth";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../config/firebase";
import { useUsers } from "../../../Global/hooks/useUsers";

type FormValues = {
  email: string;
  password: string;
};

export const useSignin = (
  setUser: Dispatch<
    SetStateAction<{
      loggedIn: boolean;
    }>
  >
) => {
  const { data } = useUsers();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async values => {
    try {
      setIsLoading(true);
      const { email, password } = values;
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const userData = data?.filter(user => user.email === cred.user.email);
      userData?.map(userInfo => {
        if (userInfo.admin === true) {
          setUser({ loggedIn: true });
          if (location.state?.from) {
            navigate(location.state.from);
          }
          window.localStorage.setItem("isLoggedIn", "true");
        }
      });
    } catch (error: any) {
      console.log(error.message);
      // setMessage(error.message);
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    errors,
  };
};
