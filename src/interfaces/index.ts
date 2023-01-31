export interface ILogin {
  username: string;
  password: string;
}

export interface ISubjectCard {
  subjectNameInPortuguese: string;
  subjectNameInEnglish: string;
  imageSource: React.ReactNode;
  isQuizGeneration?: boolean;
  isQuizResults?: boolean;
  isQuizDetails?: boolean;
  minCardWidth?: string;
  minCardHeight?: string;
  subjectTotalAndRightQuestions?: any;
}

export interface IIconCustomProps {
  colorHex: string;
  width: string;
  height: string;
  isQuizGeneration?: boolean;
  isQuizResults?: boolean;
  isQuizDetails?: boolean;
  minCardWidth?: string;
  minCardHeight?: string;
  quizzesResults?: any;
}

export interface IQuizAnswers {
  exercise: string;
  answer: string;
}

export interface ISignUp {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IExercise {
  reference: string;
  subject: string;
  exerciseFileToBase64?: string;
  rightAnswer: string;
}

export interface IRanking {
  position: number;
  userEmail: string;
  totalQuestions: number;
  rightAnswers: number;
  hitRatio: number;
}
