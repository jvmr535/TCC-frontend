export interface ILogin {
  username: string;
  password: string;
}

export interface ISubjectCard {
  subjectNameInPortuguese: string;
  subjectNameInEnglish: string;
  imageSource: React.ReactNode;
  isQuizGeneration?: boolean;
  minCardWidth?: string;
  minCardHeight?: string;
}

export interface IIconCustomProps {
  colorHex: string;
  width: string;
  height: string;
  isQuizGeneration?: boolean;
  minCardWidth?: string;
  minCardHeight?: string;
}
