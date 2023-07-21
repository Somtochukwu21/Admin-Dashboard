import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent } from "react";
import { Button } from "../../Global/Button/Button";
import { Card } from "../../Global/Card/Card";

export const SignIn = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component={Card} maxWidth="xs">
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            className="border-green-500"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button type="submit" className="mb-2 mt-3 w-full uppercase">
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
