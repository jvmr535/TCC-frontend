import axios from "axios";
import Authentication from "../services/auth";

import { ILogin } from "../interfaces";

const apiAddress = axios.create({
  baseURL: "http://localhost:3333",
});

apiAddress.interceptors.request.use(async (config) => {
  const token = Authentication.getToken();
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  }
  return config;
});

const api = {
  async login(loginCredentials: any): Promise<any> {
    return (await apiAddress.post("/session", loginCredentials)).data;
  },
  async getExerciseAmount(subjectName: string): Promise<any> {
    return (await apiAddress.get(`/exercise/exercisesAmount/${subjectName}`))
      .data;
  },
  async getGenerateQuiz(quizSubjectsAmout: any): Promise<any> {
    return (await apiAddress.post("/exercise/generateQuiz/", quizSubjectsAmout))
      .data;
  },
};

export default api;
