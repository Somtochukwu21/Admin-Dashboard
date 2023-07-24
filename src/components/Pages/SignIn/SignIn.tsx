import { Box, Container, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { Button } from "../../Global/Button/Button";
import { Card } from "../../Global/Card/Card";
import { AuthContext } from "../../Global/context/AuthContext";
import { useSignin } from "./hook/useSignin";

export const SignIn = () => {
  const { setUser } = useContext(AuthContext);

  const { control, errors, handleSubmit, onSubmit } = useSignin(setUser);
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
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit" className="mb-2 mt-3 w-full uppercase">
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};
