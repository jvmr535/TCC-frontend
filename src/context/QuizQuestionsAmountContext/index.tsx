import React, { useContext, useState } from "react";

interface IQuizQuestionsAmountContext {
  english: number;
  spanish: number;
  portuguese: number;
  humanSciences: number;
  natureSciences: number;
  mathematics: number;
}

const QuizQuestionsAmountContextWrapper =
  React.createContext<IQuizQuestionsAmountContext | null>(null);
const QuizQuestionsAmountContextUpdaterWrapper = React.createContext<
  any | null
>(null);

const useQuizQuestionsAmountContext = () => {
  const contextValue = useContext(QuizQuestionsAmountContextWrapper);
  const contextUpdater = useContext(QuizQuestionsAmountContextUpdaterWrapper);

  return [contextValue, contextUpdater];
};

const QuizQuestionsAmountContext = ({ children }: { children: any }) => {
  const [contextObject, setContextObject] =
    useState<IQuizQuestionsAmountContext>({
      english: 0,
      spanish: 0,
      portuguese: 0,
      humanSciences: 0,
      natureSciences: 0,
      mathematics: 0,
    });

  const updateContextObject = (value: IQuizQuestionsAmountContext) => {
    setContextObject(value);
  };

  return (
    <QuizQuestionsAmountContextWrapper.Provider value={contextObject}>
      <QuizQuestionsAmountContextUpdaterWrapper.Provider
        value={updateContextObject}
      >
        {children}
      </QuizQuestionsAmountContextUpdaterWrapper.Provider>
    </QuizQuestionsAmountContextWrapper.Provider>
  );
};

const quizQuestionsAmountContext = {
  useQuizQuestionsAmountContext,
  QuizQuestionsAmountContext,
};

export default quizQuestionsAmountContext;
