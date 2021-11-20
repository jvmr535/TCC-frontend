import React, { useState, useEffect } from "react";
import { ILogin } from "../../interfaces";
import Authentication from "../../services/auth";
import authContext from "../../context/AuthenticationContext";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import api from "../../services/api";

const SignIn: React.FC = () => {
  const [auth, setAuthenticationContext] =
    authContext.useAuthenticationContext();
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  const [loginCredentials, setLoginCredentials] = useState<ILogin>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      Authentication.login(await api.login(loginCredentials));
      setAuthenticationContext({ token: Authentication.getToken() });
    } catch (error) {}
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Usuário"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => handleSubmit()}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
