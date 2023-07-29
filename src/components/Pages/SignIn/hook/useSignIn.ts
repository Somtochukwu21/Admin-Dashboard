import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../config/firebase";
import { setAuth } from "../../../Global/Authentication/Authentication";
import { useUsers } from "../../../Global/hooks/useUsers";

type FormValues = {
  email: string;
  password: string;
};

interface SignInResult {
  success: boolean;
  message?: string;
}

export const useSignIn = () => {
  const { data: usersData } = useUsers();
  const navigate = useNavigate();
  const [signInResult, setSignInResult] = useState<SignInResult>({
    success: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const handleSignIn: SubmitHandler<FormValues> = async values => {
    try {
      setIsLoading(true);
      const { email, password } = values;

      // Perform the sign-in operation
      const credentials = await signInWithEmailAndPassword(auth, email, password);

      // Check if the signed-in user is an admin
      const userData = usersData?.find(user => user.email === credentials.user.email);
      if (userData?.admin === true) {
        setSignInResult({ success: true });
        setAuth("isLoggedIn", "true");
        navigate("/");
      } else {
        setSignInResult({ success: false, message: "Access Denied" });
      }
    } catch (error: any) {
      // Handle specific error types for better user feedback
      let errorMessage = "An error occurred during sign-in.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found. Please check your credentials.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Invalid password. Please try again.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your internet connection.";
      }

      setSignInResult({ success: false, message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSignIn,
    control,
    errors,
    isLoading,
    signInResult,
    handleSubmit,
  };
};
