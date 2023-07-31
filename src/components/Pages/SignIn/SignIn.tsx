import { Box, Container, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { ReactComponent as LoadingIcon } from "../../../assets/svg/loading.svg";
import { Button } from "../../Global/Button/Button";
import { Card } from "../../Global/Card/Card";
import { MessageComponent } from "../../Global/MessageComponent/MessageComponent";
import { useSignIn } from "./hook/useSignIn";

export const SignIn = () => {
  const { control, errors, handleSubmit, handleSignIn, isLoading, signInResult, signInResultErr } = useSignIn();
  return (
    <Container component={Card} maxWidth="xs" className="translate-y-[50%]">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[a-z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                className="border-green-500"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            className={`mb-2 mt-3 h-12 w-full uppercase ${isLoading ? "disabled:bg-[#008080b3]" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="[&>*]:h-10">
                <LoadingIcon />
              </div>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
        </form>
        {signInResult.success && (
          <MessageComponent className="border-l-[green] bg-green-200 " message={signInResult.message} />
        )}

        {signInResultErr.success && (
          <MessageComponent className="border-l-[red] bg-red-200" message={signInResultErr.message} />
        )}
      </Box>
    </Container>
  );
};
