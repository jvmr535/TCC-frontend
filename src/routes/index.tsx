import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalTheme from "../styles/global";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Header from "../components/Header";
import authContext from "../context/AuthenticationContext";
import Quiz from "../pages/Quiz";
import quizExercisesContext from "../context/QuizExercisesContext";
import Results from "../pages/Results";
import QuizReview from "../pages/QuizReview";

const AppRoutes: React.FC = () => {
  const [auth] = authContext.useAuthenticationContext();

  const routesWithoutAuth = (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  );

  const routesWithAuth = (
    <quizExercisesContext.QuizExercisesContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/quizReview" element={<QuizReview />} />
      </Routes>
    </quizExercisesContext.QuizExercisesContext>
  );

  return (
    <>
      <GlobalTheme />
      <BrowserRouter>
        {auth.token ? routesWithAuth : routesWithoutAuth}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
