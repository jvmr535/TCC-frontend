import React, { useState } from "react";
import { ILogin } from "../../interfaces";
import api from "../../services/api";
import Authentication from "../../services/auth";
import authContext from "../../context/AuthenticationContext";

import { SignInBox } from "./styles";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [, setAuthenticationContext] = authContext.useAuthenticationContext();

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
      const { body: token } = await api.login(loginCredentials);
      Authentication.login(token);
      setAuthenticationContext({ token });
    } catch (error) {}
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignInBox>
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
          sx={{ mt: 3, mb: 1 }}
          onClick={() => handleSubmit()}
        >
          Entrar
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 0, mb: 2 }}
          onClick={() => navigate("/cadastro")}
        >
          Cadastre-se
        </Button>
      </SignInBox>
    </Container>
  );
};

export default SignIn;
