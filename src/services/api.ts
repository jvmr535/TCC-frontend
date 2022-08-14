import axios from "axios";
import Authentication from "../services/auth";

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
  async storeUser(singUpCredentials: any): Promise<any> {
    return (await apiAddress.post("/user", singUpCredentials)).data;
  },
  async getExerciseAmount(subjectName: string): Promise<any> {
    return (await apiAddress.get(`/exercise/exercisesAmount/${subjectName}`))
      .data;
  },
  async getGenerateQuiz(quizSubjectsAmout: any): Promise<any> {
    return (await apiAddress.post("/exercise/generateQuiz/", quizSubjectsAmout))
      .data;
  },
  async getExercise(exerciseId: string): Promise<any> {
    return (await apiAddress.post(`/exercise/id/${exerciseId}/`)).data;
  },
  async quizCorrection(quizAsnwers: any): Promise<any> {
    return (await apiAddress.post("/exercise/quizCorrection/", quizAsnwers))
      .data;
  },
  async getQuizzesResult(): Promise<any> {
    return (await apiAddress.post("/exercise/generalResults")).data;
  },
  async getSolvedQuizzes(): Promise<any> {
    return (await apiAddress.post("/exercise/solvedQuizzes/")).data;
  },
  async getQuizReview(quizId: any): Promise<any> {
    return (await apiAddress.post(`exercise/quizReview/id/${quizId}`)).data;
  },
};

export default api;
