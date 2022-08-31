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
    return await apiAddress.post("/session", loginCredentials);
  },
  async storeUser(singUpCredentials: any): Promise<any> {
    return await apiAddress.post("/user", singUpCredentials);
  },
  async getExerciseAmount(subjectName: string): Promise<any> {
    return await apiAddress.get(`/exercise/amount/${subjectName}`);
  },
  async getGenerateQuiz(quizSubjectsAmout: any): Promise<any> {
    return await apiAddress.post("/quiz", quizSubjectsAmout);
  },
  async quizCorrection(quizAsnwers: any): Promise<any> {
    return await apiAddress.post("/quiz/correction/", quizAsnwers);
  },
  async getExercise(exerciseId: string): Promise<any> {
    return await apiAddress.get(`/exercise/getById/${exerciseId}/`);
  },
  async getQuizzesResult(): Promise<any> {
    return await apiAddress.post("/quiz/generalResults");
  },
  async getSolvedQuizzes(): Promise<any> {
    return await apiAddress.post("/quiz/solvedQuizzes/");
  },
  async getQuizReview(quizId: string): Promise<any> {
    return await apiAddress.get(`quiz/review/${quizId}`);
  },
};

export default api;
