import React, { useState } from "react";
import api from "../../services/api";

import { SignUpBox, NameContainer } from "./styles";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ISignUp } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import {
  toastNotificationInfo,
  toastNotificationSuccess,
  toastNotificationWarning,
} from "../../assets/ToastNotification";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState<ISignUp>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (
        signUp.password !== signUp.confirmPassword &&
        signUp.password !== "" &&
        signUp.confirmPassword !== ""
      ) {
        toastNotificationInfo("As senhas não correspondem");
      } else {
        await api.storeUser({
          email: signUp.email,
          username: signUp.username,
          password: signUp.password,
          firstName: signUp.firstName,
          lastName: signUp.lastName,
        });
        toastNotificationSuccess(
          `${signUp.firstName}, seu cadastro foi realizado com sucesso 😊`
        );
        navigate("/");
      }
    } catch (error) {
      toastNotificationWarning("Erro ao fazer o cadastro");
      toastNotificationWarning(
        "O erro pode ter sido causado por uma instabilidade no servidor"
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignUpBox>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <NameContainer>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Nome"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Sobrenome"
            type="lastName"
            id="lastName"
            autoComplete="lastName"
            onChange={handleChange}
          />
        </NameContainer>
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
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
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
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirme a senha"
          type="password"
          id="confirmPassword"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
          onClick={() => handleSubmit()}
        >
          Registrar
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 0, mb: 2 }}
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </SignUpBox>
    </Container>
  );
};

export default SignUp;
