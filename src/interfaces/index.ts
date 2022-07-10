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
